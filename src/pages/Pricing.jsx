function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "14.99",
      highlighted: false,
      features: [
        { text: "Free Setup", active: true },
        { text: "Bandwidth Limit 10 GB", active: true },
        { text: "20 User Connection", active: true },
        { text: "Analytics Report", active: false },
        { text: "Public API Access", active: false },
        { text: "Plugins Integration", active: false },
        { text: "Custom Content Management", active: true },
      ],
    },
    {
      name: "Standard",
      price: "49.99",
      highlighted: false,
      features: [
        { text: "Free Setup", active: true },
        { text: "Bandwidth Limit 10 GB", active: true },
        { text: "20 User Connection", active: true },
        { text: "Analytics Report", active: true },
        { text: "Public API Access", active: false },
        { text: "Plugins Integration", active: true },
        { text: "Custom Content Management", active: true },
      ],
    },
    {
      name: "Premium",
      price: "89.99",
      highlighted: true,
      features: [
        { text: "Free Setup", active: true },
        { text: "Bandwidth Limit 10 GB", active: true },
        { text: "20 User Connection", active: true },
        { text: "Analytics Report", active: true },
        { text: "Public API Access", active: true },
        { text: "Plugins Integration", active: true },
        { text: "Custom Content Management", active: true },
      ],
    },
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#f5f6fa] px-2 py-4 sm:px-4 sm:py-6">
      {/* Page Title */}
      <h1 className="mb-5 text-2xl font-semibold text-[#151d2e]">
        Pricing
      </h1>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="relative flex min-h-[620px] flex-col overflow-hidden rounded-xl border border-gray-100 bg-white px-7 py-6 shadow-sm"
          >
            {/* Background pattern */}
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="absolute -left-10 top-0 h-32 w-72 rounded-full border border-gray-100" />
              <div className="absolute -right-16 top-20 h-40 w-72 rounded-full border border-gray-100" />
              <div className="absolute -left-20 top-52 h-48 w-80 rounded-full border border-gray-100" />
              <div className="absolute right-[-80px] bottom-20 h-56 w-80 rounded-full border border-gray-100" />
              <div className="absolute -left-16 bottom-0 h-40 w-72 rounded-full border border-gray-100" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col">
              {/* Plan Name */}
              <h2 className="text-center text-lg font-medium text-[#202020]">
                {plan.name}
              </h2>

              <p className="mt-1 text-center text-xs text-gray-500">
                Monthly Charge
              </p>

              {/* Price */}
              <div className="mt-2 text-center">
                <span className="text-3xl font-semibold text-[#477df7]">
                  ${plan.price}
                </span>
              </div>

              {/* Divider */}
              <div className="my-7 border-t border-gray-100" />

              {/* Features */}
              <div className="flex flex-1 flex-col items-center gap-5">
                {plan.features.map((feature) => (
                  <p
                    key={feature.text}
                    className={`text-center text-sm ${
                      feature.active
                        ? "text-[#252525]"
                        : "text-gray-300"
                    }`}
                  >
                    {feature.text}
                  </p>
                ))}
              </div>

              {/* Button */}
              <div className="mt-7">
                <button
                  type="button"
                  className={`w-full rounded-full border py-3 text-sm font-medium transition ${
                    plan.highlighted
                      ? "border-[#477df7] bg-[#477df7] text-white hover:bg-[#386ee8]"
                      : "border-[#477df7] bg-white text-[#477df7] hover:bg-blue-50"
                  }`}
                >
                  Get Started
                </button>

                <p className="mt-4 text-center text-xs font-medium text-[#252525] underline">
                  Start Your 30 Day Free Trial
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;