import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import FAQSection from "@/components/FAQSection";
import AppDownloadCTA from "@/components/AppDownloadCTA";

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Full-bleed Photo Hero */}
        <section className="hero-section" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
            <Image 
              src="/images/photo_careers.png"
              alt="Careers at Riksho"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,23,42,0.85), rgba(15,23,42,0.4))" }} />
          </div>
          
          <div className="container relative z-10" style={{ color: "white" }}>
            <h1 className="font-display animate-fade-in-up" style={{ fontSize: "clamp(40px, 5vw, 64px)", marginBottom: "16px", color: "white" }}>
              Build the way India moves
            </h1>
            <p className="animate-fade-in-up" style={{ fontSize: "1.125rem", maxWidth: "600px", opacity: 0.9, animationDelay: "0.1s" }}>
              Join a team obsessed with fair fares, verified partners, and moving millions every day.
            </p>
          </div>
        </section>

        {/* Life at Riksho */}
        <section className="section bg-light">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>Life at Riksho</span>
              <h2 className="font-display" style={{ fontSize: "36px" }}>Our Culture</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              <div style={{ position: "relative", height: "300px", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                <Image src="/images/photo_careers.png" alt="Office collaboration" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "relative", height: "300px", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                <Image src="/images/photo_careers.png" alt="Team meeting" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "relative", height: "300px", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                <Image src="/images/ill_business.png" alt="Working together" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Our values */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 className="font-display" style={{ fontSize: "36px" }}>Our Values</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              <div style={{ background: "white", padding: "40px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)", textAlign: "center" }}>
                <div style={{ fontSize: "40px", marginBottom: "16px" }}>🤝</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "16px" }}>Riders & drivers first</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Every product decision we make is evaluated by how much it improves the lives of our users and partners.</p>
              </div>
              <div style={{ background: "white", padding: "40px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)", textAlign: "center" }}>
                <div style={{ fontSize: "40px", marginBottom: "16px" }}>⚡</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "16px" }}>Bias for action</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>We prefer a good decision made today over a perfect decision made next week. We move fast and iterate.</p>
              </div>
              <div style={{ background: "white", padding: "40px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)", textAlign: "center" }}>
                <div style={{ fontSize: "40px", marginBottom: "16px" }}>🎯</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "16px" }}>Own the outcome</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>We take responsibility for our work from start to finish. If something is broken, we fix it regardless of whose job it is.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Open roles */}
        <section className="section bg-light" id="open-roles">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 className="font-display" style={{ fontSize: "36px" }}>Open Roles</h2>
              <p className="text-muted" style={{ marginTop: "16px" }}>Join our growing team in Bangalore, Mumbai, or Delhi NCR.</p>
            </div>
            
            {/* Filter chips (Visual only for now) */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", marginBottom: "40px" }}>
              <button style={{ padding: "8px 16px", borderRadius: "20px", border: "1px solid var(--color-indigo)", backgroundColor: "var(--color-indigo)", color: "white", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}>All Roles</button>
              <button style={{ padding: "8px 16px", borderRadius: "20px", border: "1px solid var(--admin-border)", backgroundColor: "white", color: "var(--color-slate-700)", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}>Engineering</button>
              <button style={{ padding: "8px 16px", borderRadius: "20px", border: "1px solid var(--admin-border)", backgroundColor: "white", color: "var(--color-slate-700)", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}>Design</button>
              <button style={{ padding: "8px 16px", borderRadius: "20px", border: "1px solid var(--admin-border)", backgroundColor: "white", color: "var(--color-slate-700)", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}>Operations</button>
              <button style={{ padding: "8px 16px", borderRadius: "20px", border: "1px solid var(--admin-border)", backgroundColor: "white", color: "var(--color-slate-700)", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}>Support</button>
            </div>
            
            {/* Roles list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "800px", margin: "0 auto" }}>
              {[
                { title: "Senior Android Engineer", dept: "Engineering", loc: "Bangalore" },
                { title: "Backend Engineer (Go)", dept: "Engineering", loc: "Bangalore / Remote" },
                { title: "Product Designer", dept: "Design", loc: "Mumbai" },
                { title: "City Operations Manager", dept: "Operations", loc: "Delhi NCR" },
                { title: "Driver Support Specialist", dept: "Support", loc: "Bangalore" },
              ].map((role, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px", backgroundColor: "white", borderRadius: "12px", border: "1px solid var(--admin-border)", transition: "box-shadow 0.2s", cursor: "pointer" }} onMouseOver={(e) => e.currentTarget.style.boxShadow = "var(--shadow-card)"} onMouseOut={(e) => e.currentTarget.style.boxShadow = "none"}>
                  <div>
                    <h4 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px", color: "var(--color-slate-900)" }}>{role.title}</h4>
                    <div style={{ display: "flex", gap: "16px", fontSize: "14px", color: "var(--color-slate-500)" }}>
                      <span>{role.dept}</span>
                      <span style={{ color: "var(--admin-border)" }}>•</span>
                      <span>{role.loc}</span>
                    </div>
                  </div>
                  <div style={{ color: "var(--color-indigo)", fontWeight: "600" }}>Apply →</div>
                </div>
              ))}
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
