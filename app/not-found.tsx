import css from "./NotFound.module.css";

import type { Metadata } from "next";

import { SITE_NAME, BASE_URL } from "@/lib/constants/seo";

export const metadata: Metadata = {
  title: `Page not found | ${SITE_NAME}`,
  description: "The page you are looking for does not exist.",
  openGraph: {
    title: `Page not found | ${SITE_NAME}`,
    description: "The page you are looking for does not exist.",
    url: `${BASE_URL}/404`,
    siteName: SITE_NAME,
    images: "/public/og-image.webp",
    type: "website",
  },
};

function NotFound() {
  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}

export default NotFound;
