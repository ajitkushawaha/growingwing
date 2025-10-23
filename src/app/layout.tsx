import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GrowingWing Technology - 10+ Years of Innovation in Digital Marketing",
  description: "GrowingWing delivers results-driven digital solutions including SEO, Web Development, Digital Marketing, and Social Media. 10+ years of experience across diverse industries.",
  keywords: "digital marketing, SEO, web development, social media marketing, digital solutions, e-commerce, Shopify development, online marketing",
  openGraph: {
    title: "GrowingWing Technology - 10+ Years of Innovation in Digital Marketing",
    description: "GrowingWing delivers results-driven digital solutions including SEO, Web Development, Digital Marketing, and Social Media. 10+ years of experience across diverse industries.",
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