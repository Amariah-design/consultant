import { useState } from "react";
import Icon from "../components/Icon";

const WHATSAPP_NUMBER = "2349060976683";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        destination: "",
        purpose: "Study",
    });

    const [error, setError] = useState("");

    const updateField = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    };

    const submitForm = (e) => {
        e.preventDefault();

        if (
            !form.name.trim() ||
            !form.email.trim() ||
            !form.destination.trim()
        ) {
            setError("Please complete all the required fields.");
            return;
        }

        const message = `Hello, I would like to inquire about your travel and relocation services.

Full Name: ${form.name}
Email: ${form.email}
Target Destination: ${form.destination}
Purpose of Travel: ${form.purpose}

Please let me know how I can proceed.`;

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <main className="bg-[#fbfaf7] text-[#10243a]">
            <section className="bg-[#10243a] px-6 py-20 text-white md:px-10 lg:py-24 xl:px-16">
                <div className="mx-auto max-w-360">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8fc5b4]">
                        Contact AMARIAH
                    </p>
                    <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
                        Every great journey starts with a conversation.
                    </h1>
                    <p className="mt-7 max-w-xl text-base leading-8 text-slate-300">
                        Tell us what you're planning. We'll help you understand
                        the next steps and how to get started.
                    </p>
                </div>
            </section>

            <section className="mx-auto grid max-w-360 gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.8fr_1.2fr] xl:px-16">
                {/* Contact details */}
                <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1d806b]">
                        Get in touch
                    </p>
                    <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                        We're ready to hear from you.
                    </h2>
                    <p className="mt-5 text-sm leading-7 text-slate-500">
                        Whether you're exploring study options, seeking medical
                        care abroad or planning a move, you can reach out to
                        discuss your plans.
                    </p>

                    <a
                        href="https://wa.me/2349060976683?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20travel%20and%20relocation%20services."
                        target="_blank"
                        rel="noreferrer"
                        className="mt-8 flex items-center justify-between bg-[#1d806b] p-6 text-white transition hover:bg-[#166653]"
                    >
                        <div>
                            <p className="text-xs text-white/75">
                                Chat with our team directly
                            </p>
                            <p className="mt-2 text-lg font-semibold">
                                WhatsApp Consultation
                            </p>
                            <p className="mt-1 text-sm text-white/80">
                                +234 906 097 6683
                            </p>
                        </div>
                        <Icon name="arrowUp" size={25} />
                    </a>

                    <div className="mt-10 space-y-7 border-t border-slate-200 pt-8">
                        <div className="flex gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#edf3ef] text-[#1d806b]">
                                <Icon name="phone" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold">
                                    Phone & WhatsApp
                                </p>
                                <p className="mt-1 text-sm text-slate-500">
                                    0906 097 6683
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#edf3ef] text-[#1d806b]">
                                <Icon name="mail" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold">Email</p>
                                <p className="mt-1 text-sm text-slate-500">
                                    immaculatepaulose@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#edf3ef] text-[#1d806b]">
                                <Icon name="pin" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold">
                                    Office location
                                </p>
                                <p className="mt-1 text-sm text-slate-500">
                                    59 karu Extension Abuja, Nigeria
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#edf3ef] text-[#1d806b]">
                                <Icon name="clock" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold">
                                    Business hours
                                </p>
                                <p className="mt-1 text-sm text-slate-500">
                                    Mon - Fri : 8am -5pm
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Consultation form */}
                <div className="border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1d806b]">
                        Consultation request
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                        Tell us about your plans.
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                        Complete the details below. Your enquiry will be
                        prepared for WhatsApp so our team can respond.
                    </p>

                    <form onSubmit={submitForm} className="mt-8 space-y-6">
                        <div>
                            <label className="mb-2 block text-xs font-semibold text-slate-700">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={updateField}
                                placeholder="Enter your full name"
                                required
                                className="w-full border border-slate-300 px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#1d806b]"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-xs font-semibold text-slate-700">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={updateField}
                                placeholder="you@example.com"
                                required
                                className="w-full border border-slate-300 px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#1d806b]"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-xs font-semibold text-slate-700">
                                Target Destination *
                            </label>
                            <select
                                name="destination"
                                value={form.destination}
                                onChange={updateField}
                                required
                                className="w-full border border-slate-300 bg-white px-4 py-4 text-sm text-slate-600 outline-none focus:border-[#1d806b]"
                            >
                                <option value="">
                                    Select your destination
                                </option>
                                <option>United Kingdom</option>
                                <option>Canada</option>
                                <option>United States</option>
                                <option>United Arab Emirates</option>
                                <option>Europe</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-xs font-semibold text-slate-700">
                                Purpose of Travel *
                            </label>
                            <select
                                name="purpose"
                                value={form.purpose}
                                onChange={updateField}
                                className="w-full border border-slate-300 bg-white px-4 py-4 text-sm text-slate-600 outline-none focus:border-[#1d806b]"
                            >
                                <option>Study</option>
                                <option>Medical</option>
                                <option>Work</option>
                                <option>Vacation</option>
                            </select>
                        </div>

                        {error && (
                            <p className="border-l-4 border-red-500 bg-red-50 p-3 text-sm text-red-700">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="flex w-full items-center justify-center gap-3 bg-[#1d806b] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#166653]"
                        >
                            Submit Enquiry via WhatsApp
                            <Icon name="arrow" size={17} />
                        </button>

                        <p className="text-center text-xs leading-5 text-slate-400">
                            By submitting, you agree to contact the agency about
                            your enquiry. Your WhatsApp application will open in
                            a new tab.
                        </p>
                    </form>
                </div>
            </section>
        </main>
    );
}
