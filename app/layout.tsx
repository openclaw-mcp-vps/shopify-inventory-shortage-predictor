import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shopify Inventory Shortage Predictor — Predict Stockouts Before They Happen',
  description: 'AI-powered inventory shortage prediction for Shopify stores. Analyze sales velocity, seasonality, and supplier lead times to prevent stockouts 2-4 weeks in advance.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f2ac826d-ef9e-485d-9b23-bc4de933ba54"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
