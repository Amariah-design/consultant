import { useState } from "react";
import Icon from "../components/Icon";

const destinationData = [
    {
        country: "United Kingdom",
        code: "UK",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&auto=format&fit=crop&q=85",
        description: "Education, employment, healthcare and family routes.",
        detail: "Requirements depend on the visa category. Student applicants generally need an eligible course and institution, while work routes have specific sponsorship requirements.",
    },
    {
        country: "Canada",
        code: "CA",
        image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=900&auto=format&fit=crop&q=85",
        description: "Study permits, work routes and family immigration.",
        detail: "Study permit applications generally involve an eligible institution, proof of financial support and other applicable requirements.",
    },
    {
        country: "United States",
        code: "US",
        image: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=900&auto=format&fit=crop&q=85",
        description: "Education, medical visits, employment and tourism.",
        detail: "Visa requirements vary by purpose. Applicants must follow the appropriate visa category and its supporting documentation requirements.",
    },
    {
        country: "United Arab Emirates",
        code: "UAE",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&auto=format&fit=crop&q=85",
        description: "Employment, business, tourism and family routes.",
        detail: "Entry and residence requirements vary according to nationality, purpose of travel and the relevant UAE visa route.",
    },
    {
        country: "Europe",
        code: "EU",
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=900&auto=format&fit=crop&q=85",
        description:
            "Schengen visits, education and selected residence routes.",
        detail: "Schengen short-stay applications usually require a defined travel purpose, itinerary, accommodation details and evidence of sufficient funds.",
    },
];

const serviceDetails = [
    {
        icon: "graduation",
        title: "Educational Relocation",
        description:
            "Plan your academic journey with structured support from course selection to application preparation.",
        items: [
            "University and course guidance",
            "Admission application support",
            "Student visa documentation",
            "Scholarship information",
        ],
    },
    {
        icon: "medical",
        title: "Health & Medical Travel",
        description:
            "Explore international healthcare options and plan the practical details of your medical journey.",
        items: [
            "Hospital and provider research",
            "Medical appointment coordination",
            "Travel and accommodation planning",
            "Treatment journey support",
        ],
    },
    {
        icon: "briefcase",
        title: "General Travel & Immigration",
        description:
            "Understand the available travel and relocation pathways for work, visits and longer-term plans.",
        items: [
            "Work permit guidance",
            "Visitor visa preparation",
            "Permanent residence route information",
            "Business travel support",
        ],
    },
    {
        icon: "family",
        title: "Family Visa Services",
        description:
            "Get help understanding the requirements for joining family members or planning family travel.",
        items: [
            "Family route information",
            "Document preparation guidance",
            "Application support",
            "Travel planning",
        ],
    },
];

export default function Services({ navigate }) {
    const [destination, setDestination] = useState("United Kingdom");
    const [purpose, setPurpose] = useState("Study");
    const [status, setStatus] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(null);

    const assess = () => {
        setStatus(
            `Your preliminary enquiry is for ${purpose.toLowerCase()} in ${destination}. The next step is to review the requirements for your specific route, nationality and circumstances with a consultant.`,
        );
    };

    return (
        <main className="bg-[#fbfaf7] text-[#10243a]">
            <section className="bg-[#10243a] px-6 py-20 text-white md:px-10 lg:py-28 xl:px-16">
                <div className="mx-auto max-w-360">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8fc5b4]">
                        Destinations & services
                    </p>
                    <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
                        Your goals deserve a clear route forward.
                    </h1>
                    <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300">
                        Explore our international education, medical travel,
                        employment, visitor and family relocation support.
                    </p>
                </div>
            </section>

            {/* Service cards */}
            <section className="mx-auto max-w-360 px-6 py-24 md:px-10 xl:px-16">
                <div className="mb-12 max-w-2xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1d806b]">
                        Our areas of support
                    </p>
                    <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                        Services built around your journey.
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {serviceDetails.map((service, index) => (
                        <article
                            key={service.title}
                            className="border border-slate-200 bg-white p-7 transition hover:border-[#1d806b] sm:p-9"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex h-14 w-14 items-center justify-center bg-[#edf3ef] text-[#1d806b]">
                                    <Icon name={service.icon} size={27} />
                                </div>
                                <span className="text-sm text-slate-400">
                                    0{index + 1}
                                </span>
                            </div>
                            <h3 className="mt-7 text-2xl font-semibold">
                                {service.title}
                            </h3>
                            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
                                {service.description}
                            </p>
                            <div className="mt-7 grid gap-3 sm:grid-cols-2">
                                {service.items.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-2 text-sm text-slate-600"
                                    >
                                        <Icon
                                            name="check"
                                            size={16}
                                            className="mt-0.5 shrink-0 text-[#1d806b]"
                                        />
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => navigate("contact")}
                                className="mt-8 flex items-center gap-3 border-t border-slate-200 pt-5 text-sm font-semibold text-[#1d806b]"
                            >
                                Enquire about this service{" "}
                                <Icon name="arrow" size={17} />
                            </button>
                        </article>
                    ))}
                </div>
            </section>

            {/* Destinations */}
            <section className="bg-[#f0eee7] px-6 py-24 md:px-10 xl:px-16">
                <div className="mx-auto max-w-360">
                    <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1d806b]">
                                Explore your options
                            </p>
                            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                                Destinations to consider.
                            </h2>
                            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                                Visa categories and entry rules differ by
                                destination and applicant. Select a country to
                                read a brief overview.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {destinationData.map((country) => (
                            <button
                                key={country.code}
                                onClick={() =>
                                    setSelectedCountry(
                                        selectedCountry?.code === country.code
                                            ? null
                                            : country,
                                    )
                                }
                                className={`group overflow-hidden bg-white text-left transition ${
                                    selectedCountry?.code === country.code
                                        ? "ring-2 ring-[#1d806b]"
                                        : ""
                                }`}
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={country.image}
                                        alt={`${country.country} destination`}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />
                                    <span className="absolute bottom-4 left-4 bg-white px-3 py-2 text-xs font-semibold text-[#10243a]">
                                        {country.code}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold">
                                        {country.country}
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-500">
                                        {country.description}
                                    </p>
                                    <span className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#1d806b]">
                                        View destination details{" "}
                                        <Icon name="arrow" size={15} />
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {selectedCountry && (
                        <div className="mt-6 border-l-4 border-[#1d806b] bg-white p-7">
                            <div className="flex items-start justify-between gap-5">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#1d806b]">
                                        Destination overview
                                    </p>
                                    <h3 className="mt-2 text-2xl font-semibold">
                                        {selectedCountry.country}
                                    </h3>
                                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                                        {selectedCountry.detail}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedCountry(null)}
                                    className="text-sm text-slate-500 hover:text-[#10243a]"
                                    aria-label="Close destination details"
                                >
                                    <Icon name="close" />
                                </button>
                            </div>
                            <button
                                onClick={() => navigate("contact")}
                                className="mt-5 flex items-center gap-3 text-sm font-semibold text-[#1d806b]"
                            >
                                Ask about this destination{" "}
                                <Icon name="arrow" size={16} />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Assessment tool */}
            <section className="mx-auto grid max-w-360 gap-12 px-6 py-24 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center xl:px-16">
                <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1d806b]">
                        Quick assessment
                    </p>
                    <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                        Let's understand where you want to go.
                    </h2>
                    <p className="mt-6 text-sm leading-7 text-slate-500">
                        Tell us your intended destination and travel purpose.
                        We'll show you what to discuss during your initial
                        consultation.
                    </p>
                    <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
                        <Icon
                            name="shield"
                            size={20}
                            className="text-[#1d806b]"
                        />
                        A preliminary enquiry, not a visa decision.
                    </div>
                </div>

                <div className="border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
                    <h3 className="text-xl font-semibold">
                        Your travel overview
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">
                        Complete these two details to get started.
                    </p>

                    <label className="mt-8 block text-xs font-semibold text-slate-700">
                        Where would you like to go?
                    </label>
                    <select
                        value={destination}
                        onChange={(e) => {
                            setDestination(e.target.value);
                            setStatus("");
                        }}
                        className="mt-2 w-full border border-slate-300 bg-white px-4 py-4 text-sm outline-none focus:border-[#1d806b]"
                    >
                        {[
                            "United Kingdom",
                            "Canada",
                            "United States",
                            "United Arab Emirates",
                            "Europe",
                            "Other",
                        ].map((item) => (
                            <option key={item}>{item}</option>
                        ))}
                    </select>

                    <label className="mt-6 block text-xs font-semibold text-slate-700">
                        What is your main purpose?
                    </label>
                    <div className="mt-3 grid grid-cols-2 gap-3">
                        {["Study", "Medical", "Work", "Vacation"].map(
                            (item) => (
                                <button
                                    key={item}
                                    onClick={() => {
                                        setPurpose(item);
                                        setStatus("");
                                    }}
                                    className={`border px-4 py-4 text-sm font-medium transition ${
                                        purpose === item
                                            ? "border-[#1d806b] bg-[#edf3ef] text-[#1d806b]"
                                            : "border-slate-200 text-slate-600 hover:border-slate-400"
                                    }`}
                                >
                                    {item}
                                </button>
                            ),
                        )}
                    </div>

                    <button
                        onClick={assess}
                        className="mt-7 flex w-full items-center justify-center gap-3 bg-[#1d806b] px-6 py-4 text-sm font-semibold text-white hover:bg-[#166653]"
                    >
                        Review my next step <Icon name="arrow" size={17} />
                    </button>

                    {status && (
                        <div className="mt-6 border-l-4 border-[#1d806b] bg-[#edf3ef] p-5">
                            <p className="text-sm font-semibold text-[#10243a]">
                                Your preliminary overview
                            </p>
                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                {status}
                            </p>
                            <button
                                onClick={() => navigate("contact")}
                                className="mt-4 text-sm font-semibold text-[#1d806b] underline underline-offset-4"
                            >
                                Continue to consultation
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-[#10243a] px-6 py-16 text-center text-white md:px-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8fc5b4]">
                    Have a question?
                </p>
                <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
                    Let's talk about your international plans.
                </h2>
                <button
                    onClick={() => navigate("contact")}
                    className="mt-8 bg-[#1d806b] px-8 py-4 text-sm font-semibold hover:bg-[#166653]"
                >
                    Contact our team
                </button>
            </section>
        </main>
    );
}
