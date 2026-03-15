import type { Metadata } from "next";
import CatalogClient from "./CatalogClient";

export const metadata: Metadata = {
  title: "Catalog",
  description: "Browse our extensive fleet of cars available for rent.",
};

export default function CatalogPage() {
  return <CatalogClient />;
}