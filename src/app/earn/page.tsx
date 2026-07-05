import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

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
      <main style={{ paddingTop: "80px" }}>
        <section className="service-section section animate-fade-in-up">
          <div className="container">
            {/* Section Header */}
            <div className="section-header">
              <h1 className="font-display" style={{ fontSize: "clamp(32px, 5vw, 56px)", marginBottom: "16px" }}>
                Earn on your own schedule
              </h1>
              <p className="section-subtitle">
                Drive, ride, or deliver — choose how you want to earn with Riksho.
              </p>
            </div>

            {/* 2x2 Card Grid */}
            <div className="service-grid">
              {earnOptions.map((option) => (
                <div key={option.headline} className="service-card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  {/* Illustration Image */}
                  <div className="service-card-image" style={{ backgroundColor: "#f9fafb" }}>
                    <Image
                      src={option.imageSrc}
                      alt={option.headline}
                      fill
                      style={{ objectFit: "contain", padding: "20px" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="service-card-content" style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <h3>{option.headline}</h3>
                    <p style={{ flexGrow: 1 }}>{option.description}</p>

                    {/* Links */}
                    <div className="service-card-links" style={{ marginTop: "16px" }}>
                      <Link href={option.link} style={{ display: "inline-flex", alignItems: "center", fontWeight: 600, color: "var(--color-indigo)" }}>
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

        {/* CTA Band */}
        <section className="section text-center" style={{ backgroundColor: "var(--color-indigo)", color: "white" }}>
          <div className="container">
            <h2 className="font-display" style={{ fontSize: "36px", marginBottom: "24px", color: "white" }}>Ready to start earning?</h2>
            <Link href="/#download" className="btn-white" style={{ fontSize: "16px", padding: "14px 32px" }}>
              Download the Partner App
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
