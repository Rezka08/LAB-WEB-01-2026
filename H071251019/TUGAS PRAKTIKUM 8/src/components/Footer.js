const raised = "bg-[#dcd6c8] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_#808080,inset_2px_2px_#e8e4da]";
const sunken = "shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080]";

function Footer() {
    return (
        <footer className={`${raised} flex items-center gap-2 p-1 text-sm`}>
        <p className={`${sunken} flex-1 px-3 py-1`}>
            &copy; 2026 Pustaka Senja
        </p>
        </footer>
    );
}

export default Footer;
