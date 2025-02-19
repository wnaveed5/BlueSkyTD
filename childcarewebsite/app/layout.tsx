import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import Navigation from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "BlueSky Training & Development | Childcare Provider Education",
    template: "%s | BlueSky Training & Development",
  },
  description: "Empowering childcare providers with professional development, training, and strategic consulting services. Enhance your skills and advance your career in early childhood education.",
  keywords: ["childcare training", "professional development", "childcare consulting", "early childhood education", "CDA certification", "childcare workshops", "online childcare courses"],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.blueskytd.com/',
    site_name: 'BlueSky Training & Development',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/In-Line%20logo%20with%20Website-FULL%20COLOR-IXFiwVR6jRR3NID35rdncYpVY5yICM.png',
        width: 1200,
        height: 630,
        alt: 'BlueSky Training & Development Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@blueskytd',
    creator: '@blueskytd',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
    generator: 'v0.dev'
},
\
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

import "./globals.css"



import './globals.css'