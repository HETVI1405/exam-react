import React from "react";

export default function ReviewColumns() {
  const reviews = [
    "This app completely changed the way I invest. The tips are accurate, simple to follow, and super helpful.",
    "I joined without expecting much, but the results were surprising. Pocket helped me understand investing easily.",
    "The best financial tool I’ve used so far. The interface is clean, and the insights are actually useful.",
    "Highly impressed! The app is easy to navigate, and the tips have genuinely improved my returns.",
    "Pocket gave me the confidence to start investing. The guidance is clear and perfect for beginners.",
    "The auto tips are amazing. I get updates every few minutes and they always make sense.",
    "I’ve recommended Pocket to all my friends. It’s reliable, fast, and totally worth it!",
    "Really smooth experience. The app feels premium and the advice is actually practical.",
  ];

  const columns = [
    reviews.slice(0, 2),
    reviews.slice(2, 4),
    reviews.slice(4, 6),
    reviews.slice(6, 8),
  ];

  return (
    <section id="Reviews" className="w-full bg-[#f7f8fa] py-20 px-6 mx-auto max-w-5xl">
      <h2 className="text-xl md:text-2xl font-semibold text-center">
        Everyone is changing their life with Pocket.
      </h2>
      <p className="text-gray-500 text-center mt-2 mb-10">
        Thousands of people doubled their net-worth in the last 30 days.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-14">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="h-[500px] overflow-hidden relative">
            <div className="animate-scrollColumn space-y-6">
              {[...col, ...col].map((review, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-2xl shadow-md"
                >
                  <div className="text-blue-400 text-base mb-2">★★★★★</div>

                  {/* Smaller font + 3–4 line text */}
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                    {review}
                  </p>

                  <p className="text-gray-500 text-xs mt-3">
                    — User {index + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
