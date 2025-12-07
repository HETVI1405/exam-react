export default function FAQSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-white" id="FAQs">
      {/* Heading */}
      <div className="w-full mx-auto ">
        <h2 className="text-3xl md:text-3xl font-semibold text-gray-900">
          Frequently asked questions
        </h2>
        <p className="text-gray-500 mt-3">
          If you have anything else you want to ask,{" "}
          <a href="#" className="underline text-black">
            reach out to us
          </a>
          .
        </p>
      </div>

      {/* FAQ GRID */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* 1 */}
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            How do I know the tips are good?
          </h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            Our whole business depends on our tips being good, so it’s in our best
            interest that they are. The results of our customers speak for
            themselves, just trust us.
          </p>
        </div>

        {/* 2 */}
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            Do the people giving you tips realize what they are doing?
          </h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            This isn’t really our responsibility. People make their own choices.
            If they don’t research the consequences that’s on them, not on us.
          </p>
        </div>

        {/* 3 */}
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            How did you get this on the App Store?
          </h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            Honestly we were surprised too, but eventually we found out that the
            app reviewer loved it so much they approved it.
          </p>
        </div>

        {/* 4 */}
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            Isn’t this insider trading?
          </h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            Yes exactly. But at scale! Historically you could only make insider
            trades with knowledge from your direct network. Pocket brings you
            tips from people you don’t know.
          </p>
        </div>

        {/* 5 */}
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            Where is Pocket based?
          </h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            Let’s just say it’s not somewhere the SEC is going to find us.
          </p>
        </div>

        {/* 6 */}
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            How do I explain the money I withdraw from Pocket to the IRS?
          </h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            This feels like completely your problem. Pocket is not responsible
            for your tax returns.
          </p>
        </div>

        {/* 7 */}
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            But isn’t insider trading illegal?
          </h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            Here’s the thing: you’re the one doing the insider trading, not us.
            We’re just giving tips and tools. We’re not doing anything wrong.
          </p>
        </div>

        {/* 8 */}
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            Is there any age limit to trading on Pocket?
          </h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            Our free plan follows your country's age limit. VIP plan uses
            anonymization, so you can use it even if you're 9 years old. Or a
            dog.
          </p>
        </div>

        {/* 9 */}
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            How do I become an insider?
          </h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            Contact us with your industry details and what access you have. Once
            approved, we’ll send a guide on collecting insider information.
          </p>
        </div>

      </div>
    </section>
  );
}
