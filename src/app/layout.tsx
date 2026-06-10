import type { Metadata } from "next";
import { Cinzel, Alegreya } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prestige Classes — self-imposed legends for Classic Hardcore",
  description:
    "A WoW Classic Era (Hardcore) addon that turns the old Warcraft RPG prestige classes into living rulesets: vows, trials, ranks and honorifics — enforced while you play.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${alegreya.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-[1.05rem]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
