import type { Metadata } from "next";
import { Poppins, Mulish } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landify UI Kit",
  description: "Landify UI Kit to start my Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${mulish.variable} antialiased relative`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
