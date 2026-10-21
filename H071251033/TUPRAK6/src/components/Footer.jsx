function Footer() {
  return (
    <footer id="footer" className="bg-[#FAF7E8] text-stone-800 py-10 text-center w-full border-t-2 border-stone-800/20">
      <div className="w-full px-6 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
          <p className="font-serif text-xl font-black text-purple-950 tracking-wider">ST. NURFADHILLAH FAUZIAH</p>
          <span className="w-2 h-2 bg-amber-500 rounded-sm"></span>
        </div>
        <p className="text-xs font-bold text-stone-600">
          &copy; 2026 Dillah. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;