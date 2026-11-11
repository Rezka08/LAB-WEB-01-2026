import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pustaka Senja | Ruang Baca Digital",
  description: "Ruang baca komunitas untuk menjelajahi ide, cerita, dan pengetahuan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <div className="site-wrap">
          <Navbar />
          <main className="relative z-10 flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
