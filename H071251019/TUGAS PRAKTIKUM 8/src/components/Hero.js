const raised = "bg-[#dcd6c8] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_#808080,inset_2px_2px_#e8e4da]";
const sunken = "bg-white shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080,inset_-2px_-2px_#e8e4da,inset_2px_2px_#0a0a0a]";

function Hero({ nama, slogan, lokasi, jamBuka }) {
    return (
        <section className={`${raised} p-1`}>
        <div className="flex items-center justify-between bg-gradient-to-r from-[#6fa8e0] to-[#b9d8f4] px-2 py-1 text-sm font-bold text-[#0b2a55]">
            <span>Selamat_Datang.exe</span>
            <span className={`${raised} grid h-5 w-5 place-items-center text-xs font-normal`} aria-hidden="true">×</span>
        </div>
        <div className="flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:text-left">
            <div className="text-7xl" aria-hidden="true">🗂️</div>
            <div>
            <h1 className="text-3xl font-bold text-[#1b3c70]">{nama}</h1>
            <p className="mt-1 max-w-lg">{slogan}</p>
            <ul className={`${sunken} mt-4 space-y-1 p-3 text-sm`}>
                <li>📍 Lokasi: {lokasi}</li>
                <li>🕘 Jam buka: {jamBuka}</li>
            </ul>
            </div>
        </div>
        </section>
    );
}

export default Hero;
