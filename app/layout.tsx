import type { Metadata } from "next";
import "./globals.css";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "The Casper - Affordable Mattress for Every Budget | Casper",
  description: "Casper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Banner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
