
import React, { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    const path = document.getElementById("graphPath");
    if (path) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;

      setTimeout(() => {
        path.style.transition = "stroke-dashoffset 3s ease";
        path.style.strokeDashoffset = "0";
      }, 100);
    }
  }, []);

  return (
    <section className="relative overflow-hidden mt-30">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:grid lg:grid-cols-2 lg:gap-12">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center mt-[-20px]">
          <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl lg:text-[40px]">
            Invest at the perfect time.
          </h1>

          <p className="mt-6 text-xl text-gray-600">
            By leveraging insights from our network of industry insiders, you’ll
            know exactly when to buy to maximize profit, and exactly when to sell
            to avoid painful losses.
          </p>
                    <div className="mt-8 flex flex-wrap gap-5">
            <button className="px-2 py-2 bg-black text-white rounded-xl font-semibold shadow flex items-center gap-3 hover:bg-gray-900 transition">
              <i className="ri-apple-fill text-[22px]"></i>
              <div className="leading-tight  cursor-pointer">
                <p className="text-[10px]">Download on the</p>
                <p className="text-md">App Store</p>
              </div>
            </button>
<a href="https://youtu.be/dQw4w9WgXcQ?si=mNB6P0110ria29oz">
            <button className="flex items-center  text-sm gap-2 text-gray-400 font-semibold border-1 rounded-xl px-3 py-1 hover:bg-gray-100 transition hover:text-gray-700  cursor-pointer">
              <i className="ri-play-circle-fill text-xl"></i>
              Watch the video
            </button></a>
          </div>

            {/* Logos */}
          <div className="mt-14">
            <p className="text-sm font-semibold text-black">As featured in</p>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 opacity-70">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc3Zz8JAQge_hK52aNOSFTakezgALY6W1xIA&s"
                className="h-12 w-full object-contain" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJArIQxpjHCo-emAXhrMcINduRWNkxR0hcyw&s"
                className="h-12 w-full object-contain" />
              <img src="https://cdn.shopify.com/s/files/1/0592/5965/0115/files/wired_f32c4d4c-731a-4f62-ba4f-fb3a5ada1ed3.png?v=1731088080"
                className="h-12 w-full object-contain" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYu_LQJkR_3BCPgCB4wfHlE0rNYbS3jOeWVg&s"
                className="h-12 w-full object-contain" />
              <img src="https://www.pngall.com/wp-content/uploads/15/BBC-Logo.png"
                className="h-12 w-full object-contain" />
              <img src="https://aaronscottyoung.com/wp-content/uploads/2016/07/CBS-logo-grey-300x300.png"
                className="h-12 w-full object-contain" />
              <img src="https://wallpapers.com/images/hd/fast-company-logo-gray-52eyd0c98gn4zuk7-2.jpg"
                className="h-12 w-full object-contain" />
              <img src="https://jackiebledsoe.com/wp-content/uploads/2018/04/HuffPost-gray-logo-transparent.png"
                className="h-12 w-full object-contain" />
            </div>
          </div>
          
        </div>
        


        {/* ✅ RIGHT — FULL PHONE + BIG ROUND + THIN LOADING BORDER */}
        <div className="relative w-full flex justify-center items-center ">

          {/* ✅ EXTRA BIG STATIC OUTER RING */}
          <div className="  top-[-80px]
 delay-[90sec] 
  absolute 
                w-[0px] h-[0px] 
                md:w-[480px] md:h-[480px] 
                lg:w-[810px] lg:h-[810px]
                rounded-full 
                border-t-2 border-b-2 border-sky-400 border-l-gray-600 border-r-gray-600
                animate-[spin_20s_linear_infinite]
 
 
 "></div>

          {/* ✅ THIN ROTATING LOADING BORDER */}
          <div
            className=" top-[-10px]  
  absolute 
                w-[0px] h-[0px] 
                md:w-[380px] md:h-[380px] 
                lg:w-[680px] lg:h-[680px]
                rounded-full 
                border-t-2 border-b-2 border-sky-400 border-l-gray-600 border-r-gray-600
                animate-[spin_20s_linear_infinite]"
            style={{
              // background: "conic-gradient(#2563eb 9deg, transparent 120deg)",
            }}
          ></div>

          {/* ✅ INNER CIRCLE HOLDER */}
          <div className="relative w-[699px] h-[699px] rounded-full  flex justify-center items-center ">

            {/* ✅ PHONE (NOW FULLY VISIBLE) */}
           
           <div className="img relative mx-auto mt-20 w-[280px] h-[400px] sm:w-[490px] sm:h-[620px] md:w-[480px] md:h-[650px] lg:w-[600px] lg:h-[780px] bg-center bg-cover">

  {/* INNER SCREEN */}
  <div className="absolute top-[11%] sm:top-[11%] left-[22%] w-[56%] h-[76%] bg-white shadow-xl overflow-hidden rounded-md">

    <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-white"></div>

    <div className="bg-black text-white py-2 px-3 flex justify-between items-center relative z-10">
      <span className="font-semibold text-sm sm:text-base"><i class="ri-menu-line"></i></span>
      <span><img src="https://avatars.githubusercontent.com/u/1239616?v=4" alt="" className="h-10"/><span></span></span>
      <span><i className="ri-user-line text-lg sm:text-xl"></i></span>
    </div>

    <div className="p-3 sm:p-4 relative z-10 rounded-md">
      <p className="text-2xl sm:text-3xl font-bold text-gray-900">
        752.56 <span className="text-xs sm:text-sm">USD</span>
      </p>
      <p className="text-xs sm:text-sm text-blue-600 font-semibold mt-1">+12.21%</p>

      <svg className="mt-4 w-full h-32 sm:h-40" viewBox="0 0 300 100">
        <path
          id="graphPath"
          d="M0 80 L20 70 L40 75 L60 40 L80 60 L100 50 L120 55 L140 20 L160 35 L180 30 L200 45 L220 38 L240 60 L260 55 L280 70 L300 50"
          stroke="#42C9FF"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <button className="mt-4 w-full py-2 sm:py-3 rounded-xl bg-blue-300 font-bold text-white shadow">
        Trade
      </button>
    </div>

  </div>

</div>


          </div>
        </div>

      </div>
            {/* iOS Style Bottom Glow Gradient */}
<div className="absolute bottom-0 right-19 w-[600px] h-[790px] pointer-events-none 
bg-gradient-to-b from-transparent via-white/70 to-white blur-[6px]"></div>
    </section>
  );
}
