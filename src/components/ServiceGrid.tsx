import Image from "next/image";

const services = [
  {
    headline: "Cab Rides",
    description: "Comfortable, fairly-priced rides across the city, anytime.",
    links: [
      { label: "For Riders", href: "/ride" },
      { label: "For Drivers", href: "/ride" },
    ],
    blobColor: "#4338CA",
    imageSrc: "/images/cab_white_v2.png",
  },
  {
    headline: "Bike Taxi",
    description: "Quick point-to-point hops through traffic, at a fraction of the cost.",
    links: [
      { label: "For Riders", href: "/ride" },
      { label: "For Drivers", href: "/ride" },
    ],
    blobColor: "#00C2FF",
    imageSrc: "/images/bike_white_v2.png",
  },
  {
    headline: "City to City",
    description: "Comfortable outstation and intercity travel, door to door.",
    links: [
      { label: "For Riders", href: "/city-to-city" },
      { label: "For Drivers", href: "/city-to-city" },
    ],
    blobColor: "#4338CA",
    imageSrc: "/images/city.png",
  },
  {
    headline: "Fleet & Delivery",
    description: "On-demand vehicles and cargo capacity for businesses of any size.",
    links: [
      { label: "For Business", href: "/fleet-business" },
      { label: "For Partners", href: "/fleet-business" },
    ],
    blobColor: "#00C2FF",
    imageSrc: "/images/fleet_card.png",
  },
];

export default function ServiceGrid() {
  return (
    <section id="services" className="service-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            One app, every way to move
          </h2>
          <p className="section-subtitle">
            Whether it&apos;s you, your parcel, or your entire delivery fleet —
            AngaZap gets it there.
          </p>
        </div>

        {/* 2x2 Card Grid */}
        <div className="service-grid">
          {services.map((service) => (
            <div key={service.headline} className="service-card">
              {/* Blob Background placeholder (handled in image or layout via css usually, simplified here) */}
              
              {/* Illustration Image */}
              <div className="service-card-image">
                <Image
                  src={service.imageSrc}
                  alt={service.headline}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text Content */}
              <div className="service-card-content">
                <h3>{service.headline}</h3>
                <p>{service.description}</p>

                {/* Links */}
                <div className="service-card-links">
                  {service.links.map((link) => (
                    <a key={link.label} href={link.href}>
                      {link.label} ›
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
