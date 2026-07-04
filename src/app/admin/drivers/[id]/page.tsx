"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { adminFetch } from "@/lib/adminApi";
import Link from "next/link";

export default function DriverDetail() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  
  const [driver, setDriver] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchDriver = async () => {
    setLoading(true);
    try {
      const data = await adminFetch(`/admin/drivers/${id}`);
      setDriver(data);
    } catch (err: any) {
      setError(err.message || "Failed to load driver");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDriver();
  }, [id]);

  const handleAction = async (action: "approve" | "reject" | "suspend") => {
    let reason = "";
    if (action === "reject" || action === "suspend") {
      reason = window.prompt(`Please enter a reason for ${action}ing this driver:`) || "";
      if (!reason.trim()) return;
    }

    setActionLoading(true);
    try {
      await adminFetch(`/admin/drivers/${id}/${action}`, {
        method: "POST",
        body: JSON.stringify(reason ? { reason } : {}),
      });
      // Refresh driver
      await fetchDriver();
    } catch (err: any) {
      alert("Action failed: " + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) return <div>Loading driver profile...</div>;
  if (error) return <div className="admin-error">{error}</div>;
  if (!driver) return <div>Driver not found</div>;

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "24px", gap: "16px" }}>
        <Link href="/admin/drivers" className="admin-btn admin-btn-secondary">
          &larr; Back to List
        </Link>
        <h1 className="admin-page-title" style={{ marginBottom: 0 }}>Driver Profile</h1>
        <span className={`admin-badge badge-${driver.verification_status}`}>
          {driver.verification_status}
        </span>
      </div>

      <div className="admin-detail-grid">
        {/* Left Column: Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div className="admin-card">
            <h2>Personal Information</h2>
            <div className="admin-info-row">
              <span className="admin-info-label">Full Name</span>
              <span className="admin-info-value">{driver.name}</span>
            </div>
            <div className="admin-info-row">
              <span className="admin-info-label">Phone</span>
              <span className="admin-info-value">{driver.phone}</span>
            </div>
            <div className="admin-info-row">
              <span className="admin-info-label">License Number</span>
              <span className="admin-info-value" style={{ fontFamily: "monospace", fontSize: "16px" }}>
                {driver.license_no}
              </span>
            </div>
            <div className="admin-info-row">
              <span className="admin-info-label">Registered On</span>
              <span className="admin-info-value">{new Date(driver.created_at).toLocaleString()}</span>
            </div>
          </div>

          <div className="admin-card">
            <h2>Vehicle Information</h2>
            {driver.vehicles && driver.vehicles.length > 0 ? (
              driver.vehicles.map((v: any, i: number) => (
                <div key={i} style={{ marginBottom: i < driver.vehicles.length - 1 ? "24px" : "0", borderBottom: i < driver.vehicles.length - 1 ? "1px solid #E5E7EB" : "none", paddingBottom: i < driver.vehicles.length - 1 ? "24px" : "0" }}>
                  <div className="admin-info-row">
                    <span className="admin-info-label">Type</span>
                    <span className="admin-info-value" style={{ textTransform: "capitalize" }}>{v.type}</span>
                  </div>
                  <div className="admin-info-row">
                    <span className="admin-info-label">Plate Number</span>
                    <span className="admin-info-value" style={{ fontFamily: "monospace", fontSize: "16px" }}>{v.plate}</span>
                  </div>
                  <div className="admin-info-row">
                    <span className="admin-info-label">Model</span>
                    <span className="admin-info-value">{v.model}</span>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ color: "var(--color-text-muted)" }}>No vehicles registered.</p>
            )}
          </div>
        </div>

        {/* Right Column: Actions */}
        <div>
          <div className="admin-card">
            <h2>Verification Actions</h2>
            <p style={{ color: "var(--color-text-muted)", fontSize: "14px", marginBottom: "24px" }}>
              Please review the driver's license and vehicle documents carefully before approving.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {driver.verification_status !== "approved" && (
                <button 
                  className="admin-btn admin-btn-primary" 
                  onClick={() => handleAction("approve")}
                  disabled={actionLoading}
                >
                  ✅ Approve Driver
                </button>
              )}

              {driver.verification_status === "pending" && (
                <button 
                  className="admin-btn admin-btn-danger" 
                  onClick={() => handleAction("reject")}
                  disabled={actionLoading}
                >
                  ❌ Reject Application
                </button>
              )}

              {driver.verification_status === "approved" && (
                <button 
                  className="admin-btn admin-btn-danger" 
                  onClick={() => handleAction("suspend")}
                  disabled={actionLoading}
                >
                  ⛔ Suspend Driver
                </button>
              )}
            </div>
            {actionLoading && <div style={{ marginTop: "16px", fontSize: "14px", color: "var(--color-indigo)" }}>Processing...</div>}
          </div>

          <div className="admin-card">
            <h2>Performance Stats</h2>
            <div className="admin-info-row">
              <span className="admin-info-label">Total Trips</span>
              <span className="admin-info-value">{driver.total_trips || 0}</span>
            </div>
            <div className="admin-info-row">
              <span className="admin-info-label">Rating</span>
              <span className="admin-info-value">
                {driver.rating ? `${driver.rating} ⭐` : "New"}
              </span>
            </div>
            <div className="admin-info-row">
              <span className="admin-info-label">Status</span>
              <span className="admin-info-value" style={{ textTransform: "capitalize", color: driver.status === "online" ? "#059669" : "var(--color-text-muted)" }}>
                {driver.status || "offline"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
