import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import AppDownloadCTA from "@/components/AppDownloadCTA";

export default function DeliveryPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Full-bleed Photo Hero */}
        <section className="hero-section" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
            <Image 
              src="/images/photo_delivery.png"
              alt="Delivery hero"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,23,42,0.85), rgba(15,23,42,0.4))" }} />
          </div>
          
          <div className="container relative z-10" style={{ color: "white" }}>
            <h1 className="font-display animate-fade-in-up" style={{ fontSize: "clamp(40px, 5vw, 64px)", marginBottom: "16px", color: "white" }}>
              Send anything, anywhere in the city
            </h1>
            <p className="animate-fade-in-up" style={{ fontSize: "1.125rem", maxWidth: "600px", opacity: 0.9, animationDelay: "0.1s" }}>
              Parcels, food, and groceries — picked up in minutes, tracked to the doorstep.
            </p>
          </div>
        </section>

        {/* What we deliver */}
        <section className="section bg-light">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>Services</span>
              <h2 className="font-display" style={{ fontSize: "36px" }}>What we deliver</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)", textAlign: "center" }}>
                <div style={{ fontSize: "40px", marginBottom: "16px" }}>🍔</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Food</h4>
                <p className="text-muted" style={{ fontSize: "15px" }}>Hot meals from your favorite restaurants, delivered fresh.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)", textAlign: "center" }}>
                <div style={{ fontSize: "40px", marginBottom: "16px" }}>📦</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Parcels & Documents</h4>
                <p className="text-muted" style={{ fontSize: "15px" }}>Secure delivery for important documents, gifts, or forgotten keys.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)", textAlign: "center" }}>
                <div style={{ fontSize: "40px", marginBottom: "16px" }}>🛒</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Groceries</h4>
                <p className="text-muted" style={{ fontSize: "15px" }}>Daily essentials and monthly groceries delivered to your door.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Personal vs Enterprise */}
        <section className="section">
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
              <div style={{ flex: "1 1 400px", padding: "40px", backgroundColor: "#f8fafc", borderRadius: "var(--radius-lg)", border: "1px solid var(--admin-border)" }}>
                <h3 className="font-display" style={{ fontSize: "28px", marginBottom: "16px", color: "var(--color-indigo)" }}>Personal</h3>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "16px" }}>Send a one-off parcel</h4>
                <p className="text-muted" style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "24px" }}>
                  Need to send a laptop to a colleague or a gift to a friend? Just enter the pickup and drop-off locations in the Riksho app and a delivery partner will be there in minutes.
                </p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", color: "var(--color-slate-700)" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>✓ Instant booking</li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>✓ Live tracking link</li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>✓ Secure handling</li>
                </ul>
              </div>
              
              <div style={{ flex: "1 1 400px", padding: "40px", backgroundColor: "#f0f9ff", borderRadius: "var(--radius-lg)", border: "1px solid #bae6fd" }}>
                <h3 className="font-display" style={{ fontSize: "28px", marginBottom: "16px", color: "#0284c7" }}>Enterprise</h3>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "16px" }}>Power your store's deliveries</h4>
                <p className="text-muted" style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "24px" }}>
                  Run a restaurant, pharmacy, or D2C brand? Integrate with our API or use our merchant dashboard to dispatch bulk orders efficiently and scale your operations.
                </p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", color: "var(--color-slate-700)" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>✓ API Integration</li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>✓ Bulk uploading</li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>✓ Volume discounts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section bg-light">
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px" }}>
              <div style={{ flex: "1 1 400px", position: "relative", height: "450px", backgroundColor: "white", borderRadius: "var(--radius-lg)", border: "1px solid var(--admin-border)" }}>
                <Image src="/images/ill_delivery.png" alt="How delivery works" fill style={{ objectFit: "contain", padding: "40px" }} />
              </div>
              <div style={{ flex: "1 1 400px" }}>
                <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>How it works</span>
                <h2 className="font-display" style={{ fontSize: "36px", marginBottom: "32px" }}>From tap to delivery</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div style={{ display: "flex", gap: "16px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0 }}>1</div>
                    <div>
                      <h4 className="font-display" style={{ fontSize: "18px", marginBottom: "4px" }}>Book a pickup</h4>
                      <p className="text-muted">Enter pickup & drop locations and package details.</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "16px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0 }}>2</div>
                    <div>
                      <h4 className="font-display" style={{ fontSize: "18px", marginBottom: "4px" }}>Rider collects</h4>
                      <p className="text-muted">A verified partner arrives in minutes to collect your items.</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "16px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0 }}>3</div>
                    <div>
                      <h4 className="font-display" style={{ fontSize: "18px", marginBottom: "4px" }}>Real-time tracking to delivery</h4>
                      <p className="text-muted">Share the tracking link with the recipient for a smooth handover.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* App Download CTA */}
        <AppDownloadCTA />
      </main>
      <Footer />
    </>
  );
}
