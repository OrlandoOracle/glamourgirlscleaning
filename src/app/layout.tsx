import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glamour Girls Cleaning | Professional Cleaning Services",
  description:
    "Professional residential and commercial cleaning services. Trusted, thorough, and sparkling results every time.",
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
