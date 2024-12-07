import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Chris Callaghan",
  description: "Hello! Welcome to my personal website.",
  publisher: "Chris Callaghan",
  icons: 'adventure.ico',
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