import { useState } from "react";
import { useNavigate } from "react-router-dom";
import appleWatch from "../assets/apple-watch.png";

const products = [
  {
    id: 1,
    name: "Apple Watch Series 4",
    price: "$120.00",
    reviews: "(131)",
    image: appleWatch,
  },
  {
    id: 2,
    name: "Apple Watch Series 4",
    price: "$120.00",
    reviews: "(131)",
    image: appleWatch,
  },
  {
    id: 3,
    name: "Apple Watch Series 4",
    price: "$120.00",
    reviews: "(131)",
    image: appleWatch,
  },
];

function Products() {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);

  const nextProducts = () => {
    setCurrentPage((prev) => (prev + 1) % products.length);
  };

  const previousProducts = () => {
    setCurrentPage(
      (prev) => (prev - 1 + products.length) % products.length
    );
  };

  const goToFavorites = () => {
    navigate("/favorites");
  };

  return (
    <div className="space-y-5">
      {/* ================= PAGE TITLE ================= */}
      <div>
        <h1 className="text-2xl font-semibold text-[#202124]">
          Products
        </h1>
      </div>

      {/* ================= HERO BANNER ================= */}
      <section className="relative overflow-hidden rounded-xl bg-[#4b7ff5] px-7 py-7 text-white sm:px-10 sm:py-8">
        {/* Background Pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <svg
            viewBox="0 0 900 250"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 80 C80 20 120 150 210 80 S340 30 420 90 S560 150 650 70 S780 20 900 90"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />

            <path
              d="M0 140 C100 70 160 210 260 130 S430 80 520 140 S690 200 780 120 S850 80 900 130"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />

            <circle
              cx="150"
              cy="50"
              r="35"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />

            <circle
              cx="700"
              cy="160"
              r="45"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Left Arrow */}
        <button
          type="button"
          onClick={previousProducts}
          className="absolute left-3 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#4b7ff5] transition hover:bg-white"
        >
          ‹
        </button>

        {/* Banner Content */}
        <div className="relative z-10 max-w-xl">
          <p className="mb-2 text-[10px] font-medium text-white/90 sm:text-xs">
            September 12-22
          </p>

          <h2 className="max-w-md text-2xl font-bold leading-tight sm:text-3xl">
            Enjoy free home
            <br />
            delivery in this summer
          </h2>

          <p className="mt-2 text-[10px] text-white/80 sm:text-xs">
            Designer Dresses - Pick from trendy Designer Dress.
          </p>

          <button
            type="button"
            className="mt-5 rounded-md bg-[#ff914d] px-5 py-2 text-[10px] font-semibold text-white shadow-sm transition hover:bg-[#ff8032]"
          >
            Get Started
          </button>
        </div>

        {/* Right Arrow */}
        <button
          type="button"
          onClick={nextProducts}
          className="absolute right-3 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#4b7ff5] transition hover:bg-white"
        >
          ›
        </button>
      </section>

      {/* ================= PRODUCT GRID ================= */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-xl bg-white p-3 shadow-sm"
          >
            {/* Product Image */}
            <div className="relative flex h-[235px] items-center justify-center overflow-hidden rounded-lg bg-white">
              <button
                type="button"
                className="absolute left-1 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-[#f1f4f9] text-gray-500 shadow-sm transition hover:bg-gray-200"
              >
                ‹
              </button>

              <img
                src={product.image}
                alt={product.name}
                className="h-[190px] w-[230px] object-contain"
              />

              <button
                type="button"
                className="absolute right-1 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-[#f1f4f9] text-gray-500 shadow-sm transition hover:bg-gray-200"
              >
                ›
              </button>
            </div>

            {/* Product Details */}
            <div className="px-1 pb-1 pt-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-xs font-semibold text-gray-800 sm:text-sm">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-[11px] font-medium text-[#2878ee]">
                    {product.price}
                  </p>

                  {/* Rating */}
                  <div className="mt-1 flex items-center gap-1">
                    <div className="flex text-[11px] tracking-tight text-[#ff9800]">
                      ★★★★★
                    </div>

                    <span className="text-[9px] text-gray-400">
                      {product.reviews}
                    </span>
                  </div>
                </div>

                {/* Favorite */}
                <button
                  type="button"
                  onClick={goToFavorites}
                  aria-label="Go to favorites"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-100 text-gray-500 transition hover:bg-gray-50"
                >
                  ♡
                </button>
              </div>

              {/* Edit Product */}
              <button
                type="button"
                className="mt-3 rounded-md bg-[#edf3fc] px-4 py-2 text-[10px] font-medium text-[#53657c] transition hover:bg-[#e2ebf8]"
              >
                Edit Product
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* ================= MOBILE PRODUCT INDICATORS ================= */}
      <div className="flex justify-center gap-1.5 lg:hidden">
        {products.map((product, index) => (
          <button
            type="button"
            key={product.id}
            onClick={() => setCurrentPage(index)}
            className={`h-1.5 rounded-full transition-all ${
              currentPage === index
                ? "w-5 bg-[#4b7ff5]"
                : "w-1.5 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;