import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import AppDownloadCTA from "@/components/AppDownloadCTA";

const earnOptions = [
  {
    headline: "Drive a Cab",
    description: "Join thousands of drivers earning fairly with transparent payouts.",
    link: "/drive-a-cab",
    imageSrc: "/images/ill_drive_cab.png",
  },
  {
    headline: "Bike Taxi",
    description: "Flexible bike taxi rides, whenever you're free to ride.",
    link: "/ride-a-bike-taxi",
    imageSrc: "/images/ill_ride_bike.png",
  },
  {
    headline: "Courier Delivery",
    description: "Pick up parcels near you, deliver on a schedule that works for you.",
    link: "/deliver-as-courier",
    imageSrc: "/images/ill_courier.png",
  },
  {
    headline: "Freight & Fleet",
    description: "Put your commercial vehicle to work with consistent freight bookings.",
    link: "/join-a-fleet",
    imageSrc: "/images/ill_freight.png",
  },
];

export default function EarnHubPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Full-bleed Photo Hero */}
        <section className="hero-section" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
            <Image 
              src="/images/photo_earn.png"
              alt="Earn with Riksho hero"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,23,42,0.85), rgba(15,23,42,0.4))" }} />
          </div>
          
          <div className="container relative z-10" style={{ color: "white" }}>
            <h1 className="font-display animate-fade-in-up" style={{ fontSize: "clamp(40px, 5vw, 64px)", marginBottom: "16px", color: "white" }}>
              Earn on your own schedule
            </h1>
            <p className="animate-fade-in-up" style={{ fontSize: "1.125rem", maxWidth: "600px", opacity: 0.9, animationDelay: "0.1s" }}>
              Drive, ride, or deliver — choose how you want to earn with Riksho.
            </p>
          </div>
        </section>

        {/* Earnings calculator band */}
        <section style={{ backgroundColor: "#EEF2FF", padding: "48px 0", borderBottom: "1px solid var(--admin-border)" }}>
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "32px", justifyContent: "space-between", background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)" }}>
              <div style={{ flex: "1 1 300px" }}>
                <h3 className="font-display" style={{ fontSize: "24px", marginBottom: "8px" }}>See how much you can earn</h3>
                <p className="text-muted" style={{ marginBottom: "24px" }}>Earnings vary by city and time spent on the app.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "14px", fontWeight: "600", marginBottom: "8px", color: "var(--color-slate-700)" }}>City</label>
                    <select style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid var(--admin-border)", fontSize: "16px" }}>
                      <option>Delhi NCR</option>
                      <option>Mumbai</option>
                      <option>Bangalore</option>
                    </select>
                  </div>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                      <label style={{ fontSize: "14px", fontWeight: "600", color: "var(--color-slate-700)" }}>Hours per week</label>
                      <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--color-indigo)" }}>40 hours</span>
                    </div>
                    <input type="range" min="1" max="60" defaultValue="40" style={{ width: "100%", accentColor: "var(--color-indigo)" }} />
                  </div>
                </div>
              </div>
              <div style={{ flex: "0 0 300px", textAlign: "center", padding: "24px", backgroundColor: "#f8fafc", borderRadius: "16px", border: "1px solid var(--admin-border)" }}>
                <div style={{ fontSize: "14px", fontWeight: "600", color: "var(--color-slate-500)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>Estimated Earnings</div>
                <div className="font-display" style={{ fontSize: "48px", color: "var(--color-indigo)", lineHeight: 1 }}>₹18,500</div>
                <div style={{ fontSize: "14px", color: "var(--color-slate-500)", marginTop: "8px" }}>per week</div>
                <button className="btn-primary" style={{ width: "100%", marginTop: "24px" }}>Start Earning</button>
              </div>
            </div>
          </div>
        </section>

        {/* Ways to earn (2x2 Grid) */}
        <section className="section bg-light">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>Opportunities</span>
              <h2 className="font-display" style={{ fontSize: "36px" }}>Ways to earn</h2>
            </div>
            
            <div className="service-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
              {earnOptions.map((option) => (
                <div key={option.headline} className="service-card" style={{ display: "flex", flexDirection: "column", height: "100%", background: "white", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--admin-border)" }}>
                  <div className="service-card-image" style={{ backgroundColor: "#f9fafb", position: "relative", height: "240px" }}>
                    <Image
                      src={option.imageSrc}
                      alt={option.headline}
                      fill
                      style={{ objectFit: "contain", padding: "20px" }}
                    />
                  </div>
                  <div className="service-card-content" style={{ padding: "32px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <h3 className="font-display" style={{ fontSize: "24px", marginBottom: "12px" }}>{option.headline}</h3>
                    <p className="text-muted" style={{ flexGrow: 1, fontSize: "15px", lineHeight: "1.6" }}>{option.description}</p>
                    <div className="service-card-links" style={{ marginTop: "24px" }}>
                      <Link href={option.link} style={{ display: "inline-flex", alignItems: "center", fontWeight: 600, color: "var(--color-indigo)", borderBottom: "2px solid transparent", transition: "border-color 0.2s" }} onMouseOver={(e) => e.currentTarget.style.borderColor = "var(--color-indigo)"} onMouseOut={(e) => e.currentTarget.style.borderColor = "transparent"}>
                        Learn more
                        <svg style={{ marginLeft: "4px", width: "16px", height: "16px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner testimonials */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 className="font-display" style={{ fontSize: "36px" }}>Hear from our partners</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ position: "relative", width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden", marginBottom: "20px" }}>
                  <Image src="/images/photo_earn.png" alt="Partner" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ fontSize: "24px", color: "var(--color-indigo)", marginBottom: "16px" }}>&quot;</div>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6", fontStyle: "italic", marginBottom: "20px" }}>With zero commission on my first month, I was able to save up for my kids' school fees faster than I ever thought possible.</p>
                <div style={{ fontWeight: "600" }}>Ravi K.</div>
                <div style={{ fontSize: "13px", color: "var(--color-slate-500)" }}>Cab Driver, Delhi</div>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ position: "relative", width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden", marginBottom: "20px" }}>
                  <Image src="/images/photo_earn.png" alt="Partner" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ fontSize: "24px", color: "var(--color-indigo)", marginBottom: "16px" }}>&quot;</div>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6", fontStyle: "italic", marginBottom: "20px" }}>I do courier deliveries on my way home from college. The app is so easy to use and the weekly payouts are always on time.</p>
                <div style={{ fontWeight: "600" }}>Amit S.</div>
                <div style={{ fontSize: "13px", color: "var(--color-slate-500)" }}>Courier Partner, Mumbai</div>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ position: "relative", width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden", marginBottom: "20px" }}>
                  <Image src="/images/photo_earn.png" alt="Partner" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ fontSize: "24px", color: "var(--color-indigo)", marginBottom: "16px" }}>&quot;</div>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6", fontStyle: "italic", marginBottom: "20px" }}>I have a small fleet of 3 mini-trucks. Riksho keeps them busy all week with bulk orders from local merchants.</p>
                <div style={{ fontWeight: "600" }}>Prakash M.</div>
                <div style={{ fontSize: "13px", color: "var(--color-slate-500)" }}>Fleet Owner, Bangalore</div>
              </div>
            </div>
          </div>
        </section>

        {/* Steps to join */}
        <section className="section bg-light">
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
