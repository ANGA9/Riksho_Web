"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { supabaseAdminClient } from "@/lib/supabaseAdminClient";
import { adminFetch } from "@/lib/adminApi";
import "./admin.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // If it's the login page, we don't strictly require a session to render the shell
    // but we can still check. The login page will handle its own redirect if logged in.
    if (pathname === "/admin/login") {
      setLoading(false);
      return;
    }

    const checkSession = async () => {
      try {
        const { data: { session } } = await supabaseAdminClient.auth.getSession();
        if (!session) throw new Error("No session");

        // Verify admin role via backend
        const me = await adminFetch("/admin/me");
        if (me.role !== "admin") throw new Error("Not an admin");

        setUser(me);
      } catch (err) {
        console.error("Admin guard failed:", err);
        router.push("/admin/login");
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, [pathname, router]);

  const handleLogout = async () => {
    await supabaseAdminClient.auth.signOut();
    router.push("/admin/login");
  };

  // Login page doesn't get the sidebar shell
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (loading) {
    return (
      <div className="admin-layout" style={{ alignItems: "center", justifyContent: "center" }}>
        <div style={{ color: "var(--color-indigo)", fontWeight: 600 }}>Loading admin portal...</div>
      </div>
    );
  }

  if (!user) return null; // Wait for redirect

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">
          <img src="/images/final_riksho.png" alt="Riksho Admin" />
        </div>
        
        <nav className="admin-sidebar-nav">
          <Link 
            href="/admin" 
            className={`admin-nav-item ${pathname === "/admin" ? "active" : ""}`}
          >
            📊 Dashboard
          </Link>
          <Link 
            href="/admin/drivers" 
            className={`admin-nav-item ${pathname.startsWith("/admin/drivers") ? "active" : ""}`}
          >
            🚗 Drivers
          </Link>
          {/* Phase 2:
          <Link href="/admin/rides" className="admin-nav-item">🛣️ Rides</Link>
          <Link href="/admin/riders" className="admin-nav-item">👤 Riders</Link>
          */}
        </nav>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div className="admin-header-user">
            <span>{user.email}</span>
            <span className="admin-badge badge-approved" style={{ backgroundColor: "var(--color-indigo)", color: "white" }}>Admin</span>
            <button onClick={handleLogout} className="admin-logout-btn">Log out</button>
          </div>
        </header>

        <div className="admin-content">
          {children}
        </div>
      </main>
    </div>
  );
}
