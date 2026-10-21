export default function Footer() {
  const nama = 'Gue'
  const tahun = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 py-6 text-center text-sm text-slate-300 sm:text-base">
      <p>
        &copy; {tahun} {nama}. Seluruh hak cipta dilindungi.
      </p>
    </footer>
  )
}