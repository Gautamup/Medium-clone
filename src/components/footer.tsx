import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

const socialLinks = [
    {
        label: "in",
        href: "https://www.linkedin.com/in/iam-gautam/",
        name: "LinkedIn"
    },
    {
        label: "X",
        href: "https://x.com/",
        name: "X"
    },
    {
        label: "GH",
        href: "https://github.com/Gautamup",
        name: "Github"
    }
];

export const Footer = () =>{
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [formError, setFormError] = useState("");
    const [formSuccess, setFormSuccess] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (!isContactOpen) {
            return;
        }

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsContactOpen(false);
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isContactOpen]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((current) => ({
            ...current,
            [name]: value
        }));
        setFormError("");
        setFormSuccess("");
    };

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            message: ""
        });
        setFormError("");
        setFormSuccess("");
        setIsSubmitting(false);
    };

    const closeContact = () => {
        setIsContactOpen(false);
        resetForm();
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedData = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim()
        };

        if (!trimmedData.name || !trimmedData.email || !trimmedData.message) {
            setFormError("Please fill in all fields.");
            setFormSuccess("");
            return;
        }

        setIsSubmitting(true);
        setFormError("");
        setFormSuccess("");

        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/contact`, trimmedData);
            if (response.data?.success) {
                setFormSuccess(response.data.message || "Message sent successfully");
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            } else {
                setFormError(response.data?.message || "Unable to send message.");
            }
        } catch (error: any) {
            setFormError(error?.response?.data?.message || "Unable to send message.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return(
        <>
            <footer className="border-t border-white/10 py-2 text-white/55">
                <div className="editorial-shell flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
                    <div className="headline-font text-lg text-white/78">GG Writes</div>
                    <div className="flex flex-wrap gap-5">
                        <a
                            href="https://gautam-cv.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>About Me</button>
                        </a>
                        <button onClick={() => setIsContactOpen(true)} className="text-inherit">
                            Contact
                        </button>
                        <a
                            href="https://github.com/Gautamup"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>Github</button>
                        </a>
                    </div>
                </div>
            </footer>

            {isContactOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/70 px-4 py-6 backdrop-blur-sm md:px-6 md:py-8"
                    onClick={closeContact}
                >
                    <div
                        className="relative mx-auto w-full max-w-5xl rounded-[28px] bg-white px-7 py-7 text-black shadow-[0_32px_120px_rgba(0,0,0,0.45)] md:px-10 md:py-9"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={closeContact}
                            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-black/6 text-lg text-black/65 transition hover:bg-black/10"
                            aria-label="Close contact form"
                        >
                            x
                        </button>
                        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
                                <section>
                                    <h2 className="text-4xl font-semibold leading-none text-black md:text-[4.4rem]">
                                        Get in touch
                                    </h2>
                                    <div className="mt-7 space-y-5 text-[16px] text-black/78">
                                        <div>
                                            <div className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-black/44">
                                                Email
                                            </div>
                                            <div>upadhyaygautam97@gmail.com</div>
                                        </div>
                                        <div>
                                            <div className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-black/44">
                                                Phone
                                            </div>
                                            <div>+91 8769451014</div>
                                        </div>
                                        <div>
                                            <div className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-black/44">
                                                Address
                                            </div>
                                            <div>Gurgaon, Haryana, India</div>
                                        </div>
                                    </div>
                                    <div className="mt-9">
                                        <div className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-black/44">
                                            Follow me
                                        </div>
                                        <div className="flex gap-3">
                                            {socialLinks.map((link) => (
                                                <a
                                                    key={link.name}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={link.name}
                                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm font-semibold text-white transition hover:bg-black/80"
                                                >
                                                    {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <form className="grid gap-4" onSubmit={handleSubmit}>
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <label className="grid gap-2">
                                                <span className="text-sm font-semibold text-black/68">Your Name</span>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    placeholder="Your full name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="rounded-2xl border border-black/8 bg-black/5 px-5 py-3.5 text-black outline-none placeholder:text-black/35"
                                                />
                                            </label>
                                            <label className="grid gap-2">
                                                <span className="text-sm font-semibold text-black/68">Email address</span>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    placeholder="Your email address"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="rounded-2xl border border-black/8 bg-black/5 px-5 py-3.5 text-black outline-none placeholder:text-black/35"
                                                />
                                            </label>
                                        </div>
                                        <label className="grid gap-2">
                                            <span className="text-sm font-semibold text-black/68">Message</span>
                                            <textarea
                                                name="message"
                                                placeholder="Write something...."
                                                rows={6}
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                className="resize-none rounded-2xl border border-black/8 bg-black/5 px-5 py-4 text-black outline-none placeholder:text-black/35"
                                            />
                                        </label>
                                        {formError ? (
                                            <div className="text-sm font-medium text-red-600">
                                                {formError}
                                            </div>
                                        ) : null}
                                        {formSuccess ? (
                                            <div className="text-sm font-medium text-emerald-600">
                                                {formSuccess}
                                            </div>
                                        ) : null}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="rounded-2xl bg-black px-6 py-3.5 text-base font-semibold text-white transition hover:bg-black/88 disabled:cursor-not-allowed disabled:bg-black/55"
                                        >
                                            {isSubmitting ? "Sending..." : "Send Message"}
                                        </button>
                                    </form>
                                </section>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
