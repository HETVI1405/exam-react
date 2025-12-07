import { useState } from "react";

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  const price = {
    monthly: { starter: 0, investor: 7, vip: 199 },
    annually: { starter: 0, investor: 70, vip: 1990 },
  };

  const [openModal, setOpenModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  // FORM STATE
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // HANDLE FORM INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // FORM VALIDATION
  const validate = () => {
    let temp = {};
    if (!form.fname) temp.fname = "First name is required";
    if (!form.lname) temp.lname = "Last name is required";
    if (!form.email) temp.email = "Email is required";
    if (!form.password) temp.password = "Password is required";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    alert(`Successfully subscribed to the ${selectedPlan} plan!`);
    setOpenModal(false);
    setForm({ fname: "", lname: "", email: "", password: "" });
  };

  // OPEN MODAL FUNCTION
  const onSubscribe = (plan) => {
    setSelectedPlan(plan);
    setOpenModal(true);
  };

  return (
    <section className="w-full bg-[#f7f8fa] py-16 px-6" id
    ="Pricing">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold">Flat pricing, no management fees.</h2>
        <p className="text-gray-500 mt-2">
          Whether you're one person or a big firm, we've got a plan for you.
        </p>
      </div>

      {/* Toggle */}
      <div className="flex justify-center mt-8">
        <div className="flex bg-white border rounded-lg shadow-sm overflow-hidden">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-5 py-2 text-sm font-medium ${
              billing === "monthly" ? "bg-[#00bcd4] text-white" : "text-gray-700"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setBilling("annually")}
            className={`px-5 py-2 text-sm font-medium ${
              billing === "annually" ? "bg-[#00bcd4] text-white" : "text-gray-700"
            }`}
          >
            Annually
          </button>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-14">

        {/* Starter */}
        <div className="bg-white p-5 rounded-2xl shadow-md">
          <h3 className="text-gray-900 font-semibold">Starter</h3>
          <p className="text-4xl font-bold mt-4">
            ${price[billing].starter}
          </p>
          <p className="text-gray-500 text-sm mt-2">Best for beginners.</p>
          <ul className="mt-6 space-y-4 text-sm text-gray-700"> <li className="flex items-center gap-2"> <i class="ri-checkbox-circle-line"></i>Commission-free trading </li> <li className="flex items-center gap-2"> <i class="ri-checkbox-circle-line"></i>Multi-layered encryption </li> <li className="flex items-center gap-2"> <i class="ri-checkbox-circle-line"></i>One tip every day </li> <li className="flex items-center gap-2"> <i class="ri-checkbox-circle-line"></i> Invest up to $1,500 / month </li> </ul>
          <button
            onClick={() => onSubscribe("Starter")}
            className="w-full py-3 mt-6 bg-black text-white rounded-lg"
          >
            Get started for free
          </button>
        </div>

        {/* Investor */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h3 className="text-gray-900 font-semibold">Investor</h3>
          <p className="text-4xl font-bold mt-4">${price[billing].investor}</p>
          <p className="text-gray-500 text-sm mt-2">For growing investors.</p>
          <ul className="mt-6 space-y-4 text-sm text-gray-700"> <li className="flex items-center gap-2"> <i class="ri-checkbox-circle-line"></i> Commission-free trading </li> <li className="flex items-center gap-2"> <i class="ri-checkbox-circle-line"></i> Multi-layered encryption </li> <li className="flex items-center gap-2"> <i class="ri-checkbox-circle-line"></i> One tip every hour </li> <li className="flex items-center gap-2"> <i class="ri-checkbox-circle-line"></i> Invest up to $15,000 / month </li> <li className="flex items-center gap-2"> <i class="ri-checkbox-circle-line"></i> Basic transaction anonymization </li> </ul>
          <button
            onClick={() => onSubscribe("Investor")}
            className="w-full py-3 mt-6 bg-black text-white rounded-lg"
          >
            Subscribe
          </button>
        </div>

        {/* VIP */}
        <div className="bg-black text-white p-8 rounded-2xl shadow-xl">
          <h3 className="font-semibold">VIP</h3>
          <p className="text-4xl font-bold mt-4">${price[billing].vip}</p>
          <p className="text-gray-300 text-sm mt-2">For high-value investors.</p>
          <ul className="mt-6 space-y-4 text-sm"> <li className="flex items-center gap-2"><i class="ri-checkbox-circle-line"></i> Commission-free trading</li> <li className="flex items-center gap-2"><i class="ri-checkbox-circle-line"></i> Multi-layered encryption</li> <li className="flex items-center gap-2"><i class="ri-checkbox-circle-line"></i> Real-time notifications</li> <li className="flex items-center gap-2"><i class="ri-checkbox-circle-line"></i> No investment limits</li> <li className="flex items-center gap-2"><i class="ri-checkbox-circle-line"></i> Advanced anonymization</li> <li className="flex items-center gap-2"> <i class="ri-checkbox-circle-line"></i> Automated tax-loss harvesting </li> </ul>
          <button
            onClick={() => onSubscribe("VIP")}
            className="w-full py-3 mt-6 bg-[#00bcd4] rounded-lg"
          >
            Subscribe
          </button>
        </div>

      </div>

      {/* ---------------- MODAL ---------------- */}
      {openModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999] px-4">
          <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl relative">

            <button
              className="absolute top-4 right-4 text-gray-600 text-xl"
              onClick={() => setOpenModal(false)}
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold text-center">Sign up for {selectedPlan}</h2>

            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="fname"
                    placeholder="First name"
                    className="w-full border rounded-lg p-3"
                    value={form.fname}
                    onChange={handleChange}
                  />
                  {errors.fname && <p className="text-red-500 text-sm">{errors.fname}</p>}
                </div>

                <div>
                  <input
                    type="text"
                    name="lname"
                    placeholder="Last name"
                    className="w-full border rounded-lg p-3"
                    value={form.lname}
                    onChange={handleChange}
                  />
                  {errors.lname && <p className="text-red-500 text-sm">{errors.lname}</p>}
                </div>
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full border rounded-lg p-3 mt-4"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full border rounded-lg p-3 mt-4"
                value={form.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

              <div className="flex items-center justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="px-6 py-3 bg-gray-200 rounded-lg"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-3 bg-[#00bcd4] text-white rounded-lg"
                >
                  Get started today
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </section>
  );
}
