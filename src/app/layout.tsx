import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luis Mario Bracamontes | Software Engineer",
  description:
    "Full-stack software engineer specializing in cloud, secure APIs, and practical tools. Portfolio showcasing BorderPulse, cmdgui, BracaBudget, and more.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "portfolio",
    "React",
    "TypeScript",
    "Python",
    "Next.js",
    "Luis Mario Bracamontes",
  ],
  authors: [{ name: "Luis Mario Bracamontes" }],
  openGraph: {
    title: "Luis Mario Bracamontes | Software Engineer",
    description:
      "Full-stack engineer specializing in cloud, secure APIs, and practical tools.",
    type: "website",
    locale: "en_US",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
