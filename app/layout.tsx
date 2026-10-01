import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/common/SmoothScroll";
import { site } from "@/data";


const calSans = localFont({
  src: "../public/fonts/CalSansVF.woff2",
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SecureView | CCTV & Security Installation",
  description: "Advanced Security and CCTV solutions, ensuring 24/7 protection with high-quality systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${calSans.variable} ${calSans.className} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">
        <SmoothScroll>
          <Navbar data={site.navbar} />
          <main className="flex-1">{children}</main>
          <Footer data={site.footer} />
        </SmoothScroll>
      </body>
    </html>
  );
}
