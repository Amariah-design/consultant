import { useState } from "react";
import Icon from "./Icon";

export default function Header({ page, navigate }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { label: "Home", id: "home" },
        { label: "Destinations & Services", id: "services" },
        { label: "Contact", id: "contact" },
    ];

    const goTo = (id) => {
        navigate(id);
        setMenuOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#fbfaf7]/95 backdrop-blur">
            <div className="mx-auto flex h-20.5 max-w-360 items-center justify-between px-5 md:px-10 xl:px-16">
                <button
                    onClick={() => goTo("home")}
                    className="flex items-center gap-3 text-left"
                >
                    <div className="flex h-11 w-11 items-center justify-center bg-[#10243a] text-white">
                        <Icon name="globe" size={24} />
                    </div>
                    <div>
                        <p className="text-[17px] font-semibold tracking-tight text-[#10243a]">
                            AMARIAH
                        </p>
                        <p className="text-[9px] font-semibold tracking-[0.25em] text-slate-500">
                            GLOBAL PATHWAYS
                        </p>
                    </div>
                </button>

                <nav className="hidden items-center gap-9 lg:flex">
                    {links.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => goTo(link.id)}
                            className={`text-[13px] font-medium transition ${
                                page === link.id
                                    ? "text-[#1d806b]"
                                    : "text-slate-600 hover:text-[#1d806b]"
                            }`}
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                <button
                    onClick={() => goTo("contact")}
                    className="hidden items-center gap-3 bg-[#1d806b] px-5 py-3 text-[12px] font-semibold text-white transition hover:bg-[#166653] lg:flex"
                >
                    Book Consultation
                    <Icon name="arrow" size={16} />
                </button>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="p-2 text-[#10243a] lg:hidden"
                    aria-label="Toggle navigation"
                >
                    <Icon name={menuOpen ? "close" : "menu"} size={25} />
                </button>
            </div>

            {menuOpen && (
                <nav className="border-t border-slate-200 bg-[#fbfaf7] px-5 py-5 lg:hidden">
                    {links.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => goTo(link.id)}
                            className="block w-full border-b border-slate-200 py-4 text-left text-sm font-medium text-[#10243a]"
                        >
                            {link.label}
                        </button>
                    ))}
                    <button
                        onClick={() => goTo("contact")}
                        className="mt-5 w-full bg-[#1d806b] px-5 py-4 text-sm font-semibold text-white"
                    >
                        Book Consultation
                    </button>
                </nav>
            )}
        </header>
    );
}
