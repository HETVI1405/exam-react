import React from "react";
import { useState } from "react";

export default function FeaturesSection() {
    const [active, setActive] = useState(1);
  return (
    <section id="Features" className=" bg-[#0a0a0a] text-white pt-20  px-6 md:px-8 lg:py-30">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-xl lg:text-[31px] md:text-4xl font-semibold leading-snug">
          Every feature you need to win. Try it for yourself.
        </h2>
        <p className="mt-4 text-gray-200 max-w-2xl text-sm lg:text-lg">
          Pocket was built for investors like you who play by their own rules and
          aren’t going to let SEC regulations get in the way of their dreams. If
          other investing tools are afraid to build it, Pocket has it.
        </p>

      <div className="mx-auto max-w-7xl px-6 py-30 gap-60 lg:grid lg:grid-cols-2 lg:gap-12">

        {/* LEFT CONTENT */}
     

          <div className="relative w-full flex justify-center  ">

        

          {/* ✅ THIN ROTATING LOADING BORDER */}
          <div
            className="      absolute 
                w-[259px] h-[259px] 
                md:w-[380px] md:h-[380px] 
                lg:w-[580px] lg:h-[580px]
                rounded-full  top-[-80px]
                border-t-2 border-b-2 border-sky-400 border-l-gray-600 border-r-gray-600
                animate-[spin_20s_linear_infinite]"
            style={{
              // background: "conic-gradient(#2563eb 9deg, transparent 120deg)",
            }}
          ></div>

          {/* ✅ INNER CIRCLE HOLDER */}
          <div className="relative w-[299px] h-[399px] rounded-full sm:w-[600px] sm:h-[600px] flex justify-center items-center top-[90px]">

            {/* PHONE IMAGE */}
      <div className="img relative mx-auto mt-[-10px] w-[280px] h-[590px] sm:w-[360px] sm:h-[520px] md:w-[480px] md:h-[650px] lg:w-[600px] lg:h-[780px] bg-center bg-cover">

  {/* INNER SCREEN */}
 <div
  className="
    absolute 
    bg-white shadow-xl overflow-hidden rounded-md

    /* MOBILE */
    top-[11%] left-1/2 -translate-x-1/2 w-[88%] h-[76.5%]

    /* TABLET */
    sm:top-[10%] sm:w-[58%] sm:h-[78%]

    /* LARGE SCREENS (YOUR ORIGINAL VALUES) */
    lg:top-[11%] lg:left-[22%] lg:translate-x-0 lg:w-[56%] lg:h-[76%]
  "
>


    <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-white"></div>

{/* PHONE INNER CONTENT — SWITCHING BASED ON ACTIVE */}

 {/* NAVBAR – always visible */}
<nav className="w-full bg-black px-6 py-4 flex items-center justify-between">
  {/* Left Logo */}
  <div className="flex items-center gap-2">
    <img
      src="https://avatars.githubusercontent.com/u/1239616?v=4"
      alt="logo"
      className="w-9 h-9 rounded-full border border-white/20"
    />
    <span className="text-white font-semibold text-lg">Pocket</span>
  </div>

  {/* Right Toggle Button */}
  <button className="text-white text-2xl">
    <i className="ri-menu-line"></i>
  </button>
</nav>

{/* CONTENT */}
<div className="p-6 bg-white rounded-b-2xl shadow-lg">

  {active === 1 && (
    <>
      <h2 className="text-2xl font-bold text-gray-900">Invite people</h2>
      <p className="text-gray-500 mt-1">
        Get tips <span className="text-blue-500 font-semibold">5s sooner</span> for every invite.
      </p>

      <div className="mt-8">
        <label className="text-gray-500 text-sm">Full name</label>
        <p className="text-gray-900 mt-1 border-b pb-2">Albert H. Wiggin</p>

        <label className="text-gray-500 text-sm mt-6 block">Email address</label>
        <p className="text-gray-900 mt-1 border-b pb-2">awiggin@chase.com</p>
      </div>
    </>
  )}

  {active === 2 && (
    <>
      <h2 className="text-2xl font-bold text-gray-900">Stocks</h2>
      <p className="text-gray-500 text-sm mt-1">March 9, 2022</p>

      <div className="mt-6 space-y-5">

        {/* ITEM 1 */}
        <div className="flex items-center justify-between py-3 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500">
              <i className="ri-heart-line text-white text-xl"></i>
            </div>
            <span className="text-gray-900 font-medium">Laravel</span>
          </div>

          <div className="text-right">
            <p className="text-gray-900 font-semibold">4,098.01</p>
            <p className="text-green-500 text-sm font-semibold">+4.98%</p>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="flex items-center justify-between py-3 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-violet-500">
              <i className="ri-layout-line text-white text-xl"></i>
            </div>
            <span className="text-gray-900 font-medium">Tuple</span>
          </div>

          <div className="text-right">
            <p className="text-gray-900 font-semibold">5,451.10</p>
            <p className="text-red-500 text-sm font-semibold">-3.38%</p>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="flex items-center justify-between py-3 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600">
              <i className="ri-focus-2-line text-white text-xl"></i>
            </div>
            <span className="text-gray-900 font-medium">Transistor</span>
          </div>

          <div className="text-right">
            <p className="text-gray-900 font-semibold">4,098.41</p>
            <p className="text-green-500 text-sm font-semibold">+6.25%</p>
          </div>
        </div>

        {/* ITEM 4 */}
        <div className="flex items-center justify-between py-3 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-700">
              <i className="ri-flask-line text-white text-xl"></i>
            </div>
            <span className="text-gray-900 font-medium">Diageo</span>
          </div>

          <div className="text-right">
            <p className="text-gray-900 font-semibold">250.65</p>
            <p className="text-green-500 text-sm font-semibold">+1.25%</p>
          </div>
        </div>

      </div>
    </>
  )}

  {active === 3 && (
    <>
      <h2 className="text-2xl font-bold text-gray-900">Buy $LA</h2>
      <p className="text-blue-500 font-medium mt-1">
        $34.28 <span className="text-gray-500 font-normal">per share</span>
      </p>

      <div className="mt-6 space-y-6">
        <div className="flex items-center justify-between border-b pb-3">
          <span className="text-gray-500 text-sm">Number of shares</span>
          <span className="text-gray-900 font-medium">100</span>
        </div>

        <div className="flex items-center justify-between border-b pb-3">
          <span className="text-gray-500 text-sm">Current market price</span>
          <span className="text-gray-900 font-medium flex items-center gap-1">
            $34.28
            <i className="ri-arrow-up-line text-blue-500 text-lg"></i>
          </span>
        </div>

        <div className="flex items-center justify-between border-b pb-3">
          <span className="text-gray-500 text-sm">Estimated cost</span>
          <span className="text-gray-900 font-medium">$3,428.00</span>
        </div>

        <button className="w-full bg-[#00C4E4] text-white py-3 rounded-lg font-semibold text-sm mt-4">
          Buy shares
        </button>
      </div>
    </>
  )}

</div>

</div>

  </div>


           

          </div>
        </div>



        {/* ✅ RIGHT — FULL PHONE + BIG ROUND + THIN LOADING BORDER */}
         <div className="flex flex-col justify-center mt-[-90px]">
          
 <div className="mt-16 grid md:grid-cols-2 gap-60 items-center">
        
          </div>

          {/* Features List */}
    <div className="mt-50 lg:mt-0">

  {/* MOBILE SLIDER CONTAINER */}
  <div className="
      flex gap-5 overflow-x-auto px-2 
      scrollbar-none
      lg:block lg:space-y-18
     
  "
  >
    {/* Card 1 */}
    <div
      onClick={() => setActive(1)}
      className={`
        min-w-[280px] lg:min-w-0
        card rounded-2xl p-10 px-12 cursor-pointer transition-all
        ${active === 1
          ? "bg-[rgba(2, 2, 2, 1)] text-white  border-1 shadow-xl"
          : "bg-[rgba(186, 181, 181, 1)] text-gray-300"}
      `}
    >
      <i className="ri-user-shared-2-line text-2xl py-4"></i>
      <h3 className="text-xl font-semibold">Invite friends for better returns</h3>
      <p className="mt-2 text-sm">
        For every friend you invite to Pocket, you get insider notifications 5 seconds sooner.
      </p>
    </div>

    {/* Card 2 */}
    <div
      onClick={() => setActive(2)}
      className={`
        min-w-[280px] lg:min-w-0
        card rounded-2xl p-10 px-14 cursor-pointer transition-all
        ${active === 2
          ? "bg-[rgba(2, 2, 2, 1)] text-white border-1  shadow-xl"
          : "bg-[rgba(186, 181, 181, 1)] text-gray-300"}
      `}
    >
      <i className="ri-notification-3-line text-2xl py-4"></i>
      <h3 className="text-xl font-semibold">Notifications on stock dips</h3>
      <p className="mt-2 text-sm">
        Get a push notification every time something lowers your share price.
      </p>
    </div>

    {/* Card 3 */}
    <div
      onClick={() => setActive(3)}
      className={`
        min-w-[280px] lg:min-w-0
        card rounded-2xl p-10 px-14 cursor-pointer transition-all
        ${active === 3
          ? "bg-[bg-[rgba(2, 2, 2, 1)] text-white border-1 shadow-xl"
          : "bg-[rgba(186, 181, 181, 1)] text-gray-300"}
      `}
    >
      <i className="ri-funds-line text-2xl py-4"></i>
      <h3 className="text-xl font-semibold">Invest what you want</h3>
      <p className="mt-2 text-sm">
        We hide your stock purchases behind thousands of anonymous accounts.
      </p>
    </div>

  </div>
</div>

        </div>
          
          
        </div>
      </div>
       
  
    </section>
  );
}

