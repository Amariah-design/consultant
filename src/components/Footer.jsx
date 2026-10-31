import Icon from "./Icon";

export default function Footer({ navigate }) {
    return (
        <footer className="bg-[#10243a] text-white">
            <div className="mx-auto grid max-w-360 gap-12 px-6 py-16 md:grid-cols-2 md:px-10 lg:grid-cols-4 xl:px-16">
                <div className="lg:col-span-2">
                    <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center border border-white/30">
                            <Icon name="globe" size={22} />
                        </div>
                        <div>
                            <p className="font-semibold tracking-wide">
                                AMARIAH
                            </p>
                            <p className="text-[9px] tracking-[0.25em] text-slate-400">
                                GLOBAL PATHWAYS
                            </p>
                        </div>
                    </div>
                    <p className="max-w-sm text-sm leading-7 text-slate-300">
                        Thoughtful guidance for international education,
                        healthcare travel, employment opportunities and family
                        relocation.
                    </p>
                </div>

                <div>
                    <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a8c8bd]">
                        Explore
                    </h3>
                    {[
                        ["Home", "home"],
                        ["Destinations & Services", "services"],
                        ["Contact Us", "contact"],
                    ].map(([label, id]) => (
                        <button
                            key={id}
                            onClick={() => {
                                navigate(id);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="mb-3 block text-sm text-slate-300 transition hover:text-white"
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div>
                    <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a8c8bd]">
                        Get in touch
                    </h3>
                    <a
                        href="https://wa.me/2349060976683"
                        target="_blank"
                        rel="noreferrer"
                        className="mb-4 flex items-center gap-3 text-sm text-slate-300 hover:text-white"
                    >
                        <Icon name="phone" size={17} />
                        +234 906 097 6683
                    </a>
                    <button
                        onClick={() => navigate("contact")}
                        className="flex items-center gap-2 text-sm text-slate-300 hover:text-white"
                    >
                        <Icon name="calendar" size={17} />
                        Arrange a consultation
                    </button>
                </div>
            </div>

            <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-slate-400">
                © {new Date().getFullYear()} AMARIAH Global Pathways. All rights
                reserved.
            </div>
        </footer>
    );
}
