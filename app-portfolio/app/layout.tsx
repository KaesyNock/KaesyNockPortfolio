import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./myspace/components/navbar/Navbar";
import Footer from "./myspace/components/footer/Footer";

import Bio from "./myspace/components/(side one)/bio/Bio";


export const metadata: Metadata = {
  title: "Kaesy Nock Portfolio",
  description: "a portfolio website for Kaesy Nock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
        < Navbar />
        <Bio />
        {children}
        <Footer />
      </body>
    </html>
  );
}
