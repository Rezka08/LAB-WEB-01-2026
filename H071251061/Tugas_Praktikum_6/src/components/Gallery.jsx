    const Gallery = () => {
    const topRow = [
        { id: 1, nama: "KOMPETISI NASIONAL", deskripsi: "Olimpiade MikroTik 2024", sub: "Olimpiade Jaringan MikroTik", file: "/assets/sertifikat1.pdf" },
        { id: 2, nama: "DEDIKASI LABORATORIUM", deskripsi: "Asisten Laboratorium", sub: "Asisten Lab Komputer", file: "/assets/sertifikat2.pdf" },
        { id: 3, nama: "PENGURUS ORGANISASI", deskripsi: "Sertifikat Ketua Humas", sub: "Divisi Hubungan Masyarakat", file: "/assets/sertifikat3.pdf" },
        { id: 4, nama: "KOMPETISI NASIONAL", deskripsi: "Olimpiade MikroTik 2023", sub: "Olimpiade Jaringan MikroTik", file: "/assets/sertifikat4.pdf" }
    ];

    const bottomRow = [
        { id: 5, nama: "PRAKTIK KERJA LAPANGAN", deskripsi: "Sertifikat PKL BRIN", sub: "Badan Riset & Inovasi Nasional", file: "/assets/sertifikat5.pdf" },
        { id: 6, nama: "PENGEMBANGAN DIRI", deskripsi: "Seminar Nasional", sub: "Peserta Seminar Nasional", file: "/assets/sertifikat6.pdf" },
        { id: 7, nama: "PELATIHAN TEKNIS", deskripsi: "Webinar Penggunaan MikroTik", sub: "Webinar Jaringan SOHO", file: "/assets/sertifikat7.pdf" },
        { id: 8, nama: "DEDIKASI LABORATORIUM", deskripsi: "Asisten Lab Komputer", sub: "Pengelolaan Lab Komputer", file: "/assets/sertifikat2.pdf" }
    ];

    const doubleTop = [...topRow, ...topRow];
    const doubleBottom = [...bottomRow, ...bottomRow];

    return (
        <section id="credentials" className="space-y-6 w-full overflow-hidden">
        <div>
            <span className="text-xs font-bold tracking-widest text-[#c05621] uppercase">
            AWARDS & CERTIFICATES
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-white mt-1">
            Dokumentasi Sertifikasi
            </h2>
            <p className="text-xs md:text-sm text-stone-600 dark:text-stone-400 mt-1">
            Galeri interaktif bergeser (klik kartu untuk membuka dokumen PDF).
            </p>
        </div>

        <div className="space-y-6 w-full overflow-hidden">
            <div className="w-full overflow-hidden">
            <div className="animate-marquee-left gap-6 pr-6">
                {doubleTop.map((item, index) => (
                <div
                    key={`top-${index}`}
                    className="w-72 shrink-0 bg-[#fcf9f2] dark:bg-[#1d1b1a] p-5 rounded-2xl border border-[#e8e2d5] dark:border-[#2a2725] shadow-md flex flex-col justify-between"
                >
                    <div>
                    <span className="text-[10px] font-bold text-[#c05621] uppercase tracking-wider">
                        {item.nama}
                    </span>
                    <h3 className="text-base font-bold text-stone-900 dark:text-white mt-1">
                        {item.deskripsi}
                    </h3>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">{item.sub}</p>
                    </div>
                    <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-[#c05621] hover:underline"
                    >
                    Buka Pratinjau &rarr;
                    </a>
                </div>
                ))}
            </div>
            </div>

            <div className="w-full overflow-hidden">
            <div className="animate-marquee-right gap-6 pr-6">
                {doubleBottom.map((item, index) => (
                <div
                    key={`bottom-${index}`}
                    className="w-72 shrink-0 bg-[#fcf9f2] dark:bg-[#1d1b1a] p-5 rounded-2xl border border-[#e8e2d5] dark:border-[#2a2725] shadow-md flex flex-col justify-between"
                >
                    <div>
                    <span className="text-[10px] font-bold text-[#c05621] uppercase tracking-wider">
                        {item.nama}
                    </span>
                    <h3 className="text-base font-bold text-stone-900 dark:text-white mt-1">
                        {item.deskripsi}
                    </h3>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">{item.sub}</p>
                    </div>
                    <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-[#c05621] hover:underline"
                    >
                    Buka Pratinjau &rarr;
                    </a>
                </div>
                ))}
            </div>
            </div>
        </div>
        </section>
    );
    };

    export default Gallery;