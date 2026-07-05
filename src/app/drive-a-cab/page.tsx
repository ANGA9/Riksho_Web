import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import AppDownloadCTA from "@/components/AppDownloadCTA";

export default function DriveCabPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Full-bleed Photo Hero */}
        <section className="hero-section" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
            <Image 
              src="/images/photo_drive_cab.png"
              alt="Drive cab hero"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,23,42,0.85), rgba(15,23,42,0.4))" }} />
          </div>
          
          <div className="container relative z-10" style={{ color: "white" }}>
            <h1 className="font-display animate-fade-in-up" style={{ fontSize: "clamp(40px, 5vw, 64px)", marginBottom: "16px", color: "white" }}>
              Drive with Riksho. Keep more of every fare.
            </h1>
            <p className="animate-fade-in-up" style={{ fontSize: "1.125rem", maxWidth: "600px", opacity: 0.9, animationDelay: "0.1s" }}>
              Zero commission to start, weekly payouts, and support that has your back.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="section bg-light">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>Why Drive With Us</span>
              <h2 className="font-display" style={{ fontSize: "36px" }}>Earnings that make sense</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>1</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Zero Commission</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Keep 100% of your earnings for the first month, and enjoy a low, flat fee after that.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>2</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Weekly Payouts</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Get your earnings deposited directly into your bank account every single week.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>3</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>24/7 Driver Support</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Our dedicated support team is available around the clock to help with any issues on the road.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 className="font-display" style={{ fontSize: "36px" }}>What you need to get started</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <div style={{ padding: "40px", backgroundColor: "#f8fafc", borderRadius: "var(--radius-lg)", border: "1px solid var(--admin-border)" }}>
                <h3 className="font-display" style={{ fontSize: "24px", marginBottom: "24px", color: "var(--color-indigo)" }}>Documents</h3>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px", color: "var(--color-slate-700)" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ color: "var(--color-indigo)", marginTop: "2px" }}>✓</div>
                    <div>
                      <div style={{ fontWeight: "600" }}>Valid Driving License</div>
                      <div style={{ fontSize: "14px", color: "var(--color-slate-500)" }}>Must be valid for commercial driving</div>
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ color: "var(--color-indigo)", marginTop: "2px" }}>✓</div>
                    <div>
                      <div style={{ fontWeight: "600" }}>Vehicle RC</div>
                      <div style={{ fontSize: "14px", color: "var(--color-slate-500)" }}>Registration certificate of your car</div>
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ color: "var(--color-indigo)", marginTop: "2px" }}>✓</div>
                    <div>
                      <div style={{ fontWeight: "600" }}>Commercial Insurance</div>
                      <div style={{ fontSize: "14px", color: "var(--color-slate-500)" }}>Active insurance policy for the vehicle</div>
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ color: "var(--color-indigo)", marginTop: "2px" }}>✓</div>
                    <div>
                      <div style={{ fontWeight: "600" }}>PAN Card</div>
                      <div style={{ fontSize: "14px", color: "var(--color-slate-500)" }}>For tax and background verification</div>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div style={{ padding: "40px", backgroundColor: "#f8fafc", borderRadius: "var(--radius-lg)", border: "1px solid var(--admin-border)" }}>
                <h3 className="font-display" style={{ fontSize: "24px", marginBottom: "24px", color: "var(--color-indigo)" }}>Vehicle</h3>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px", color: "var(--color-slate-700)" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ color: "var(--color-indigo)", marginTop: "2px" }}>✓</div>
                    <div>
                      <div style={{ fontWeight: "600" }}>4-Door Car</div>
                      <div style={{ fontSize: "14px", color: "var(--color-slate-500)" }}>Hatchback, sedan, or SUV</div>
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ color: "var(--color-indigo)", marginTop: "2px" }}>✓</div>
                    <div>
                      <div style={{ fontWeight: "600" }}>Model Year</div>
                      <div style={{ fontSize: "14px", color: "var(--color-slate-500)" }}>Must be 2012 or newer depending on city rules</div>
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ color: "var(--color-indigo)", marginTop: "2px" }}>✓</div>
                    <div>
                      <div style={{ fontWeight: "600" }}>Good Condition</div>
                      <div style={{ fontSize: "14px", color: "var(--color-slate-500)" }}>No major cosmetic damage, functioning AC</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Driver Story */}
        <section className="section bg-light">
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch", gap: "0", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--admin-border)" }}>
              <div style={{ flex: "1 1 400px", position: "relative", minHeight: "450px" }}>
                <Image src="/images/photo_drive_cab.png" alt="Driver story" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ flex: "1 1 400px", backgroundColor: "white", padding: "64px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ fontSize: "48px", color: "var(--color-indigo)", marginBottom: "24px", lineHeight: 1 }}>&quot;</div>
                <p style={{ fontSize: "20px", lineHeight: "1.6", fontWeight: "500", marginBottom: "32px", color: "var(--color-slate-900)" }}>
                  I switched to Riksho six months ago because I was tired of hidden fees. With Riksho, what I see is what I get. The zero commission first month helped me pay off my car loan early.
                </p>
                <div>
                  <div style={{ fontWeight: "700", fontSize: "18px", color: "var(--color-indigo)" }}>Rajesh K.</div>
                  <div style={{ color: "var(--color-slate-500)" }}>Riksho Driver since 2025</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Steps to join */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 className="font-display" style={{ fontSize: "36px" }}>How to get started</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", textAlign: "center" }}>
              <div>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "var(--color-indigo)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "24px", margin: "0 auto 20px" }}>1</div>
                <h4 className="font-display" style={{ fontSize: "18px", marginBottom: "8px" }}>Sign up</h4>
                <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.5" }}>Download the partner app and create your account.</p>
              </div>
              <div>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "var(--color-indigo)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "24px", margin: "0 auto 20px" }}>2</div>
                <h4 className="font-display" style={{ fontSize: "18px", marginBottom: "8px" }}>Upload documents</h4>
                <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.5" }}>Submit your ID, driving license, and vehicle RC.</p>
              </div>
              <div>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "var(--color-indigo)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "24px", margin: "0 auto 20px" }}>3</div>
                <h4 className="font-display" style={{ fontSize: "18px", marginBottom: "8px" }}>Get verified</h4>
                <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.5" }}>Our team will review your profile within 24 hours.</p>
              </div>
              <div>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "var(--color-indigo)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "24px", margin: "0 auto 20px" }}>4</div>
                <h4 className="font-display" style={{ fontSize: "18px", marginBottom: "8px" }}>Start earning</h4>
                <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.5" }}>Go online and start accepting your first trips.</p>
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
