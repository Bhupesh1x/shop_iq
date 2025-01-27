import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { ModalProviders } from "@/providers/ModalProviders";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop IQ",
  description: "Shop IQ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProviders />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
