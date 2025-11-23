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
                    className="w-20 h-20 rounded-full border-4 border-yellow-500 shadow-xl object-cover"
                />
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs px-3 py-1 rounded-full animate-bounce shadow-md">
                    Need Help?
                </div>
            </div>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl relative">
                        {/* Close Button */}
                        <button
                            className="absolute right-3 top-3 text-gray-500 hover:text-black"
                            onClick={() => setOpen(false)}
                        >
                            ✕
                        </button>

                        {/* Character */}
                        <div className="flex justify-center mb-4">
                            <img
                                src={girlImage}
                                className="w-28 h-28 rounded-full border-4 border-yellow-400 shadow-md"
                                alt="Assistant"
                            />
                        </div>

                        {/* Steps */}
                        {step === 1 && (
                            <div className="text-center">
                                <h2 className="text-xl font-bold mb-3">Hi! 👋</h2>
                                <p className="text-gray-600 mb-4">
                                    What would you like to hire me for?
                                </p>

                                <div className="flex flex-col space-y-3">
                                    {["Hire For Work", "Fixed Cost Plan", "Consultation"].map(
                                        (item) => (
                                            <button
                                                key={item}
                                                className="py-2 px-4 bg-black text-white rounded-lg hover:bg-yellow-600"
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
                                <h2 className="text-lg font-bold mb-2">Your Details</h2>

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border p-2 rounded mb-3"
                                    onChange={(e) =>
                                        setForm({ ...form, name: e.target.value })
                                    }
                                />

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full border p-2 rounded mb-3"
                                    onChange={(e) =>
                                        setForm({ ...form, email: e.target.value })
                                    }
                                />

                                <button
                                    className="w-full bg-black text-white py-2 rounded-lg"
                                    onClick={() => setStep(3)}
                                >
                                    Next →
                                </button>
                            </div>
                        )}

                        {step === 3 && (
                            <form onSubmit={handleSubmit}>
                                <h2 className="text-lg font-bold mb-2">Tell me about project</h2>

                                <textarea
                                    placeholder="Write a brief about your project..."
                                    className="w-full border p-2 rounded h-28 mb-3"
                                    onChange={(e) =>
                                        setForm({ ...form, message: e.target.value })
                                    }
                                ></textarea>

                                <button
                                    type="submit"
                                    className="w-full bg-yellow-500 text-black py-2 rounded-lg font-bold"
                                >
                                    Submit Inquiry
                                </button>
                            </form>
                        )}

                        {step === 4 && (
                            <div className="text-center">
                                <h2 className="text-xl font-bold mb-3 text-green-600">
                                    Thank You! 😊
                                </h2>
                                <p className="text-gray-600 mb-3">
                                    I received your inquiry. I will get back to you soon!
                                </p>

                                <button
                                    className="mt-3 bg-black text-white py-2 px-4 rounded-lg"
                                    onClick={() => setOpen(false)}
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
