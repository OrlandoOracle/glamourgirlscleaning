import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glamour Girls Cleaning Company | Professional Cleaning Services in Orlando",
  description:
    "Professional residential cleaning services in the Orlando area. Sparkling results every time. Call (786) 239-9932 for a free quote.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
