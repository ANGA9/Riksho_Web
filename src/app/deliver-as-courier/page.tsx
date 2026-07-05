import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import FAQSection from "@/components/FAQSection";
import AppDownloadCTA from "@/components/AppDownloadCTA";

export default function DeliverCourierPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Full-bleed Photo Hero */}
        <section className="hero-section" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
            <Image 
              src="/images/photo_courier.png"
              alt="Deliver as courier hero"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,23,42,0.85), rgba(15,23,42,0.4))" }} />
          </div>
          
          <div className="container relative z-10" style={{ color: "white" }}>
            <h1 className="font-display animate-fade-in-up" style={{ fontSize: "clamp(40px, 5vw, 64px)", marginBottom: "16px", color: "white" }}>
              Deliver parcels, earn cash
            </h1>
            <p className="animate-fade-in-up" style={{ fontSize: "1.125rem", maxWidth: "600px", opacity: 0.9, animationDelay: "0.1s" }}>
              Use your bike to deliver small packages across the city. Simple, fast, and flexible.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="section bg-light">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>Why Deliver With Us</span>
              <h2 className="font-display" style={{ fontSize: "36px" }}>Earning made simple</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>1</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Flexible Schedule</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Work when you want. Deliver a few parcels on your way home or make it a full-time gig.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>2</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>No Passengers</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Prefer riding solo? Deliver packages, documents, and food without having to carry a passenger.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>3</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Weekly Payouts</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Your earnings are deposited directly into your bank account every single week.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 className="font-display" style={{ fontSize: "36px" }}>What you need to start</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <div style={{ padding: "40px", backgroundColor: "#f8fafc", borderRadius: "var(--radius-lg)", border: "1px solid var(--admin-border)" }}>
                <h3 className="font-display" style={{ fontSize: "24px", marginBottom: "24px", color: "var(--color-indigo)" }}>Documents</h3>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px", color: "var(--color-slate-700)" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ color: "var(--color-indigo)", marginTop: "2px" }}>✓</div>
                    <div>
                      <div style={{ fontWeight: "600" }}>Valid Driving License</div>
                      <div style={{ fontSize: "14px", color: "var(--color-slate-500)" }}>Valid two-wheeler license</div>
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ color: "var(--color-indigo)", marginTop: "2px" }}>✓</div>
                    <div>
                      <div style={{ fontWeight: "600" }}>Vehicle RC</div>
                      <div style={{ fontSize: "14px", color: "var(--color-slate-500)" }}>Registration certificate of your vehicle</div>
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
                      <div style={{ fontWeight: "600" }}>Any Two-Wheeler</div>
                      <div style={{ fontSize: "14px", color: "var(--color-slate-500)" }}>Motorcycle, scooter, or EV</div>
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ color: "var(--color-indigo)", marginTop: "2px" }}>✓</div>
                    <div>
                      <div style={{ fontWeight: "600" }}>Delivery Bag (Optional)</div>
                      <div style={{ fontSize: "14px", color: "var(--color-slate-500)" }}>A secure bag for larger items helps you earn more</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Courier Story */}
        <section className="section bg-light">
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch", gap: "0", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--admin-border)" }}>
              <div style={{ flex: "1 1 400px", position: "relative", minHeight: "450px" }}>
                <Image src="/images/photo_courier.png" alt="Courier story" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ flex: "1 1 400px", backgroundColor: "white", padding: "64px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ fontSize: "48px", color: "var(--color-indigo)", marginBottom: "24px", lineHeight: 1 }}>&quot;</div>
                <p style={{ fontSize: "20px", lineHeight: "1.6", fontWeight: "500", marginBottom: "32px", color: "var(--color-slate-900)" }}>
                  I love delivering parcels because it’s low-stress. No awkward conversations, just pick up, drop off, and get paid. Riksho makes the process incredibly smooth.
                </p>
                <div>
                  <div style={{ fontWeight: "700", fontSize: "18px", color: "var(--color-indigo)" }}>Arjun P.</div>
                  <div style={{ color: "var(--color-slate-500)" }}>Courier Partner</div>
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
