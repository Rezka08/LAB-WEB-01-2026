const dataDiri = [
  { id: 1, label: 'Nama Lengkap', nilai: 'Gamaliel Borong Manguma' },
  { id: 2, label: 'Asal Kampus', nilai: 'Universitas Hasanuddin' },
  { id: 3, label: 'Program Studi', nilai: 'Sistem Informasi' },
  { id: 4, label: 'Email', nilai: 'lpkdf123@gmail.com' },
]

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          Tentang Saya
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
          Saya adalah mahasiswa Sistem Informasi dari Universitas Hasanuddin
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {dataDiri.map((item) => (
            <li
              key={item.id}
              className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                {item.label}
              </span>
              <span className="text-sm text-slate-800 sm:text-base">
                {item.nilai}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}