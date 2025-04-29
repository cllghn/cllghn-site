import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Chris Callaghan",
  description: "Hello! Welcome to my personal website.",
  publisher: "Chris Callaghan",
  icons: 'Balam_1.svg',
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
        <Analytics />
      </body>
    </html >
  );
}
