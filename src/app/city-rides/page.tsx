import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import AppDownloadCTA from "@/components/AppDownloadCTA";

export default function CityRidesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Full-bleed Photo Hero */}
        <section className="hero-section" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
            <Image 
              src="/images/photo_city_rides.png"
              alt="City rides hero"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,23,42,0.85), rgba(15,23,42,0.4))" }} />
          </div>
          
          <div className="container relative z-10" style={{ color: "white" }}>
            <h1 className="font-display animate-fade-in-up" style={{ fontSize: "clamp(40px, 5vw, 64px)", marginBottom: "16px", color: "white" }}>
              Comfortable rides, fair fares
            </h1>
            <p className="animate-fade-in-up" style={{ fontSize: "1.125rem", maxWidth: "600px", opacity: 0.9, animationDelay: "0.1s" }}>
              Book a cab in seconds. Know your fare before you ride.
            </p>
          </div>
        </section>

        {/* Features in Boxes */}
        <section className="section bg-light">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>How it works</span>
              <h2 className="font-display" style={{ fontSize: "36px" }}>Ready when you are</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>1</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Request a ride</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Open the Riksho app, enter your destination, and see your upfront fare immediately.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>2</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Meet your driver</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Track your verified driver on the map. We will let you know when they arrive.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>3</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Enjoy the journey</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Sit back and relax. Pay seamlessly in cash or UPI at the end of the trip.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet options */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 className="font-display" style={{ fontSize: "36px" }}>A ride for every occasion</h2>
              <p className="text-muted" style={{ marginTop: "16px", maxWidth: "600px", margin: "16px auto 0" }}>Choose from our range of vehicles to suit your needs and budget.</p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              <div style={{ background: "#f9fafb", padding: "32px", borderRadius: "var(--radius-lg)", border: "1px solid var(--admin-border)", position: "relative" }}>
                <div style={{ position: "absolute", top: "24px", right: "24px", background: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "14px", fontWeight: "600", border: "1px solid var(--admin-border)", color: "var(--color-indigo)" }}>Budget</div>
                <div style={{ height: "160px", position: "relative", marginBottom: "24px" }}>
                  <Image src="/images/cab.png" alt="Mini Hatchback" fill style={{ objectFit: "contain" }} />
                </div>
                <h4 className="font-display" style={{ fontSize: "24px", marginBottom: "8px" }}>Mini</h4>
                <p className="text-muted" style={{ fontSize: "15px" }}>Compact hatchbacks for quick, affordable everyday commutes across town.</p>
              </div>
              <div style={{ background: "#f9fafb", padding: "32px", borderRadius: "var(--radius-lg)", border: "1px solid var(--admin-border)", position: "relative" }}>
                <div style={{ position: "absolute", top: "24px", right: "24px", background: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "14px", fontWeight: "600", border: "1px solid var(--admin-border)", color: "var(--color-indigo)" }}>Comfort</div>
                <div style={{ height: "160px", position: "relative", marginBottom: "24px" }}>
                  <Image src="/images/cab.png" alt="Sedan" fill style={{ objectFit: "contain" }} />
                </div>
                <h4 className="font-display" style={{ fontSize: "24px", marginBottom: "8px" }}>Sedan</h4>
                <p className="text-muted" style={{ fontSize: "15px" }}>Extra legroom and comfort for business trips or relaxing rides.</p>
              </div>
              <div style={{ background: "#f9fafb", padding: "32px", borderRadius: "var(--radius-lg)", border: "1px solid var(--admin-border)", position: "relative" }}>
                <div style={{ position: "absolute", top: "24px", right: "24px", background: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "14px", fontWeight: "600", border: "1px solid var(--admin-border)", color: "var(--color-indigo)" }}>Premium</div>
                <div style={{ height: "160px", position: "relative", marginBottom: "24px" }}>
                  <Image src="/images/cab.png" alt="SUV" fill style={{ objectFit: "contain" }} />
                </div>
                <h4 className="font-display" style={{ fontSize: "24px", marginBottom: "8px" }}>SUV</h4>
                <p className="text-muted" style={{ fontSize: "15px" }}>Spacious seating for up to 6 people, perfect for group outings and luggage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Rider benefits */}
        <section className="section bg-light">
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px" }}>
              <div style={{ flex: "1 1 400px" }}>
                <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>Your Safety Matters</span>
                <h2 className="font-display" style={{ fontSize: "36px", marginBottom: "24px" }}>Why ride with us?</h2>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "24px" }}>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>💸 Upfront Pricing</h4>
                    <p className="text-muted">No surprises. See your guaranteed fare before you confirm your ride.</p>
                  </li>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>✅ Verified Drivers</h4>
                    <p className="text-muted">Every driver passes a rigorous background check before getting on the road.</p>
                  </li>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>🚨 24/7 SOS</h4>
                    <p className="text-muted">Emergency assistance is just one tap away in the Riksho app.</p>
                  </li>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>📍 Live Ride-Sharing</h4>
                    <p className="text-muted">Share your live location and trip status with family and friends.</p>
                  </li>
                </ul>
              </div>
              <div style={{ flex: "1 1 400px", position: "relative", height: "450px", backgroundColor: "white", borderRadius: "var(--radius-lg)", border: "1px solid var(--admin-border)" }}>
                <Image src="/images/ill_city_rides.png" alt="Rider Benefits" fill style={{ objectFit: "contain", padding: "40px" }} />
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
