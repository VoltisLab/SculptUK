import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sculpt by U.K - Premium Aesthetic Clinic",
  description: "Where beauty meets elegance. Specialising in full facial enhancements without the need for surgery. Professional dermal fillers, anti-wrinkle treatments, and aesthetic training programs in London.",
  keywords: "aesthetic clinic, dermal fillers, facial enhancement, botox, lip fillers, London aesthetic clinic, non-surgical treatments, aesthetic training",
  authors: [{ name: "Sculpt by U.K" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Sculpt by U.K - Premium Aesthetic Clinic",
    description: "Where beauty meets elegance. Specialising in full facial enhancements without the need for surgery.",
    type: "website",
    siteName: "Sculpt by U.K",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
