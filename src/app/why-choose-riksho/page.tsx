import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function WhyChooseRikshoPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <section className="section animate-fade-in-up">
          <div className="container text-center" style={{ maxWidth: "800px" }}>
            <span style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>Our Mission</span>
            <h1 className="font-display" style={{ fontSize: "clamp(32px, 5vw, 56px)", marginBottom: "24px" }}>
              Built to be fair, built to be trusted
            </h1>
            <p className="text-muted" style={{ fontSize: "1.125rem", marginBottom: "48px" }}>
              Riksho wasn't just built to move people; it was built to solve the core inequities in modern mobility. We ensure passengers pay fair rates while drivers take home what they deserve.
            </p>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: "#f9fafb" }}>
          <div className="container">
            <div style={{ display: "flex", flexDirection: "column", gap: "40px", maxWidth: "800px", margin: "0 auto" }}>
              
              {/* Point 1 */}
              <div style={{ background: "white", padding: "40px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", display: "flex", gap: "24px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                </div>
                <div>
                  <h3 className="font-display" style={{ fontSize: "24px", marginBottom: "12px" }}>Zero Surge Guarantee</h3>
                  <p className="text-muted" style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    We believe your fare shouldn't multiply just because it's raining or you're getting out of work. We maintain a transparent, standard pricing model that relies on a fair base rate + distance. No algorithms gouging you when you need a ride the most.
                  </p>
                  <div style={{ marginTop: "16px", padding: "12px 16px", backgroundColor: "var(--color-indigo-tint)", borderRadius: "8px", display: "inline-block" }}>
                    <span style={{ fontWeight: 600, color: "var(--color-indigo)" }}>Stat: 0% dynamic surge multipliers applied to our rides.</span>
                  </div>
                </div>
              </div>

              {/* Point 2 */}
              <div style={{ background: "white", padding: "40px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", display: "flex", gap: "24px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <h3 className="font-display" style={{ fontSize: "24px", marginBottom: "12px" }}>Uncompromising Safety</h3>
                  <p className="text-muted" style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Trust is earned. Every single partner on our platform undergoes a rigorous physical document check and background verification. We do not compromise on who gets behind the wheel.
                  </p>
                  <div style={{ marginTop: "16px", padding: "12px 16px", backgroundColor: "var(--color-indigo-tint)", borderRadius: "8px", display: "inline-block" }}>
                    <span style={{ fontWeight: 600, color: "var(--color-indigo)" }}>Stat: 98.5% background-verified partners active today.</span>
                  </div>
                </div>
              </div>

              {/* Point 3 */}
              <div style={{ background: "white", padding: "40px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", display: "flex", gap: "24px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div>
                  <h3 className="font-display" style={{ fontSize: "24px", marginBottom: "12px" }}>Fair Driver Payouts</h3>
                  <p className="text-muted" style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    If a driver is stressed about money, the ride quality drops. We charge an incredibly low, fixed platform fee. This means drivers take home exactly what they deserve, resulting in happier drivers and fewer cancellations.
                  </p>
                  <div style={{ marginTop: "16px", padding: "12px 16px", backgroundColor: "var(--color-indigo-tint)", borderRadius: "8px", display: "inline-block" }}>
                    <span style={{ fontWeight: 600, color: "var(--color-indigo)" }}>Stat: Drivers keep 85%+ of the total fare on every single ride.</span>
                  </div>
                </div>
              </div>

              {/* Point 4 */}
              <div style={{ background: "white", padding: "40px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", display: "flex", gap: "24px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h3 className="font-display" style={{ fontSize: "24px", marginBottom: "12px" }}>24/7 Human Support</h3>
                  <p className="text-muted" style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    Automated bots are frustrating when you are stranded. Our dedicated support team is available around the clock to resolve disputes, handle emergencies, and ensure your experience is flawless.
                  </p>
                  <div style={{ marginTop: "16px", padding: "12px 16px", backgroundColor: "var(--color-indigo-tint)", borderRadius: "8px", display: "inline-block" }}>
                    <span style={{ fontWeight: 600, color: "var(--color-indigo)" }}>Stat: 2-minute average response time on emergency tickets.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
