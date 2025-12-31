"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Calendar, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { submitContactForm } from "@/lib/firebaseService";

const budgetOptions = [
    { value: "", label: "Select your budget" },
    { value: "less-than-500", label: "Less than $500" },
    { value: "500-1000", label: "$500 - $1,000" },
    { value: "1000-2000", label: "$1,000 - $2,000" },
    { value: "2000-5000", label: "$2,000 - $5,000" },
    { value: "5000-plus", label: "$5,000+" },
];

const areasOfInterest = [
    "Web Design",
    "Web Development",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "Email Marketing",
    "Data Analysis",
    "Other"
];

const howFoundUsOptions = [
    { value: "", label: "Select an option" },
    { value: "google", label: "Google Search" },
    { value: "linkedin", label: "LinkedIn" },
    { value: "instagram", label: "Instagram" },
    { value: "referral", label: "Referral" },
    { value: "youtube", label: "YouTube" },
    { value: "other", label: "Other" },
];

export default function Contact() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-15%" });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        budget: "",
        website: "",
        howDidYouFind: "",
        interests: [] as string[]
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const result = await submitContactForm(formData);

            if (result.success) {
                setFormSubmitted(true);
                // Reset form
                setFormData({
                    name: "",
                    company: "",
                    email: "",
                    phone: "",
                    budget: "",
                    website: "",
                    howDidYouFind: "",
                    interests: []
                });
                setTimeout(() => setFormSubmitted(false), 5000);
            } else {
                setSubmitError(result.error || "Failed to submit form. Please try again.");
            }
        } catch (error) {
            setSubmitError("An unexpected error occurred. Please try again.");
            console.error("Form submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (interest: string) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }));
    };

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="py-24 lg:py-32 bg-white relative overflow-hidden"
        >
            {/* Background gradient */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-[#FF6105]/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-[#FF6105]/5 to-transparent rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-bold tracking-tight text-black leading-[1] uppercase">
                        LET'S{" "}
                        <span className="text-[#FF6105]">CONNECT</span>
                    </h2>
                    <p className="mt-6 text-lg text-black/60 max-w-2xl mx-auto">
                        Ready to ignite your brand's digital presence? Get in touch with us today.
                    </p>
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Left: Contact Form - Takes more space */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-3 bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-black/5"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-[#FF6105]/10 flex items-center justify-center">
                                <Send className="w-5 h-5 text-[#FF6105]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-black uppercase">Send a Message</h3>
                                <p className="text-sm text-black/50">Fill out the form below</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Row 1: Name & Company */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-black/50 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#FF6105] focus:ring-2 focus:ring-[#FF6105]/20 outline-none transition-all bg-white"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-black/50 mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#FF6105] focus:ring-2 focus:ring-[#FF6105]/20 outline-none transition-all bg-white"
                                        placeholder="Your Company"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Email & Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-black/50 mb-2">
                                        Email Address <span className="text-[#FF6105]">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#FF6105] focus:ring-2 focus:ring-[#FF6105]/20 outline-none transition-all bg-white"
                                        placeholder="john@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-black/50 mb-2">
                                        Phone Number <span className="text-[#FF6105]">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        minLength={7}
                                        pattern="[\d\s\+\-\(\)]{7,}"
                                        title="Please enter a valid phone number (at least 7 digits)"
                                        className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#FF6105] focus:ring-2 focus:ring-[#FF6105]/20 outline-none transition-all bg-white"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            {/* Row 3: Budget & Website */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-black/50 mb-2">
                                        Budget
                                    </label>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#FF6105] focus:ring-2 focus:ring-[#FF6105]/20 outline-none transition-all bg-white appearance-none cursor-pointer"
                                    >
                                        {budgetOptions.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-black/50 mb-2">
                                        Website
                                    </label>
                                    <input
                                        type="url"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#FF6105] focus:ring-2 focus:ring-[#FF6105]/20 outline-none transition-all bg-white"
                                        placeholder="https://yourwebsite.com"
                                    />
                                </div>
                            </div>

                            {/* How did you find us - Dropdown */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-black/50 mb-2">
                                    How did you find us?
                                </label>
                                <select
                                    name="howDidYouFind"
                                    value={formData.howDidYouFind}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#FF6105] focus:ring-2 focus:ring-[#FF6105]/20 outline-none transition-all bg-white appearance-none cursor-pointer"
                                >
                                    {howFoundUsOptions.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Areas of Interest - Checkboxes */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-black/50 mb-4">
                                    Areas of Interest
                                </label>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                                    {areasOfInterest.map(interest => (
                                        <label
                                            key={interest}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all ${formData.interests.includes(interest)
                                                ? 'border-[#FF6105] bg-[#FF6105]/5 text-[#FF6105]'
                                                : 'border-black/10 hover:border-[#FF6105]/50 text-black/70'
                                                }`}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={formData.interests.includes(interest)}
                                                onChange={() => {
                                                    setFormData(prev => ({
                                                        ...prev,
                                                        interests: prev.interests.includes(interest)
                                                            ? prev.interests.filter(i => i !== interest)
                                                            : [...prev.interests, interest]
                                                    }));
                                                }}
                                                className="sr-only"
                                            />
                                            <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${formData.interests.includes(interest)
                                                ? 'border-[#FF6105] bg-[#FF6105]'
                                                : 'border-black/20'
                                                }`}>
                                                {formData.interests.includes(interest) && (
                                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                            <span className="text-sm font-medium leading-tight">{interest}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Error Message */}
                            {submitError && (
                                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                                    {submitError}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-[#FF6105] text-white font-semibold uppercase tracking-wider rounded-xl hover:bg-[#FF6105]/90 hover:shadow-lg hover:shadow-[#FF6105]/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : formSubmitted ? (
                                    <>
                                        <CheckCircle className="w-5 h-5" />
                                        Message Sent Successfully!
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Right: Book a Call */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-2 flex flex-col"
                    >
                        <div className="bg-gradient-to-br from-[#FF6105] to-[#FF8040] rounded-3xl p-8 lg:p-10 text-white flex-1 flex flex-col">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                                    <Calendar className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold uppercase">Book a Call</h3>
                                    <p className="text-sm text-white/70">Schedule a free consultation</p>
                                </div>
                            </div>

                            <p className="text-white/80 mb-8 flex-1">
                                Prefer to talk? Book a free 30-minute strategy call with our team.
                                We'll discuss your goals, challenges, and how we can help you achieve
                                measurable results.
                            </p>

                            <div className="space-y-4 mb-8">
                                {["Free 30-min consultation", "No obligation", "Custom strategy insights"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-white/80" />
                                        <span className="text-white/90">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="https://calendar.app.google/m3Vy2iasTrY6eNAA6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 bg-white text-[#FF6105] font-semibold uppercase tracking-wider rounded-xl hover:bg-white/90 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                Schedule Your Call
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* Quick Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6 }}
                            className="mt-6 p-6 bg-black/5 rounded-2xl"
                        >
                            <p className="text-sm text-black/50 mb-3 uppercase tracking-wider font-semibold">Quick Contact</p>
                            <div className="space-y-2">
                                <a href="mailto:anish@eegnite.com" className="flex items-center gap-2 text-sm font-medium text-black hover:text-[#FF6105] transition-colors">
                                    <svg className="w-4 h-4 text-[#FF6105]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    anish@eegnite.com
                                </a>
                                <a href="https://wa.me/916289753474" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-black hover:text-[#FF6105] transition-colors">
                                    <svg className="w-4 h-4 text-[#FF6105]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                    WhatsApp
                                </a>
                                <a href="https://www.linkedin.com/in/anish-kr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-black hover:text-[#FF6105] transition-colors">
                                    <svg className="w-4 h-4 text-[#FF6105]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                    LinkedIn
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
