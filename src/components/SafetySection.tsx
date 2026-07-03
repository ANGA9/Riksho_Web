import Image from "next/image";

export default function SafetySection() {
  return (
    <section className="section">
      <div className="container">
        <div className="split-section split-bg-indigo">
          {/* Left — Image */}
          <div className="split-image">
            <Image
              src="/images/safety.png"
              alt="Safety first with AngaZap"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right — Content */}
          <div className="split-content">
            {/* Eyebrow */}
            <span className="split-eyebrow">
              Safety
            </span>

            <h2>
              Your safety is non&#8209;negotiable
            </h2>

            <p>
              Every ride, every delivery, every fleet dispatch — backed by verified
              partners, live tracking, and 24/7 support.
            </p>

            {/* Trust Points */}
            <ul className="feature-list">
              {["Real-time ride & delivery tracking", "Background-verified drivers", "24/7 emergency support", "In-app SOS button"].map(
                (point) => (
                  <li key={point}>
                    <svg className="w-4 h-4" style={{ width: "20px", height: "20px", color: "var(--color-cyan)" }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    <span>{point}</span>
                  </li>
                )
              )}
            </ul>

            <div>
              <a href="/safety" className="btn-white" style={{ display: "inline-flex" }}>
                Learn more
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
