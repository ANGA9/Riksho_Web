import Image from "next/image";

const features = [
  "Same-day city delivery",
  "Scheduled fleet access",
  "Bulk cargo & truckload",
  "API integration for sellers",
];

export default function FleetSpotlight() {
  return (
    <section className="section">
      <div className="container">
        <div className="split-section split-bg-tint reverse">
          
          {/* Image */}
          <div className="split-image">
            <Image
              src="/images/fleet_spotlight.png"
              alt="AngaZap Business Fleet"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="split-content">
            {/* Eyebrow */}
            <span className="split-eyebrow">
              For Business
            </span>

            <h2>
              Your delivery fleet, without owning a fleet
            </h2>

            <p>
              From single parcels to full truckloads — AngaZap gives e-commerce
              sellers, SMEs, and enterprises on-demand access to verified vehicles
              and drivers, with live tracking on every dispatch.
            </p>

            {/* Feature Pills */}
            <ul className="feature-list" style={{ display: "flex", flexWrap: "wrap", gap: "12px", listStyle: "none" }}>
              {features.map((feature) => (
                <li
                  key={feature}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 16px",
                    borderRadius: "999px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    margin: 0
                  }}
                >
                  <svg style={{ width: "16px", height: "16px", flexShrink: 0, color: "var(--color-indigo)" }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <div style={{ marginTop: "16px" }}>
              <a href="/fleet-business" className="btn-primary" style={{ display: "inline-flex" }}>
                Talk to our business team
                <svg style={{ marginLeft: "8px", width: "16px", height: "16px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
