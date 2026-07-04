"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseAdminClient } from "@/lib/supabaseAdminClient";
import "../admin.css";

export default function AdminLogin() {
  const router = useRouter();
  const [step, setStep] = useState<"email" | "code">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    setError("");
    
    const { error: signInError } = await supabaseAdminClient.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: false, // Security: do not allow strangers to create accounts via OTP
      },
    });

    setLoading(false);

    if (signInError) {
      // For security, if `shouldCreateUser: false` triggers an error because they don't exist,
      // it might say "Signups not allowed for otp". 
      if (signInError.message.includes("Signups not allowed")) {
         setError("This email is not authorized as an admin.");
      } else {
         setError(signInError.message);
      }
      return;
    }

    setStep("code");
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) return;
    
    setLoading(true);
    setError("");

    const { error: verifyError } = await supabaseAdminClient.auth.verifyOtp({
      email,
      token: code,
      type: "email",
    });

    setLoading(false);

    if (verifyError) {
      setError(verifyError.message);
      return;
    }

    // Success! Redirect to dashboard (layout will verify the admin role via /admin/me)
    router.push("/admin");
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <img src="/images/final_riksho.png" alt="Riksho Admin" className="admin-login-logo" />
        <h2 className="admin-page-title" style={{ fontSize: "24px", marginBottom: "8px" }}>Admin Portal</h2>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "24px" }}>
          Sign in to manage drivers and platform operations.
        </p>

        {error && <div className="admin-error">{error}</div>}

        {step === "email" ? (
          <form onSubmit={handleSendCode}>
            <input
              type="email"
              placeholder="Admin Email Address"
              className="admin-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="admin-btn admin-btn-primary admin-btn-block"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Login Code"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyCode}>
            <p style={{ fontSize: "14px", marginBottom: "16px" }}>Code sent to {email}</p>
            <input
              type="text"
              placeholder="6-digit code"
              className="admin-input"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              maxLength={6}
            />
            <button 
              type="submit" 
              className="admin-btn admin-btn-primary admin-btn-block"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Sign In"}
            </button>
            <button 
              type="button" 
              className="admin-btn admin-btn-secondary admin-btn-block"
              style={{ marginTop: "12px" }}
              onClick={() => setStep("email")}
              disabled={loading}
            >
              Back
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
