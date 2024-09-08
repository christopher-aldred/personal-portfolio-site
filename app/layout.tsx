import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#131313" },
    { media: "(prefers-color-scheme: dark)", color: "#131313" },
  ],
};

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chris Aldred",
  description: "A developer portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
