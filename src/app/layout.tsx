import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Internship Radar",
  description: "Track elite tech internships and company watchlists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
