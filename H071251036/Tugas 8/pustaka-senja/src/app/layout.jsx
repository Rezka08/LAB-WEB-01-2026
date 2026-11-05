import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = { title: "Pustaka Senja — Ruang Baca & Cerita", description: "Temukan bacaan favoritmu di Pustaka Senja." };
export default function RootLayout({ children }) {
  return <html lang="id"><body><Navbar /><main className="container-shell min-h-[65vh] py-8 sm:py-12">{children}</main><Footer /></body></html>;
}
