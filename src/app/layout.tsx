import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GrowingWing Technology - 10+ Years of Innovation in Shopify Development",
  description: "GrowingWing delivers results-driven Shopify solutions including store setup, custom apps, theme customization, migration, and optimization. 10+ years of experience building successful e-commerce stores.",
  keywords: "Shopify development, Shopify store setup, Shopify customization, Shopify migration, Shopify apps, e-commerce development, Shopify optimization, Shopify theme customization",
  openGraph: {
    title: "GrowingWing Technology - 10+ Years of Innovation in Shopify Development",
    description: "GrowingWing delivers results-driven Shopify solutions including store setup, custom apps, theme customization, migration, and optimization. 10+ years of experience building successful e-commerce stores.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}