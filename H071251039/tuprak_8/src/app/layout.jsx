import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BookmarkProvider } from "@/context/BookmarkContext";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata = {
  title: "Pustaka Senja - Ruang Baca & Katalog Komunitas",
  description: "Ruang baca dan katalog buku komunitas Pustaka Senja. Pinjam, simpan, dan usulkan buku.",
};

const antiFoucScript = `
  (function() {
    try {
      var saved = localStorage.getItem('tema');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (saved === 'dark' || (!saved && prefersDark)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning className={`${archivo.variable} ${jetbrains.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: antiFoucScript }} />
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <ThemeProvider>
          <BookmarkProvider>
            <SplashScreen>
              <Navbar />
              <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">{children}</main>
              <Footer />
            </SplashScreen>
          </BookmarkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
