import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import AppDownloadCTA from "@/components/AppDownloadCTA";

export default function CityToCityPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Full-bleed Photo Hero */}
        <section className="hero-section" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
            <Image 
              src="/images/photo_city_to_city.png"
              alt="City to city hero"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,23,42,0.85), rgba(15,23,42,0.4))" }} />
          </div>
          
          <div className="container relative z-10" style={{ color: "white" }}>
            <h1 className="font-display animate-fade-in-up" style={{ fontSize: "clamp(40px, 5vw, 64px)", marginBottom: "16px", color: "white" }}>
              Every city, one comfortable ride away
            </h1>
            <p className="animate-fade-in-up" style={{ fontSize: "1.125rem", maxWidth: "600px", opacity: 0.9, animationDelay: "0.1s" }}>
              Door-to-door outstation travel — one-way or round trip, fixed fares, no haggling.
            </p>
          </div>
        </section>

        {/* Popular routes grid */}
        <section className="section bg-light">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>Top Destinations</span>
              <h2 className="font-display" style={{ fontSize: "36px" }}>Popular outstation routes</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
              {[
                { route: "Delhi → Jaipur", dist: "280 km", fare: "₹2,500" },
                { route: "Mumbai → Pune", dist: "150 km", fare: "₹1,800" },
                { route: "Bangalore → Mysore", dist: "145 km", fare: "₹1,700" },
                { route: "Chennai → Pondicherry", dist: "165 km", fare: "₹1,900" }
              ].map((item, i) => (
                <div key={i} style={{ background: "white", padding: "24px", borderRadius: "var(--radius-md)", border: "1px solid var(--admin-border)", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h4 className="font-display" style={{ fontSize: "18px", color: "var(--color-indigo)" }}>{item.route}</h4>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "var(--color-slate-500)", fontSize: "14px" }}>
                    <span>{item.dist}</span>
                    <span style={{ fontWeight: 600, color: "var(--color-slate-900)" }}>From {item.fare}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2 className="font-display" style={{ fontSize: "36px" }}>Why choose us for outstation</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>1</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Fixed all-inclusive fares</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>No haggling with drivers. Tolls and taxes are clearly displayed before you book.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>2</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Rested, verified drivers</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Specialized drivers experienced in highway driving, fully verified for your safety.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>3</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>One-way & round trips</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Only pay for the distance you travel. Flexible booking for one-way drops or return journeys.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicle types split */}
        <section className="section bg-light">
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px", flexDirection: "row-reverse" }}>
              <div style={{ flex: "1 1 400px" }}>
                <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>The Fleet</span>
                <h2 className="font-display" style={{ fontSize: "36px", marginBottom: "24px" }}>Vehicle types for the long haul</h2>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "24px" }}>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>🚗 Sedan</h4>
                    <p className="text-muted">Comfortable seating for up to 4 passengers with standard boot space. Perfect for couples or small families.</p>
                  </li>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>🚙 SUV</h4>
                    <p className="text-muted">Extra legroom and large boot space. Seats up to 6 comfortably. Ideal for longer trips or lots of luggage.</p>
                  </li>
                  <li>
                    <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>🚐 Tempo Traveller</h4>
                    <p className="text-muted">Premium minibuses for large groups of 9 to 14 passengers. Great for family vacations or corporate retreats.</p>
                  </li>
                </ul>
              </div>
              <div style={{ flex: "1 1 400px", position: "relative", height: "450px", backgroundColor: "white", borderRadius: "var(--radius-lg)", border: "1px solid var(--admin-border)" }}>
                <Image src="/images/ill_city_to_city.png" alt="City to City Fleet" fill style={{ objectFit: "contain", padding: "40px" }} />
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
