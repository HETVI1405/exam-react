
'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
  { name: 'Features', href: '#Features' },
  { name: 'Reviews', href: '#Reviews' },
  { name: 'Pricing', href: '#Pricing' },
  { name: 'FAQs', href: '#FAQs' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false);
  // STATES
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState({});
const [success, setSuccess] = useState(false);

const handleSubmit = () => {
  const newErrors = {};

  // Email validation
  if (!email.trim()) {
    newErrors.email = "Email is required.";
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    newErrors.email = "Enter a valid email.";
  }

  // Password validation
  if (!password.trim()) {
    newErrors.password = "Password is required.";
  } else if (password.length < 6) {
    newErrors.password = "Password must be at least 6 characters.";
  }

  setErrors(newErrors);

  // If errors → STOP
  if (Object.keys(newErrors).length > 0) {
    setSuccess(false);
    return;
  }

  // If no errors → SUCCESS
  setSuccess(true);

  // Clear fields after success (optional)
  setEmail("");
  setPassword("");

  // Close popup after 1.5 seconds
  setTimeout(() => {
    setLoginOpen(false);
    setSuccess(false);
  }, 1500);
};



  return (
    <div className="text-black">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-2">
          
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img src="/logo.png" className="h-14 w-auto" alt="Logo" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
            >
              <Bars3Icon className="size-6" />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:gap-x-6 hidden lg:flex lg:gap-x-3 lg:ml-[-460px]">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-md text-gray-700 hover:text-black px-3 py-2 rounded-md hover:bg-gray-100 transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a 
  onClick={() => setLoginOpen(true)}
  className="cursor-pointer text-sm px-4 py-2 border border-gray-400 hover:bg-gray-100 hover:border-black rounded-lg mr-4"
>
  Log in
</a>

         <a
  href="#"
  className="cursor-pointer text-sm px-4 py-2 border border-gray-400 rounded-lg bg-black text-white hover:bg-gray-900 transition"
>
  Download
</a>
          </div>
        </nav>
        {/* LOGIN MODAL */}
<Dialog open={loginOpen} onClose={setLoginOpen} className="relative z-[999]">
  <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

  <div className="fixed inset-0 flex items-center justify-center p-4">
    <DialogPanel className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl relative">

      {/* CROSS BUTTON */}
      <button
        onClick={() => setLoginOpen(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black"
      >
        <i className="ri-close-line text-2xl"></i>
      </button>

      {/* Logo */}
      <div className="flex justify-center mb-4">
        <img src="/logo.png" className="h-12" />
      </div>

      <h2 className="text-center text-2xl font-semibold">Sign in to account</h2>

      <p className="text-center text-gray-500 mt-1 text-sm">
        Don’t have an account?
        <span className="text-sky-500 cursor-pointer"> Sign up</span> for a free trial.
      </p>

      {/* ---- FORM ---- */}
      <div className="mt-8 space-y-4">

        {/* EMAIL FIELD */}
        <div>
          <label className="text-sm font-medium">Email address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className={`mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 
              ${errors.email ? "border-red-500 focus:ring-red-400" : "focus:ring-sky-500"}`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* PASSWORD FIELD */}
        <div>
          <label className="text-sm font-medium">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className={`mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 
              ${errors.password ? "border-red-500 focus:ring-red-400" : "focus:ring-sky-500"}`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-[#03b5d1] text-white rounded-lg font-semibold hover:bg-[#04a0ba]"
        >
          Sign in to account
        </button>

        {/* SUCCESS MESSAGE */}
        {success && (
          <p className="text-green-600 text-center font-medium mt-2">
             Successfully logged in!
          </p>
        )}
      </div>

    </DialogPanel>
  </div>
</Dialog>


        {/* MOBILE MENU */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/30" />

          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm p-6 overflow-y-auto bg-white shadow-xl">
            
            {/* Top Section */}
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img src="/logo.png" className="h-10 w-auto" alt="Logo" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-black"
              >
                {/* <XMarkIcon className="size-6" /> */}
                <i className="ri-arrow-down-s-line sixe-9"  style={{fontSize:"30px"}}></i>
              </button>
            </div>

            {/* Menu Items */}
            <div className="mt-6 space-y-2 ">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-black hover:bg-gray-100"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Login Button */}
            <div className="mt-6"> 
                    <a 
  onClick={() => setLoginOpen(true)}
  className="cursor-pointer text-sm px-9 py-2 border border-gray-400 hover:bg-gray-100 hover:border-black rounded-lg mr-4"
>log in</a>
               <a
                href="#"
                className="block  cursor-pointer rounded-lg px-3 py-2 text-base font-semibold text-white bg-black border border-gray-300 mt-3"
              >
                Download
              </a>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  )
}
