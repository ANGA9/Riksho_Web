"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { supabaseAdminClient } from "@/lib/supabaseAdminClient";
import { AlertCircle, ArrowLeft } from "lucide-react";
import "../admin.css";

export default function AdminLogin() {
  const router = useRouter();
  const [step, setStep] = useState<"email" | "code">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [otpArray, setOtpArray] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleOtpChange = (index: number, value: string) => {
    // Handle paste or multiple chars
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split('');
      const newOtp = [...otpArray];
      pastedCode.forEach((char, i) => {
        if (index + i < 6) newOtp[index + i] = char;
      });
      setOtpArray(newOtp);
      setCode(newOtp.join(''));
      
      const nextIndex = Math.min(index + pastedCode.length, 5);
      inputRefs.current[nextIndex]?.focus();
      return;
    }

    const newOtp = [...otpArray];
    newOtp[index] = value;
    setOtpArray(newOtp);
    setCode(newOtp.join(''));

    // Move to next input
    if (value !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpArray[index] && index > 0) {
      // Focus previous input on backspace if current is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    setError("");
    
    const { error: signInError } = await supabaseAdminClient.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: false,
      }
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
    // Reset OTP array when going to code step
    setOtpArray(["", "", "", "", "", ""]);
    setCode("");
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
        <h2 className="admin-login-title">Admin Portal</h2>
        <p className="admin-login-sub">
          Sign in to manage drivers and platform operations.
        </p>

        {error && <div className="admin-error"><AlertCircle /> {error}</div>}

        {step === "email" ? (
          <form onSubmit={handleSendCode}>
            <label className="admin-field-label">Email address</label>
            <input
              type="email"
              placeholder="you@riksho.com"
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
            <label className="admin-field-label">
              Enter the 6-digit code sent to <strong>{email}</strong>
            </label>
            <div className="admin-otp-group">
              {otpArray.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el; }}
                  type="text"
                  inputMode="numeric"
                  className="admin-otp-box"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(index, e)}
                  maxLength={6}
                  required={index === 0}
                />
              ))}
            </div>
            <button
              type="submit"
              className="admin-btn admin-btn-primary admin-btn-block"
              disabled={loading}
            >
              {loading ? "Verifying…" : "Sign In"}
            </button>
            <button
              type="button"
              className="admin-btn admin-btn-secondary admin-btn-block"
              style={{ marginTop: "10px" }}
              onClick={() => setStep("email")}
              disabled={loading}
            >
              <ArrowLeft /> Back
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
