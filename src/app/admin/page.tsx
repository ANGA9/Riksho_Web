"use client";

import { useEffect, useState } from "react";
import { adminFetch } from "@/lib/adminApi";
import Link from "next/link";
import { Clock, CheckCircle2, Radio, CarFront, ArrowRight } from "lucide-react";

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

  const cards = [
    {
      title: "Pending Approvals",
      value: stats?.pending ?? 0,
      icon: Clock,
      tone: "amber",
      href: "/admin/drivers?status=pending",
      cta: "Review queue",
    },
    { title: "Approved Drivers", value: stats?.approved ?? 0, icon: CheckCircle2, tone: "green" },
    { title: "Drivers Online", value: stats?.online ?? 0, icon: Radio, tone: "" },
    { title: "Rides Today", value: stats?.rides_today ?? 0, icon: CarFront, tone: "cyan" },
  ];

  return (
    <div>
      <h1 className="admin-page-title">Dashboard</h1>
      <p className="admin-page-subtitle">Platform activity at a glance.</p>

      <div className="admin-stats-grid">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div className="admin-stat-card" key={c.title}>
              <div className="admin-stat-head">
                <span className="admin-stat-title">{c.title}</span>
                <span className={`admin-stat-icon ${c.tone}`}>
                  <Icon />
                </span>
              </div>
              {loading ? (
                <div className="admin-skel" style={{ height: 30, width: 64 }} />
              ) : (
                <div className="admin-stat-value">{c.value}</div>
              )}
              {c.href && (
                <div className="admin-stat-foot">
                  <Link href={c.href} className="admin-stat-link">
                    {c.cta} <ArrowRight />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
