"use client";
import { useState } from "react";

export default function AssistantWidget() {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        service: "",
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(4); // final thank you step
    };

    const handleNext = () => {
        if (!form.name || !form.email) {
            alert("Please fill in all fields");
            return;
        }
        setStep(3);
    };

    const girlImage = "/2151306535.jpg"; // using your uploaded file

    return (
        <>
            {/* Floating Button */}
            <div
                className="fixed bottom-6 right-6 z-50 cursor-pointer"
                onClick={() => setOpen(true)}
            >
                <img
                    src={girlImage}
                    alt="assistant"
                    className="w-20 h-20 rounded-full border-4 border-gold-400 shadow-xl object-cover"
                />
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-400 text-black text-xs px-3 py-1 rounded-full animate-bounce shadow-md">
                    Need Help?
                </div>
            </div>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
                    <div className="bg-zinc-900 border-2 border-gold-400/30 rounded-2xl p-6 w-full max-w-md shadow-xl relative">
                        {/* Close Button */}
                        <button
                            className="absolute right-3 top-3 text-gold-400 hover:text-gold-200"
                            onClick={() => setOpen(false)}
                        >
                            ✕
                        </button>

                        {/* Character */}
                        <div className="flex justify-center mb-4">
                            <img
                                src={girlImage}
                                className="w-28 h-28 rounded-full border-4 border-gold-400 shadow-md"
                                alt="Assistant"
                            />
                        </div>

                        {/* Steps */}
                        {step === 1 && (
                            <div className="text-center">
                                <h2 className="text-xl font-bold mb-3 text-gold-200">Hi! 👋</h2>
                                <p className="text-gold-100/80 mb-4">
                                    What would you like to hire me for?
                                </p>

                                <div className="flex flex-col space-y-3">
                                    {["Hire For Work", "Fixed Cost Plan", "Consultation"].map(
                                        (item) => (
                                            <button
                                                key={item}
                                                className="py-3 px-4 bg-gold-400 text-black rounded-lg hover:bg-gold-300 transition-colors font-medium"
                                                onClick={() => {
                                                    setForm({ ...form, service: item });
                                                    setStep(2);
                                                }}
                                            >
                                                {item}
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <h2 className="text-lg font-bold mb-4 text-gold-200">Your Details</h2>

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border-2 border-gold-400/30 bg-black/50 text-gold-100 placeholder:text-gold-400/40 p-3 rounded-lg mb-3 focus:outline-none focus:border-gold-400"
                                    value={form.name}
                                    onChange={(e) =>
                                        setForm({ ...form, name: e.target.value })
                                    }
                                />

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full border-2 border-gold-400/30 bg-black/50 text-gold-100 placeholder:text-gold-400/40 p-3 rounded-lg mb-4 focus:outline-none focus:border-gold-400"
                                    value={form.email}
                                    onChange={(e) =>
                                        setForm({ ...form, email: e.target.value })
                                    }
                                />

                                <button
                                    className="w-full bg-gold-400 text-black py-3 rounded-lg font-medium hover:bg-gold-300 transition-colors"
                                    onClick={handleNext}
                                >
                                    Next →
                                </button>

                                <button
                                    className="w-full mt-2 text-gold-400/60 hover:text-gold-400 text-sm py-2"
                                    onClick={() => setStep(1)}
                                >
                                    ← Back
                                </button>
                            </div>
                        )}

                        {step === 3 && (
                            <form onSubmit={handleSubmit}>
                                <h2 className="text-lg font-bold mb-4 text-gold-200">Tell me about project</h2>

                                <textarea
                                    placeholder="Write a brief about your project..."
                                    className="w-full border-2 border-gold-400/30 bg-black/50 text-gold-100 placeholder:text-gold-400/40 p-3 rounded-lg h-32 mb-4 focus:outline-none focus:border-gold-400 resize-none"
                                    value={form.message}
                                    onChange={(e) =>
                                        setForm({ ...form, message: e.target.value })
                                    }
                                    required
                                ></textarea>

                                <button
                                    type="submit"
                                    className="w-full bg-gold-400 text-black py-3 rounded-lg font-bold hover:bg-gold-300 transition-colors"
                                >
                                    Submit Inquiry
                                </button>

                                <button
                                    type="button"
                                    className="w-full mt-2 text-gold-400/60 hover:text-gold-400 text-sm py-2"
                                    onClick={() => setStep(2)}
                                >
                                    ← Back
                                </button>
                            </form>
                        )}

                        {step === 4 && (
                            <div className="text-center">
                                <h2 className="text-xl font-bold mb-3 text-gold-400">
                                    Thank You! 😊
                                </h2>
                                <p className="text-gold-100/80 mb-4">
                                    I received your inquiry. I will get back to you soon!
                                </p>

                                <button
                                    className="mt-3 bg-gold-400 text-black py-3 px-6 rounded-lg font-medium hover:bg-gold-300 transition-colors"
                                    onClick={() => {
                                        setOpen(false);
                                        setStep(1);
                                        setForm({ service: "", name: "", email: "", message: "" });
                                    }}
                                >
                                    Close
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
