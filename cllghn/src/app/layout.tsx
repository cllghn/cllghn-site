import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Chris Callaghan",
  description: "Hello! Welcome to my personal website."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`antialiased`}
      >
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
