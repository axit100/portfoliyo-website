import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";
import AssistantWidget from "./components/AssistantWidget";
import ThemeProvider from "./components/ThemeProvider";
import { features } from "../config";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nivan Dev | Architecture & Interior Design Portfolio",
  description: "Explore the portfolio of Nivan Dev, a creative Architect and Interior Designer specializing in modern, sustainable, and aesthetic spaces.",
  keywords: ["Architecture", "Interior Design", "Portfolio", "Nivan Dev", "Sustainable Design", "Modern Architecture", "3D Visualization"],
  authors: [{ name: "Nivan Dev" }],
  openGraph: {
    title: "Nivan Dev | Architecture & Interior Design Portfolio",
    description: "Explore the portfolio of Nivan Dev, a creative Architect and Interior Designer specializing in modern, sustainable, and aesthetic spaces.",
    url: "https://demoemail@testing.com", // Replace with actual URL if known, or keep generic
    siteName: "Nivan Dev Portfolio",
    images: [
      {
        url: "/profile.png", // Using profile image as default OG image
        width: 800,
        height: 600,
        alt: "Nivan Dev Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nivan Dev | Architecture & Interior Design Portfolio",
    description: "Explore the portfolio of Nivan Dev, a creative Architect and Interior Designer specializing in modern, sustainable, and aesthetic spaces.",
    images: ["/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-background text-gold-100`}
      >
        <ThemeProvider />
        {features.showCustomCursor && <CustomCursor />}
        {features.showSmoothScroll ? (
          <SmoothScroll>
            {children}
          </SmoothScroll>
        ) : (
          children
        )}
        <AssistantWidget />
      </body>
    </html>
  );
}
