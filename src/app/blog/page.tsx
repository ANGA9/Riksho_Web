import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import AppDownloadCTA from "@/components/AppDownloadCTA";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Full-bleed Photo Hero */}
        <section className="hero-section" style={{ minHeight: "50vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
            <Image 
              src="/images/cab.png"
              alt="The Riksho Journal"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,23,42,0.85), rgba(15,23,42,0.4))" }} />
          </div>
          
          <div className="container relative z-10" style={{ color: "white", textAlign: "center" }}>
            <h1 className="font-display animate-fade-in-up" style={{ fontSize: "clamp(40px, 5vw, 64px)", marginBottom: "16px", color: "white" }}>
              The Riksho Journal
            </h1>
            <p className="animate-fade-in-up" style={{ fontSize: "1.125rem", maxWidth: "600px", margin: "0 auto", opacity: 0.9, animationDelay: "0.1s" }}>
              Product news, safety updates, and stories from the road.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="section bg-light">
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch", gap: "0", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--admin-border)", backgroundColor: "white", boxShadow: "var(--shadow-card)" }}>
              <div style={{ flex: "1 1 500px", position: "relative", minHeight: "400px" }}>
                <Image src="/images/safety.png" alt="Safety first" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ flex: "1 1 400px", padding: "48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span style={{ display: "inline-block", padding: "4px 12px", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", borderRadius: "20px", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", alignSelf: "flex-start", marginBottom: "20px" }}>Safety Updates</span>
                <h2 className="font-display" style={{ fontSize: "32px", marginBottom: "16px", lineHeight: "1.2" }}>
                  Introducing SOS 2.0: Real-time emergency routing and response
                </h2>
                <p className="text-muted" style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "32px" }}>
                  We are rolling out a major update to our in-app SOS feature. The new system instantly routes your live location to the nearest verified emergency responders while simultaneously alerting our 24/7 safety command center.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "var(--color-slate-200)" }}></div>
                  <div>
                    <div style={{ fontWeight: "600", fontSize: "14px" }}>Priya Sharma</div>
                    <div style={{ fontSize: "13px", color: "var(--color-slate-500)" }}>Head of Trust & Safety • Oct 12, 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Posts */}
        <section className="section">
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap", gap: "24px" }}>
              <h2 className="font-display" style={{ fontSize: "32px" }}>Latest Posts</h2>
              
              {/* Category Chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <button style={{ padding: "8px 16px", borderRadius: "20px", border: "1px solid var(--color-indigo)", backgroundColor: "var(--color-indigo)", color: "white", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}>All</button>
                <button style={{ padding: "8px 16px", borderRadius: "20px", border: "1px solid var(--admin-border)", backgroundColor: "white", color: "var(--color-slate-700)", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}>Product</button>
                <button style={{ padding: "8px 16px", borderRadius: "20px", border: "1px solid var(--admin-border)", backgroundColor: "white", color: "var(--color-slate-700)", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}>Safety</button>
                <button style={{ padding: "8px 16px", borderRadius: "20px", border: "1px solid var(--admin-border)", backgroundColor: "white", color: "var(--color-slate-700)", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}>Drivers</button>
                <button style={{ padding: "8px 16px", borderRadius: "20px", border: "1px solid var(--admin-border)", backgroundColor: "white", color: "var(--color-slate-700)", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}>Cities</button>
              </div>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
              {/* Post 1 */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ position: "relative", width: "100%", paddingTop: "60%", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--admin-border)" }}>
                  <Image src="/images/city.png" alt="City expansion" fill style={{ objectFit: "cover" }} />
                </div>
                <div>
                  <span style={{ fontSize: "12px", fontWeight: "700", color: "var(--color-indigo)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Cities</span>
                  <h3 className="font-display" style={{ fontSize: "20px", marginTop: "8px", marginBottom: "8px", lineHeight: "1.3" }}>Riksho expands to 15 Tier-2 cities in northern India</h3>
                  <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6", marginBottom: "16px" }}>Bringing fair fares and reliable rides to millions more.</p>
                  <div style={{ fontSize: "13px", color: "var(--color-slate-500)" }}>Oct 5, 2026</div>
                </div>
              </div>
              
              {/* Post 2 */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ position: "relative", width: "100%", paddingTop: "60%", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--admin-border)" }}>
                  <Image src="/images/bike.png" alt="Product update" fill style={{ objectFit: "cover" }} />
                </div>
                <div>
                  <span style={{ fontSize: "12px", fontWeight: "700", color: "var(--color-indigo)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Product</span>
                  <h3 className="font-display" style={{ fontSize: "20px", marginTop: "8px", marginBottom: "8px", lineHeight: "1.3" }}>New UI update: Faster booking for your daily commute</h3>
                  <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6", marginBottom: "16px" }}>Save your frequent routes for one-tap booking.</p>
                  <div style={{ fontSize: "13px", color: "var(--color-slate-500)" }}>Sep 28, 2026</div>
                </div>
              </div>
              
              {/* Post 3 */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ position: "relative", width: "100%", paddingTop: "60%", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--admin-border)", backgroundColor: "#f9fafb", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image src="/images/ill_business.png" alt="Driver stories" fill style={{ objectFit: "contain", padding: "20px" }} />
                </div>
                <div>
                  <span style={{ fontSize: "12px", fontWeight: "700", color: "var(--color-indigo)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Drivers</span>
                  <h3 className="font-display" style={{ fontSize: "20px", marginTop: "8px", marginBottom: "8px", lineHeight: "1.3" }}>Zero commission month: How partners are maximizing earnings</h3>
                  <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6", marginBottom: "16px" }}>Stories from the first month of our new driver initiative.</p>
                  <div style={{ fontSize: "13px", color: "var(--color-slate-500)" }}>Sep 15, 2026</div>
                </div>
              </div>
            </div>
            
            <div style={{ textAlign: "center", marginTop: "48px" }}>
              <button className="btn-secondary">Load More</button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section style={{ backgroundColor: "#EEF2FF", padding: "64px 0", borderTop: "1px solid var(--admin-border)", borderBottom: "1px solid var(--admin-border)" }}>
          <div className="container text-center" style={{ maxWidth: "600px" }}>
            <h2 className="font-display" style={{ fontSize: "32px", marginBottom: "16px" }}>Get updates in your inbox</h2>
            <p className="text-muted" style={{ marginBottom: "32px" }}>Subscribe to our monthly newsletter for the latest company news and product updates.</p>
            <form style={{ display: "flex", gap: "12px", justifyContent: "center" }} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" style={{ padding: "12px 24px", borderRadius: "8px", border: "1px solid var(--admin-border)", flex: "1", maxWidth: "300px", fontSize: "16px" }} required />
              <button type="submit" className="btn-primary" style={{ whiteSpace: "nowrap" }}>Subscribe</button>
            </form>
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
