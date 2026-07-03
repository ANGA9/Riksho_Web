import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AngaZap — Rides, Deliveries & Business Fleets | One App for Everything That Moves",
  description: "Cabs, bike taxis, intercity rides, and on-demand business fleets — AngaZap is one app for everything that needs to move. Fair fares, verified drivers, live tracking.",
  keywords: ["ride hailing", "bike taxi", "delivery", "fleet management", "intercity rides", "AngaZap", "India"],
  openGraph: {
    title: "AngaZap — One App for Everything That Moves",
    description: "Cabs, bike taxis, intercity rides, and on-demand business fleets. Fair fares, live tracking, verified partners.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
