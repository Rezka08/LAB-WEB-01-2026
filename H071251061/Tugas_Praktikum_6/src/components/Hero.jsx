    const Hero = () => {
    return (
        <section id="home" className="pt-4 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#fcf9f2] dark:bg-[#1d1b1a] border border-[#e8e2d5] dark:border-[#2a2725] text-xs font-medium text-stone-700 dark:text-stone-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>🍃 Welcome — Exploring & Coding</span>
        </div>

        <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-stone-900 dark:text-white leading-tight tracking-tight">
            Information Systems Student & Network Engineering Enthusiast.
            </h1>
            <p className="text-stone-600 dark:text-stone-400 text-sm md:text-base leading-relaxed">
            Mahasiswa Sistem Informasi Universitas Hasanuddin dengan fokus keahlian operasional routing MikroTik, konfigurasi switch fisik multi-vendor, dan perancangan arsitektur jaringan andal.
            </p>
        </div>

        <div className="flex items-center">
            <a
            href="#contact"
            className="px-6 py-3 bg-[#c05621] hover:bg-[#a84815] text-white font-medium text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
            Hubungi Saya &rarr;
            </a>
        </div>

        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#e8e2d5] dark:border-[#2a2725] max-w-xl">
            <div>
            <span className="text-2xl md:text-3xl font-extrabold text-stone-900 dark:text-white">3+</span>
            <p className="text-[10px] md:text-[11px] text-stone-500 font-bold uppercase tracking-wider mt-1">TAHUN ASISTEN LAB</p>
            </div>
            <div>
            <span className="text-2xl md:text-3xl font-extrabold text-stone-900 dark:text-white">2</span>
            <p className="text-[10px] md:text-[11px] text-stone-500 font-bold uppercase tracking-wider mt-1">TEMPAT PKL INDUSTRI</p>
            </div>
            <div>
            <span className="text-2xl md:text-3xl font-extrabold text-stone-900 dark:text-white">7</span>
            <p className="text-[10px] md:text-[11px] text-stone-500 font-bold uppercase tracking-wider mt-1">KREDENSIAL RESMI</p>
            </div>
        </div>
        </section>
    );
    };

    export default Hero;