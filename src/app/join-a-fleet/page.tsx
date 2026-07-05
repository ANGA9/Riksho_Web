import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";

export default function JoinFleetPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        {/* Hero Section with Illustration */}
        <section className="section animate-fade-in-up" style={{ backgroundColor: "#f9fafb", paddingBottom: "0", borderBottom: "1px solid var(--admin-border)" }}>
          <div className="container text-center">
            <h1 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 64px)", marginBottom: "16px", color: "var(--color-indigo)" }}>
              Put your commercial vehicle to work
            </h1>
            <p className="text-muted" style={{ fontSize: "1.125rem", maxWidth: "600px", margin: "0 auto 48px auto" }}>
              Truck, van, or tempo — get consistent freight bookings through Riksho.
            </p>
            
            <div style={{ position: "relative", width: "100%", maxWidth: "900px", height: "450px", margin: "0 auto" }}>
              <Image 
                src="/images/ill_freight.png"
                alt="Freight fleet illustration"
                fill
                style={{ objectFit: "contain", objectPosition: "bottom center" }}
              />
            </div>
          </div>
        </section>

        {/* Features in Boxes & Real Photo */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>Business Fleet</span>
              <h2 className="font-display" style={{ fontSize: "36px" }}>Maximize your fleet's potential</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "60px" }}>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>1</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Consistent Bookings</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Connect your trucks or vans to Riksho's business network and reduce empty trips.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>2</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Dedicated Fleet Portal</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Manage multiple vehicles and drivers from a single, powerful admin dashboard.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>3</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Secure B2B Payments</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Guaranteed weekly payouts for corporate contracts. Never chase an invoice again.</p>
              </div>
            </div>
            
            {/* Real Photo Banner */}
            <div style={{ position: "relative", width: "100%", height: "500px", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-card)" }}>
              <Image 
                src="/images/photo_freight.png"
                alt="Truck driver with clipboard"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Band */}
        <section className="section text-center" style={{ backgroundColor: "var(--color-indigo)", color: "white" }}>
          <div className="container">
            <h2 className="font-display" style={{ fontSize: "36px", marginBottom: "24px", color: "white" }}>Ready to partner?</h2>
            <Link href="/#download" className="btn-white" style={{ fontSize: "16px", padding: "14px 32px" }}>
              Join as a Fleet
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
