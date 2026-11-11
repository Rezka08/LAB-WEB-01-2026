import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroScreen from "@/components/IntroScreen";
import CommandPalette from "@/components/CommandPalette";

export const metadata = {
  title: "Pustaka Senja | Oase Literasi & Ruang Baca Komunitas",
  description:
    "Suaka literasi dan ruang baca tenang di sudut kampus. Temukan katalog karya klasik, wawasan teknologi, dan ruang kehangatan berdiskusi."
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="dark">
      <body className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 antialiased selection:bg-amber-500/30 selection:text-amber-200">
        <IntroScreen />
        <CommandPalette />
        <Navbar />
        <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}