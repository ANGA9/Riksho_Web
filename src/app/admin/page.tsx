"use client";

import { useEffect, useState } from "react";
import { adminFetch } from "@/lib/adminApi";
import Link from "next/link";

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await adminFetch("/admin/stats");
        setStats(data);
      } catch (err) {
        console.error("Failed to fetch stats", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return <div>Loading dashboard...</div>;
  }

  return (
    <div>
      <h1 className="admin-page-title">Dashboard Overview</h1>
      
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div className="admin-stat-title">Pending Approvals</div>
          <div className="admin-stat-value" style={{ color: "#D97706" }}>
            {stats?.pending || 0}
          </div>
          <Link href="/admin/drivers?status=pending" style={{ fontSize: "14px", color: "var(--color-indigo)", marginTop: "12px", display: "inline-block", textDecoration: "none", fontWeight: 500 }}>
            View pending &rarr;
          </Link>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-title">Total Approved Drivers</div>
          <div className="admin-stat-value">
            {stats?.approved || 0}
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-title">Drivers Online Now</div>
          <div className="admin-stat-value" style={{ color: "#059669" }}>
            {stats?.online || 0}
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-title">Rides Today</div>
          <div className="admin-stat-value" style={{ color: "var(--color-cyan)" }}>
            {stats?.rides_today || 0}
          </div>
        </div>
      </div>
    </div>
  );
}
