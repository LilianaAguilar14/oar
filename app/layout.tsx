import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OAR S.A. - Optimización de Software Empresarial | El Salvador",
  description:
    "Empresa tecnológica salvadoreña especializada en optimización de software empresarial. Mejoramos rendimiento, escalabilidad y estabilidad de sistemas existentes.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
