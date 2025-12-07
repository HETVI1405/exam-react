export default function PortfolioFeatures() {
  const features = [
    {
      icon: "ri-arrow-right-up-line",
      title: "Invest any amount",
      desc: "Whether it’s $1 or $1,000,000, we can put your money to work for you.",
    },
    {
      icon: "ri-file-list-3-line",
      title: "Build a balanced portfolio",
      desc: "Invest in different industries to find the most opportunities to win huge.",
    },
    {
      icon: "ri-time-line",
      title: "Trade in real-time",
      desc: "Get insider tips on big stock moves and act on them within seconds.",
    },
    {
      icon: "ri-group-line",
      title: "Profit from your network",
      desc: "Invite new insiders to get tips faster and beat even other Pocket users.",
    },
    {
      icon: "ri-lock-line",
      title: "Encrypted and anonymized",
      desc: "Cutting-edge security technology that even the NSA doesn’t know about keeps you hidden.",
    },
    {
      icon: "ri-bar-chart-2-line",
      title: "Portfolio tracking",
      desc: "Watch your investments grow exponentially, leaving other investors in the dust.",
    },
  ];

  return (
    <section className="px-6 md:px-10 lg:px-20 py-24 bg-white">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Now is the time to build your portfolio.
        </h2>
        <p className="text-gray-500 mt-4 text-base md:text-lg leading-relaxed">
          With typical market returns, you have to start young to secure your future.  
          <br className="hidden sm:block" />
          With Pocket, it’s never too late to build your nest egg.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition bg-white"
          >
            <i className={`${item.icon} text-3xl text-gray-700 mb-4`}></i>

            <h3 className="text-base py-1 font-semibold text-gray-900">
              {item.title}
            </h3>

            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
