import Icon from "../components/Icon";

const services = [
    {
        icon: "graduation",
        title: "Study Abroad",
        description:
            "University admissions, student visa guidance and scholarship support.",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=900&auto=format&fit=crop&q=85",
        tag: "Education",
    },
    {
        icon: "medical",
        title: "Medical Tourism",
        description:
            "Coordinated access to international healthcare providers and treatment journeys.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&auto=format&fit=crop&q=85",
        tag: "Healthcare",
    },
    {
        icon: "briefcase",
        title: "Work & Business",
        description:
            "Guidance on employment routes, work permits and business relocation.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=85",
        tag: "Career",
    },
    {
        icon: "family",
        title: "Visitor & Family Visas",
        description:
            "Support with visitor applications, family reunification and travel planning.",
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=900&auto=format&fit=crop&q=85",
        tag: "Family & Travel",
    },
];

const steps = [
    {
        number: "01",
        title: "Initial Assessment",
        text: "We understand your plans, circumstances and preferred destination.",
    },
    {
        number: "02",
        title: "Document Verification",
        text: "We review your documents and explain the requirements for your route.",
    },
    {
        number: "03",
        title: "Application Processing",
        text: "We guide you through application preparation and submission.",
    },
    {
        number: "04",
        title: "Travel Support",
        text: "We help you prepare for the next stage of your international journey.",
    },
];

export default function Home({ navigate }) {
    return (
        <main className="bg-[#fbfaf7] text-[#10243a]">
            {/* Hero */}
            <section className="mx-auto grid max-w-360 items-center gap-12 px-6 pb-20 pt-12 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-20 xl:px-16">
                <div className="max-w-xl">
                    <div className="mb-7 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#1d806b]" />
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1d806b]">
                            Your journey, thoughtfully guided
                        </p>
                    </div>

                    <h1 className="text-[44px] font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-[66px]">
                        Your next chapter begins{" "}
                        <span className="text-[#1d806b]">beyond borders.</span>
                    </h1>

                    <p className="mt-7 max-w-lg text-base leading-8 text-slate-600">
                        From international education and medical travel to
                        employment and family relocation, we help you navigate
                        the journey with clarity and informed support.
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <button
                            onClick={() => navigate("contact")}
                            className="flex items-center justify-center gap-4 bg-[#1d806b] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#166653]"
                        >
                            Book a Consultation
                            <Icon name="arrow" size={17} />
                        </button>
                        <button
                            onClick={() => navigate("services")}
                            className="flex items-center justify-center gap-3 border border-slate-300 px-7 py-4 text-sm font-semibold text-[#10243a] transition hover:border-[#10243a]"
                        >
                            Explore Our Services
                        </button>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-200 pt-7">
                        {[
                            "Personalised guidance",
                            "Clear application steps",
                            "Ongoing support",
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-2 text-xs text-slate-600"
                            >
                                <Icon
                                    name="check"
                                    size={15}
                                    className="text-[#1d806b]"
                                />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="relative h-107.5 overflow-hidden sm:h-135">
                        <img
                            src="https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                            alt="International travel and a journey across the world"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#10243a]/65 via-transparent to-transparent" />
                        <div className="absolute bottom-8 left-8 max-w-sm text-white sm:bottom-10 sm:left-10">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">
                                A world of possibilities
                            </p>
                            <p className="mt-3 text-2xl font-medium leading-snug sm:text-3xl">
                                Make your international plans with confidence.
                            </p>
                        </div>
                    </div>

                    <div className="absolute -bottom-7 right-5 flex max-w-63.75 items-center gap-4 bg-white p-5 shadow-xl sm:right-3.75">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#e9f2ee] text-[#1d806b]">
                            <Icon name="shield" size={25} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">
                                Guidance at every stage
                            </p>
                            <p className="mt-1 text-xs leading-5 text-slate-500">
                                From your first enquiry to travel preparation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro strip */}
            <section className="bg-[#10243a] px-6 py-12 text-white md:px-10 xl:px-16">
                <div className="mx-auto grid max-w-360 gap-8 md:grid-cols-3 md:gap-12">
                    {[
                        [
                            "01",
                            "Understand your options",
                            "Explore routes that align with your goals.",
                        ],
                        [
                            "02",
                            "Prepare with clarity",
                            "Know what documents and steps may be required.",
                        ],
                        [
                            "03",
                            "Move forward confidently",
                            "Receive guidance throughout your application journey.",
                        ],
                    ].map(([num, title, text]) => (
                        <div key={num} className="flex gap-5">
                            <span className="text-sm font-medium text-[#8fc5b4]">
                                {num}
                            </span>
                            <div>
                                <h3 className="text-base font-semibold">
                                    {title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-slate-300">
                                    {text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services */}
            <section className="mx-auto max-w-360 px-6 py-24 md:px-10 xl:px-16">
                <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1d806b]">
                            What we help you do
                        </p>
                        <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
                            One destination. Different possibilities.
                        </h2>
                    </div>
                    <button
                        onClick={() => navigate("services")}
                        className="flex items-center gap-3 text-sm font-semibold text-[#1d806b]"
                    >
                        View all services <Icon name="arrow" size={17} />
                    </button>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <button
                            key={service.title}
                            onClick={() => navigate("services")}
                            className="group text-left"
                        >
                            <div className="relative h-64 overflow-hidden bg-slate-200">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                />
                                <span className="absolute left-4 top-4 bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-[#10243a]">
                                    {service.tag}
                                </span>
                            </div>
                            <div className="flex items-center justify-between border-b border-slate-200 py-5">
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        {service.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-500">
                                        {service.description}
                                    </p>
                                </div>
                                <Icon
                                    name="arrowUp"
                                    size={19}
                                    className="ml-3 shrink-0 text-[#1d806b]"
                                />
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            {/* Why us */}
            <section className="bg-[#f0eee7]">
                <div className="mx-auto grid max-w-360 gap-12 px-6 py-24 md:px-10 lg:grid-cols-2 lg:items-center xl:px-16">
                    <div className="relative h-105 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&auto=format&fit=crop&q=85"
                            alt="Consultants working together"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1d806b]">
                            The Meridian approach
                        </p>
                        <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                            Good decisions begin with good guidance.
                        </h2>
                        <p className="mt-6 text-sm leading-7 text-slate-600">
                            International applications can involve detailed
                            requirements, unfamiliar processes and important
                            decisions. Our approach is built around helping you
                            understand your options before taking your next
                            step.
                        </p>

                        <div className="mt-8 space-y-6">
                            {[
                                [
                                    "shield",
                                    "Clear and responsible guidance",
                                    "We explain the process and help you understand the requirements.",
                                ],
                                [
                                    "file",
                                    "Attention to your documents",
                                    "We help you organise and review application information.",
                                ],
                                [
                                    "headset",
                                    "Support beyond the enquiry",
                                    "We help you prepare for the next stages of your journey.",
                                ],
                            ].map(([icon, title, text]) => (
                                <div key={title} className="flex gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-[#1d806b]">
                                        <Icon name={icon} size={21} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold">
                                            {title}
                                        </h3>
                                        <p className="mt-1 text-sm leading-6 text-slate-500">
                                            {text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="mx-auto max-w-360 px-6 py-24 md:px-10 xl:px-16">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1d806b]">
                        A straightforward process
                    </p>
                    <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                        From first conversation to next steps.
                    </h2>
                    <p className="mt-5 text-sm leading-7 text-slate-500">
                        Every journey is different. Our four-stage approach
                        helps you understand what comes next.
                    </p>
                </div>

                <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className="relative border-t border-slate-300 pt-6"
                        >
                            <span className="text-4xl font-light text-[#1d806b]">
                                {step.number}
                            </span>
                            <h3 className="mt-6 text-lg font-semibold">
                                {step.title}
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-slate-500">
                                {step.text}
                            </p>
                            {index !== 3 && (
                                <div className="absolute right-0 -top-1.25 hidden h-2 w-2 rounded-full bg-[#1d806b] lg:block" />
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#10243a] px-6 py-20 text-white md:px-10 xl:px-16">
                <div className="mx-auto flex max-w-360 flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div className="max-w-2xl">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8fc5b4]">
                            Start with a conversation
                        </p>
                        <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                            Where would you like your next chapter to take you?
                        </h2>
                    </div>
                    <button
                        onClick={() => navigate("contact")}
                        className="flex shrink-0 items-center justify-center gap-4 bg-[#1d806b] px-7 py-4 text-sm font-semibold text-white hover:bg-[#166653]"
                    >
                        Speak with our team <Icon name="arrow" size={18} />
                    </button>
                </div>
            </section>
        </main>
    );
}
