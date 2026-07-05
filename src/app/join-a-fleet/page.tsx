import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import FAQSection from "@/components/FAQSection";
import AppDownloadCTA from "@/components/AppDownloadCTA";

export default function JoinFleetPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Full-bleed Photo Hero */}
        <section className="hero-section" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
            <Image 
              src="/images/photo_freight.png"
              alt="Join fleet hero"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,23,42,0.85), rgba(15,23,42,0.4))" }} />
          </div>
          
          <div className="container relative z-10" style={{ color: "white" }}>
            <h1 className="font-display animate-fade-in-up" style={{ fontSize: "clamp(40px, 5vw, 64px)", marginBottom: "16px", color: "white" }}>
              Scale your transport business
            </h1>
            <p className="animate-fade-in-up" style={{ fontSize: "1.125rem", maxWidth: "600px", opacity: 0.9, animationDelay: "0.1s" }}>
              Attach your commercial vehicles to Riksho. Consistent demand, weekly payouts, dedicated support.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="section bg-light">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>Why Partner With Us</span>
              <h2 className="font-display" style={{ fontSize: "36px" }}>Grow your fleet</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>1</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Consistent Bookings</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Get access to a massive network of local businesses and individuals needing freight transport every day.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>2</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Manage Your Fleet</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Use our Fleet Dashboard to track your vehicles, monitor driver performance, and optimize your routes.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>3</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Transparent Earnings</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Know exactly what each trip pays before accepting. Weekly bulk payouts directly to your business account.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 className="font-display" style={{ fontSize: "36px" }}>What you need to onboard</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <div style={{ padding: "40px", backgroundColor: "#f8fafc", borderRadius: "var(--radius-lg)", border: "1px solid var(--admin-border)" }}>
                <h3 className="font-display" style={{ fontSize: "24px", marginBottom: "24px", color: "var(--color-indigo)" }}>Documents</h3>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px", color: "var(--color-slate-700)" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ color: "var(--color-indigo)", marginTop: "2px" }}>✓</div>
                    <div>
                      <div style={{ fontWeight: "600" }}>Commercial Driving License</div>
                      <div style={{ fontSize: "14px", color: "var(--color-slate-500)" }}>Valid for LMV or HMV depending on vehicle class</div>
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ color: "var(--color-indigo)", marginTop: "2px" }}>✓</div>
                    <div>
                      <div style={{ fontWeight: "600" }}>Vehicle RC & Insurance</div>
                      <div style={{ fontSize: "14px", color: "var(--color-slate-500)" }}>Valid commercial registration and insurance policy</div>
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ color: "var(--color-indigo)", marginTop: "2px" }}>✓</div>
                    <div>
                      <div style={{ fontWeight: "600" }}>Fitness Certificate</div>
                      <div style={{ fontSize: "14px", color: "var(--color-slate-500)" }}>Up-to-date fitness certificate from RTO</div>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div style={{ padding: "40px", backgroundColor: "#f8fafc", borderRadius: "var(--radius-lg)", border: "1px solid var(--admin-border)" }}>
                <h3 className="font-display" style={{ fontSize: "24px", marginBottom: "24px", color: "var(--color-indigo)" }}>Vehicles Accepted</h3>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px", color: "var(--color-slate-700)" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ color: "var(--color-indigo)", marginTop: "2px" }}>✓</div>
                    <div>
                      <div style={{ fontWeight: "600" }}>Mini-Trucks</div>
                      <div style={{ fontSize: "14px", color: "var(--color-slate-500)" }}>Tata Ace, Mahindra Jeeto, Maruti Super Carry</div>
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ color: "var(--color-indigo)", marginTop: "2px" }}>✓</div>
                    <div>
                      <div style={{ fontWeight: "600" }}>Pickup Trucks</div>
                      <div style={{ fontSize: "14px", color: "var(--color-slate-500)" }}>Bolero Pickup, Tata Intra, Ashok Leyland Dost</div>
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ color: "var(--color-indigo)", marginTop: "2px" }}>✓</div>
                    <div>
                      <div style={{ fontWeight: "600" }}>3-Wheelers & EVs</div>
                      <div style={{ fontSize: "14px", color: "var(--color-slate-500)" }}>Ape Auto, E-Rickshaw Cargo variants</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Story */}
        <section className="section bg-light">
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch", gap: "0", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--admin-border)" }}>
              <div style={{ flex: "1 1 400px", position: "relative", minHeight: "450px" }}>
                <Image src="/images/photo_freight.png" alt="Fleet owner story" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ flex: "1 1 400px", backgroundColor: "white", padding: "64px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ fontSize: "48px", color: "var(--color-indigo)", marginBottom: "24px", lineHeight: 1 }}>&quot;</div>
                <p style={{ fontSize: "20px", lineHeight: "1.6", fontWeight: "500", marginBottom: "32px", color: "var(--color-slate-900)" }}>
                  Since moving my three mini-trucks to Riksho, our idle time has dropped by 40%. The app finds trips nearby so my drivers aren't running empty. It's transformed my business.
                </p>
                <div>
                  <div style={{ fontWeight: "700", fontSize: "18px", color: "var(--color-indigo)" }}>Suresh M.</div>
                  <div style={{ color: "var(--color-slate-500)" }}>Fleet Owner, Mumbai</div>
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
                <h4 className="font-display" style={{ fontSize: "18px", marginBottom: "8px" }}>Register Fleet</h4>
                <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.5" }}>Sign up online as a fleet partner and set up your profile.</p>
              </div>
              <div>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "var(--color-indigo)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "24px", margin: "0 auto 20px" }}>2</div>
                <h4 className="font-display" style={{ fontSize: "18px", marginBottom: "8px" }}>Add Vehicles</h4>
                <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.5" }}>Upload RC and insurance docs for all your commercial vehicles.</p>
              </div>
              <div>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "var(--color-indigo)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "24px", margin: "0 auto 20px" }}>3</div>
                <h4 className="font-display" style={{ fontSize: "18px", marginBottom: "8px" }}>Add Drivers</h4>
                <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.5" }}>Assign your drivers to specific vehicles in your fleet dashboard.</p>
              </div>
              <div>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "var(--color-indigo)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "24px", margin: "0 auto 20px" }}>4</div>
                <h4 className="font-display" style={{ fontSize: "18px", marginBottom: "8px" }}>Start hauling</h4>
                <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.5" }}>Accept bulk orders and freight requests from local businesses.</p>
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
