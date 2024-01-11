/* eslint-disable */
import "../styles/globals.css";

import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Heritier Kaumbu",
  description: "Heritier Kaumbu's Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${urbanist.variable}`}>{children}</body>
    </html>
  );
}
