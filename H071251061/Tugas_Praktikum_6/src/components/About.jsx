    const About = () => {
    return (
        <div className="space-y-16">
        <section id="about" className="space-y-6">
            <div>
            <span className="text-xs font-bold tracking-widest text-[#c05621] uppercase">
                AKADEMIK
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-white mt-1">
                Latar Belakang Pendidikan
            </h2>
            <p className="text-xs md:text-sm text-stone-600 dark:text-stone-400 mt-1">
                Kombinasi keahlian praktis jaringan dari pendidikan vokasi dan pendalaman teoretis sistem informasi tingkat sarjana.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#fcf9f2] dark:bg-[#1d1b1a] p-6 rounded-2xl border border-[#e8e2d5] dark:border-[#2a2725] space-y-3">
                <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-bold text-stone-900 dark:text-white">Universitas Hasanuddin</h3>
                    <p className="text-xs text-stone-500">S1 Sistem Informasi — Fakultas MIPA</p>
                </div>
                <span className="px-3 py-1 bg-[#c05621]/10 text-[#c05621] text-xs font-semibold rounded-full">
                    2025 – Sekarang
                </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                Menempuh pendidikan semester 3. Berfokus pada perancangan arsitektur teknologi informasi, analisis proses bisnis, basis data relasional, dan integrasi enterprise.
                </p>
            </div>

            <div className="bg-[#fcf9f2] dark:bg-[#1d1b1a] p-6 rounded-2xl border border-[#e8e2d5] dark:border-[#2a2725] space-y-3">
                <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-bold text-stone-900 dark:text-white">SMK Daarul Uluum</h3>
                    <p className="text-xs text-stone-500">Teknik Jaringan Komputer & Telekomunikasi</p>
                </div>
                <span className="px-3 py-1 bg-[#c05621]/10 text-[#c05621] text-xs font-semibold rounded-full">
                    Lulus
                </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                Mempelajari arsitektur jaringan lokal, pengkabelan terstruktur, konfigurasi routing MikroTik dan switching multi-vendor, serta pemeliharaan penuh laboratorium komputer.
                </p>
            </div>
            </div>
        </section>

        <section id="experience" className="space-y-6">
            <div>
            <span className="text-xs font-bold tracking-widest text-[#c05621] uppercase">
                JEJAK LANGKAH
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-white mt-1">
                Pengalaman Kerja & Organisasi
            </h2>
            <p className="text-xs md:text-sm text-stone-600 dark:text-stone-400 mt-1">
                Pengalaman nyata mengelola perangkat, menangani tiket IT, serta memimpin komunikasi kelembagaan.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#fcf9f2] dark:bg-[#1d1b1a] p-6 rounded-2xl border border-[#e8e2d5] dark:border-[#2a2725] space-y-3">
                <h3 className="text-base font-bold text-stone-900 dark:text-white">IT Support (PKL)</h3>
                <span className="inline-block px-2.5 py-0.5 bg-[#c05621]/10 text-[#c05621] text-[11px] font-semibold rounded-md">
                3 Bulan
                </span>
                <p className="text-xs font-medium text-stone-500">PT PLN (Persero) UP3 Jatinegara</p>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                Menangani troubleshooting perangkat komputasi, pemeliharaan konektivitas LAN, dan inventarisasi aset digital.
                </p>
            </div>

            <div className="bg-[#fcf9f2] dark:bg-[#1d1b1a] p-6 rounded-2xl border border-[#e8e2d5] dark:border-[#2a2725] space-y-3">
                <h3 className="text-base font-bold text-stone-900 dark:text-white">IT Support (PKL)</h3>
                <span className="inline-block px-2.5 py-0.5 bg-[#c05621]/10 text-[#c05621] text-[11px] font-semibold rounded-md">
                3 Bulan
                </span>
                <p className="text-xs font-medium text-stone-500">BRIN Gatot Subroto</p>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                Membantu stabilitas sistem jaringan kerja penelitian dan instalasi periferal jaringan.
                </p>
            </div>

            <div className="bg-[#fcf9f2] dark:bg-[#1d1b1a] p-6 rounded-2xl border border-[#e8e2d5] dark:border-[#2a2725] space-y-3">
                <h3 className="text-base font-bold text-stone-900 dark:text-white">Asisten Lab Komputer</h3>
                <span className="inline-block px-2.5 py-0.5 bg-[#c05621]/10 text-[#c05621] text-[11px] font-semibold rounded-md">
                3 Tahun
                </span>
                <p className="text-xs font-medium text-stone-500">SMK Daarul Uluum</p>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                Mengelola reliabilitas workstation komputer lab selama 3 tahun penuh dan asistensi praktikum.
                </p>
            </div>
            </div>
        </section>
        </div>
    );
    };

    export default About;