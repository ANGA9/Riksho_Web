"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const megaMenuData = [
  {
    id: "fair-services",
    label: "Fair services",
    links: [
      { label: "Why choose AngaZip", desc: "Discover what makes us the fairest choice.", icon: "✨", href: "#" },
      { label: "City rides", desc: "Everyday rides at fair prices you agree on.", icon: "🚗", href: "#" },
      { label: "City to City", desc: "Travel comfortably between cities.", icon: "🛣️", href: "#" },
      { label: "Delivery", desc: "Fast and reliable door-to-door delivery.", icon: "📦", href: "#" },
    ]
  },
  {
    id: "earn",
    label: "Earn with AngaZip",
    links: []
  },
  {
    id: "support",
    label: "Support",
    links: []
  },
  {
    id: "safety",
    label: "Safety",
    links: []
  },
  {
    id: "impact",
    label: "Impact",
    links: [
      { label: "Our Impact", desc: "See how we're changing communities.", icon: "🌍", href: "#" },
      { label: "Documentary", desc: "Watch the AngaZip story unfold.", icon: "🎥", href: "#" },
      { label: "Book", desc: "Read our comprehensive journey.", icon: "📖", href: "#" },
    ]
  },
  {
    id: "about",
    label: "About us",
    links: []
  }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("fair-services");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeTabData = megaMenuData.find(t => t.id === activeTab);
  const showDropdown = mobileMenuOpen && activeTabData && activeTabData.links.length > 0;

  return (
    <>
      <div className={`mega-menu-overlay ${mobileMenuOpen ? "open" : ""}`} onClick={() => setMobileMenuOpen(false)} />
      
      <nav className={`navbar ${(scrolled || mobileMenuOpen) ? "navbar-scrolled" : ""}`}>
        <div className="container">
          <div className="navbar-top-row">
            {/* Wordmark */}
            <Link href="/" className="navbar-brand">
              <span className={(scrolled || mobileMenuOpen) ? "" : "brand-highlight"}>
                AngaZip
              </span>
            </Link>

            {/* Desktop Right Actions */}
            <div className="navbar-actions">
              <Link 
                href="#download" 
                className={`btn-primary btn-nav-cta ${(scrolled || mobileMenuOpen) ? 'visible' : 'hidden'}`}
                style={{ 
                  backgroundColor: "var(--color-indigo-tint)", 
                  color: "var(--color-indigo)",
                  boxShadow: "none"
                }}
              >
                Get the App
              </Link>

              {/* Language Pill */}
              <button className="nav-pill lang-pill">
                <span style={{ fontWeight: 700, marginRight: "4px" }}>🇮🇳 IN</span>
                <span>En</span>
              </button>

              {/* Desktop Menu Button */}
              <button 
                className="nav-pill menu-pill hidden-mobile" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Close</span>
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <span>Menu</span>
                  </>
                )}
              </button>

              {/* Mobile Hamburger (Only visible on small screens) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`hamburger visible-mobile ${mobileMenuOpen ? "open" : ""}`}
                aria-label="Toggle menu"
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>

          {/* Header Tabs Row - attached to navbar! */}
          {mobileMenuOpen && (
            <div className="mega-menu-tabs-wrapper">
              <div className="mega-menu-tabs">
                {megaMenuData.map((tab) => (
                  <button
                    key={tab.id}
                    className={`mega-menu-tab ${activeTab === tab.id ? "tab-active" : ""}`}
                    onMouseEnter={() => setActiveTab(tab.id)}
                    onClick={() => {
                      if (tab.links.length === 0) setMobileMenuOpen(false);
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mega Menu Dropdown Sheet (rendered below navbar) */}
        <div className={`mega-menu-sheet ${showDropdown ? "open" : ""}`}>
          {activeTabData && activeTabData.links.length > 0 && (
            <div className="container" style={{ padding: "32px 16px" }}>
              {/* Content Area */}
              <div className="mega-menu-grid">
                {activeTabData.links.map((link) => (
                  <Link key={link.label} href={link.href} className="mega-menu-card" onClick={() => setMobileMenuOpen(false)}>
                    <div className="mega-card-icon">{link.icon}</div>
                    <div className="mega-card-text">
                      <h4>{link.label}</h4>
                      <p>{link.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <Link
                href="#download"
                className="btn-primary mobile-only-cta"
                style={{ width: "100%", marginTop: "24px" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get the App
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
