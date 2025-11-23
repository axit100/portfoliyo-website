import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";
import AssistantWidget from "./components/AssistantWidget";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yashvi Trivedi | Architecture & Interior Design Portfolio",
  description: "Explore the portfolio of Yashvi Trivedi, a creative Architect and Interior Designer specializing in modern, sustainable, and aesthetic spaces.",
  keywords: ["Architecture", "Interior Design", "Portfolio", "Yashvi Trivedi", "Sustainable Design", "Modern Architecture", "3D Visualization"],
  authors: [{ name: "Yashvi Trivedi" }],
  openGraph: {
    title: "Yashvi Trivedi | Architecture & Interior Design Portfolio",
    description: "Explore the portfolio of Yashvi Trivedi, a creative Architect and Interior Designer specializing in modern, sustainable, and aesthetic spaces.",
    url: "https://yashvitrivedi.com", // Replace with actual URL if known, or keep generic
    siteName: "Yashvi Trivedi Portfolio",
    images: [
      {
        url: "/profile.jpg", // Using profile image as default OG image
        width: 800,
        height: 600,
        alt: "Yashvi Trivedi Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yashvi Trivedi | Architecture & Interior Design Portfolio",
    description: "Explore the portfolio of Yashvi Trivedi, a creative Architect and Interior Designer specializing in modern, sustainable, and aesthetic spaces.",
    images: ["/profile.jpg"],
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
        className={`${playfair.variable} ${inter.variable} antialiased bg-black text-gold-100`}
      >
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <AssistantWidget />
      </body>
    </html>
  );
}
