import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Voidesk — The Unified Productivity Workspace',
  description: 'Your all-in-one toolkit for peak performance. Seamlessly integrate and manage your favorite productivity tools in one centralized, high-performance workspace.',
  generator: 'v0.app',
  openGraph: {
    title: 'Voidesk — The Unified Productivity Workspace',
    description: 'All your favorite productivity tools in one seamless dashboard.',
    type: 'website',
    locale: 'en_US',
    url: 'https://voidesk.netlify.app/',
    siteName: 'Voidesk',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voidesk — The Unified Productivity Workspace',
    description: 'All your favorite productivity tools in one seamless dashboard.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
