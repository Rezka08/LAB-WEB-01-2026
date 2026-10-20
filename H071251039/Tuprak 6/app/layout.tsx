import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Aqila Sandewang — Intelligent Information Systems & AI Portfolio",
  description:
    "Portfolio Aqila Sandewang, mahasiswa Sistem Informasi Universitas Hasanuddin. Spesialisasi di Intelligent Information Systems, Computer Vision, dan Web Interaktif.",
  icons: {
    icon: "/avatar.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased m-0 p-0 overflow-x-hidden bg-[#f6f4f0] text-[#141414]">
        {children}
      </body>
    </html>
  )
}
