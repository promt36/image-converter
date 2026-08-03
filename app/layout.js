import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "ImageConvert",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description:
    "Free online image converter supporting JPG, PNG, WEBP and AVIF.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://image-converter-red.vercel.app"),

  title: {
    default: "ImageConvert - Free Online Image Converter",
    template: "%s | ImageConvert",
  },

  description:
    "Convert JPG, PNG, WEBP and AVIF images online for free. Fast, private and browser-based image tools.",

  keywords: [
    "image converter",
    "png to jpg",
    "jpg to png",
    "webp converter",
    "avif converter",
    "compress image",
  ],

  openGraph: {
    title: "ImageConvert",
    description:
      "Free online image converter and compression tools.",
    url: "/",
    siteName: "ImageConvert",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ImageConvert",
    description:
      "Free online image converter and compression tools.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-50 text-slate-900">

        <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd),
           }}
        />
        <div className="flex min-h-screen flex-col">
          <Header />

          <div className="flex-1">{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}