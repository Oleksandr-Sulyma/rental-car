import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";

import "@/styles/variables.css";
import "@/styles/base.css";
import "@/styles/layout.css";
import "@/styles/typography.css";

import "@/styles/components/buttons.css";
import "@/styles/components/forms.css";
import "@/styles/components/links.css";
import "@/styles/components/cards.css";

import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { SITE_NAME, BASE_URL } from "@/lib/constants/seo";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Fast and easy car rental service. Choose from a wide range of cars for your next trip.",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: SITE_NAME,
    description: "Premium car rental service at affordable prices.",
    url: BASE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Premium Car Rental`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "Premium car rental service at affordable prices.",
    images: ["/og-image.webp"],
  },
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-family",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--second-family",
});

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable}`}>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
          {modal}
          <Toaster position="top-right" reverseOrder={false} />
          <div id="modal-root"></div>
        </TanStackProvider>
      </body>
    </html>
  );
}