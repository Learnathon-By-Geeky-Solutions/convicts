import type { Metadata } from "next"

import "./globals.css"

import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Car Lander",
  description: "Land your car faster",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
