import React from 'react'

export default function Discount() {
  return (
    <div className='bg-black h-full flex items-center justify-center '>
        
          <div className="relative w-full flex justify-center  ">

        

          {/* ✅ THIN ROTATING LOADING BORDER */}
          <div
            className="      absolute 
                w-[0px] h-[0px] 
                md:w-[450px] md:h-[450px] 
                lg:w-[599px] lg:h-[599px]
                rounded-full 
                border-t-2 border-b-2 border-sky-400 border-l-gray-600 border-r-gray-600
                animate-[spin_20s_linear_infinite]"
            style={{
              // background: "conic-gradient(#2563eb 9deg, transparent 120deg)",
            }}
          ></div>

          {/* ✅ INNER CIRCLE HOLDER */}
          <div className="relative w-[699px] h-[699px] rounded-full sm:w-[600px] sm:h-[600px] flex justify-center items-center ">

           <section
  className="
    relative w-full min-h-[30vh] md:min-h-[50vh]
    md:w-[90%] 
    bg-black text-white overflow-hidden 
    flex flex-col items-center justify-center 
    px-4 sm:px-6 md:px-10 py-9 md:py-19
     rounded-full
  "
>
{/* Big radial gradient circle */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none  rounded-full">
<div className="w-[1000px] h-[1200px] rounded-full bg-gradient-to-b rounded-full from-[#1d1d1d] to-transparent opacity-30"></div>
</div>


<div className="relative max-w-3xl text-center z-10  rounded-full">
<h1 className="text-xl md:text-4xl font-semibold leading-tight">
Get your first tips today
</h1>


<p className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed">
It takes 30 seconds to sign up. Download the app and create an account today
and we’ll send you a tip guaranteed to double your first investment.
</p>


<div className="mt-10 flex justify-center">
<button className="flex items-center gap-3 bg-white text-black px-2 py-1 rounded-xl shadow-lg hover:scale-105 transition">
<img
src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
className="w-6"
/>
<div className="text-left  leading-tight  cursor-pointer">
<p className="text-xs">Download on the</p>
<p className="text-lg font-semibold -mt-1">App Store</p>
</div>
</button>
</div>
</div>
</section>

    
           

          </div>
        </div>


    </div>
  )
}
