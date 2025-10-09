import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Font configurations
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Velora — Analytics Dashboard for Modern Teams",
  description:
    "Beautiful, real-time analytics dashboards for teams. Track KPIs, visualize data, and make better decisions.",
  keywords: [
    "analytics",
    "dashboard",
    "SaaS",
    "business intelligence",
    "KPI tracking",
  ],
  authors: [{ name: "Velora Team" }],
  openGraph: {
    title: "Velora — Analytics Dashboard",
    description: "Beautiful, real-time analytics dashboards for modern teams",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velora — Analytics Dashboard",
    description: "Beautiful, real-time analytics dashboards for modern teams",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
