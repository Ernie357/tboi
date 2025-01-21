import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../../src/globals.css'
import SiteSettingsProvider from "@/context/SiteSettings/SiteSettingsProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isaac Lookup",
  description: "A quick look up site for common features of the video game The Binding of Isaac: Repentance, such as a spindown dice calculator, a pandora's box table, what unlocks which items, what items count for which transformations, etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteSettingsProvider>
            {children}
        </SiteSettingsProvider>
      </body>
    </html>
  );
}
