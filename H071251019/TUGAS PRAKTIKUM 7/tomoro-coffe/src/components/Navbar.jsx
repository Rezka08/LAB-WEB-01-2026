import logoTomoro from "../assets/logo-tomoro.svg";

function Navbar({ jumlahItem, totalHarga }) {
    return (
        <header className="sticky top-0 z-10 bg-white shadow-sm">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
                <div className="flex items-center gap-2">
                    <img 
                        src={logoTomoro} 
                        alt="Logo Tomoro" 
                        className="h-8 w-8 object-contain" 
                    />
                    <h2 className="text-xl font-black tracking-tight text-orange-pumpkin">
                        TOMORRO COFFE
                    </h2>
                </div>

                <div className="flex items-center gap-3 rounded-full bg-arang px-4 py-2 text-sm font-semibold text-white">
                    <span>{jumlahItem} item</span>
                    <span className="h-4 w-px bg-white/40" />
                    <span>Rp {totalHarga.toLocaleString("id-ID")}</span>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;