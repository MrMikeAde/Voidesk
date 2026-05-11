import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Voidesk | The Professional Toolkit Discovery Hub",
  description: "Curated, high-performance web utilities for developers, designers, and creators. Voidesk centralizes the world's best productivity tools in one seamless dashboard.",
  keywords: ["productivity tools", "web utilities", "developer toolkit", "design resources", "online converters", "performance tools", "curated tools"],
  authors: [{ name: "Voidesk Team" }],
  creator: "Voidesk",
  publisher: "Voidesk",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Voidesk | The Professional Toolkit Discovery Hub",
    description: "The unified productivity workspace for peak performance. All your tools in one seamless dashboard.",
    url: "https://voidesk.netlify.app",
    siteName: "Voidesk",
    images: [
      {
        url: "https://voidesk.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Voidesk - Productivity Toolkit",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voidesk | The Professional Toolkit Discovery Hub",
    description: "Stop hunting, start shipping. The ultimate discovery hub for productivity tools.",
    images: ["https://voidesk.netlify.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
