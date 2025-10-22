import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GrowingWing - Top Rated Shopify Plus Agency",
  description: "Certified Shopify Plus Agency specializing in custom themes, apps, migrations, and CRO to help brands scale and boost conversions.",
  keywords: "Shopify development, Shopify Plus, e-commerce, custom apps, store migration, theme customization",
  openGraph: {
    title: "GrowingWing - Top Rated Shopify Plus Agency",
    description: "Certified Shopify Plus Agency specializing in custom themes, apps, migrations, and CRO to help brands scale and boost conversions.",
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
        <main >{children}</main>
        <Footer />
      </body>
    </html>
  );
}