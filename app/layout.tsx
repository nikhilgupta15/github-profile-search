import type { Metadata } from "next";
import { Inter, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const be_vietnam_pro = Be_Vietnam_Pro({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GitHub Profile Search",
  description:
    "Search Github Users using their usernames in an easy and fast way!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={be_vietnam_pro.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
