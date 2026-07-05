import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";

export default function DriveCabPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        {/* Hero Section with Illustration */}
        <section className="section animate-fade-in-up" style={{ backgroundColor: "#f9fafb", paddingBottom: "0", borderBottom: "1px solid var(--admin-border)" }}>
          <div className="container text-center">
            <h1 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 64px)", marginBottom: "16px", color: "var(--color-indigo)" }}>
              Your car, your hours, your earnings
            </h1>
            <p className="text-muted" style={{ fontSize: "1.125rem", maxWidth: "600px", margin: "0 auto 48px auto" }}>
              Join thousands of drivers earning fairly with transparent payouts.
            </p>
            
            <div style={{ position: "relative", width: "100%", maxWidth: "900px", height: "450px", margin: "0 auto" }}>
              <Image 
                src="/images/ill_drive_cab.png"
                alt="Drive a cab illustration"
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
              <span className="split-eyebrow" style={{ color: "var(--color-indigo)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "0.05em", display: "block", marginBottom: "16px" }}>Drive with Riksho</span>
              <h2 className="font-display" style={{ fontSize: "36px" }}>Earnings that make sense</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "60px" }}>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>1</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Transparent Commissions</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>We take a low, fixed percentage. No hidden fees or surprise deductions from your hard work.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>2</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Zero Penalties for Rejection</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>You are your own boss. Reject rides that don't make sense for you without facing app penalties.</p>
              </div>
              <div style={{ background: "white", padding: "32px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", border: "1px solid var(--admin-border)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>3</div>
                <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px" }}>Daily Payouts</h4>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>Get your earnings deposited directly into your bank account daily. Fast and secure.</p>
              </div>
            </div>
            
            {/* Real Photo Banner */}
            <div style={{ position: "relative", width: "100%", height: "500px", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-card)" }}>
              <Image 
                src="/images/photo_drive_cab.png"
                alt="Driver leaning on car"
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
            <h2 className="font-display" style={{ fontSize: "36px", marginBottom: "24px", color: "white" }}>Ready to drive?</h2>
            <Link href="/#download" className="btn-white" style={{ fontSize: "16px", padding: "14px 32px" }}>
              Get the Partner App
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
