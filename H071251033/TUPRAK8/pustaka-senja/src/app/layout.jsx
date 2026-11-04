import "./globals.css";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata = {
  title: "Pustaka Senja | Ruang Baca Komunitas",
  description: "Katalog buku dan ruang baca komunitas Pustaka Senja",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${plusJakarta.variable} ${fraunces.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#F5EFEB] text-[#382933] font-sans antialiased">
        <Navbar />
        <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}