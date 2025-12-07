import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState(null); // { type: "success" | "error", message: "" }

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 2000);
  };

  const validateEmail = (email) => {
    return /^\S+@\S+\.\S+$/.test(email);
  };

  const handleSubmit = () => {
    if (!email) {
      showToast("error", "Please enter email!");
      return;
    }

    if (!validateEmail(email)) {
      showToast("error", "Invalid email!");
      return;
    }

    showToast("success", "Subscribed successfully!");
    setEmail("");
  };

  const scrollToSection = (id) => {
    const card = document.getElementById(id);
    if (!card) return;

    card.scrollIntoView({ behavior: "smooth", block: "center" });

    card.classList.add("highlight-zoom");
    setTimeout(() => card.classList.remove("highlight-zoom"), 1000);
  };

  return (
    <>
      {/* TOAST */}
      {toast && (
        <div className={`toast ${toast.type === "error" ? "error" : ""}`}>
          {toast.message}
        </div>
      )}

      <footer className="w-full bg-white border-t">
        {/* TOP SECTION */}
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#00C4E4] flex items-center justify-center text-white text-xl font-bold">
                <span className="rotate-180">❘</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Pocket</h2>
                <p className="text-gray-500 text-sm">
                  Invest at the perfect time.
                </p>
              </div>
            </div>

            {/* LINKS */}
            <div className="flex flex-wrap gap-6 mt-10 text-gray-700 font-medium text-sm">
              <span className="hover:text-black cursor-pointer" onClick={() => scrollToSection("Features")}>Features</span>
              <span className="hover:text-black cursor-pointer" onClick={() => scrollToSection("Reviews")}>Reviews</span>
              <span className="hover:text-black cursor-pointer" onClick={() => scrollToSection("Pricing")}>Pricing</span>
              <span className="hover:text-black cursor-pointer" onClick={() => scrollToSection("FAQs")}>FAQs</span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center md:justify-end justify-start gap-6">
            <img src="/Qr.png" alt="QR Code" className="w-20 h-20 p-2 shadow" />
            <div>
              <h3 className="text-lg font-semibold">Download the app</h3>
              <p className="text-gray-500 text-sm mt-1">
                Scan the QR code to download the app.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t"></div>

        {/* BOTTOM SECTION */}
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © Copyright 2025. All rights reserved.
          </p>

          {/* NEWSLETTER */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-72 px-4 py-3 rounded-lg border outline-none text-sm"
            />
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-[#00C4E4] text-white rounded-lg text-sm font-semibold"
            >
              Join
            </button>
          </div>

        </div>
      </footer>
    </>
  );
}
