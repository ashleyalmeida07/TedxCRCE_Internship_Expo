import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TEDxCRCE Internship-Expo 2025 | Ideas. Internships. Impact.',
  description:
    'Join the most innovative internship expo where cutting-edge ideas meet career opportunities. Connect with industry leaders, showcase your projects, and launch your future.',
  keywords:
    'TEDx, CRCE, internship, expo, 2025, students, companies, innovation, technology',
  authors: [{ name: 'TEDxCRCE Team' }],
  openGraph: {
    title: 'TEDxCRCE Internship Expo 2025',
    description:
      'Ideas. Internships. Impact. - The ultimate platform connecting talent with opportunity.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TEDxCRCE Internship Expo 2025',
    description:
      'Ideas. Internships. Impact. - The ultimate platform connecting talent with opportunity.',
  },
  generator: 'Ashley Almeida',

   icons: {
    icon: [
      { url: 'logo.png' }, // Remove the dot - should start with /
      { url: '/favicon.ico' }, // Add standard favicon
    ],
    apple: [{ url: '/apple-icon.png' }],
    shortcut: '/favicon.ico',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
