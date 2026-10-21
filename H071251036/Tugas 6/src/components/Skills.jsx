const daftarKeahlian = ['HTML', 'CSS', 'Jason', 'Java', 'Lua']

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          Keahlian
        </h2>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {daftarKeahlian.map((skill, index) => (
            <li
              key={index}
              className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm sm:px-5 sm:py-2.5 sm:text-base"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}