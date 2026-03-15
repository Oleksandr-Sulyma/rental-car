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

// export const metadata: Metadata = {
//   title: SITE_NAME,
//   description: 'Simple and efficient note management application.',
//   openGraph: {
//     title: SITE_NAME,
//     description: 'Simple and efficient note management application.',
//     url: BASE_URL,
//     siteName: SITE_NAME,
//     images: [
//       {
//         url: OG_IMAGE,
//         width: 1200,
//         height: 630,
//         alt: SITE_NAME,
//       },
//     ],
//     type: 'website',
//   },
// };

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
        <Header />
        <main>{children}</main>

        <Toaster position="top-right" reverseOrder={false} />

        <div id="modal-root"></div>
      </body>
    </html>
  );
}
