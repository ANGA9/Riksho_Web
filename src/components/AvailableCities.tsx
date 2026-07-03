const cities = [
  "Delhi NCR",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Indore",
  "Bhopal",
  "Nagpur",
  "Patna",
  "Kochi",
  "Coimbatore",
  "Vizag",
  "Surat",
  "Vadodara",
];

export default function AvailableCities() {
  return (
    <section className="section" style={{ backgroundColor: "var(--color-white)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Available across India
          </h2>
          <p className="section-subtitle">
            And expanding every month. See if AngaZap is in your city.
          </p>
        </div>

        {/* City Pills */}
        <div className="cities-wrapper">
          {cities.map((city) => (
            <span key={city} className="city-pill">
              {/* Location Pin */}
              <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
