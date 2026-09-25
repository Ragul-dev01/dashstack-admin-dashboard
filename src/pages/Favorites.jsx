import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Star,
} from "lucide-react";

import appleWatchCream from "../assets/apple-watch-cream.png";

const products = [
  {
    name: "Apple Watch Series 4",
    price: "$120.00",
    reviews: "(131)",
    image: appleWatchCream,
    liked: true,
  },
  {
    name: "Air-Max-270",
    price: "$60.00",
    reviews: "(64)",
    image: appleWatchCream,
    liked: false,
  },
  {
    name: "Minimal Chair Tool",
    price: "$24.59",
    reviews: "(63)",
    image: appleWatchCream,
    liked: false,
  },
  {
    name: "Amazfit Vip",
    price: "$75.00",
    reviews: "(48)",
    image: appleWatchCream,
    liked: false,
  },
  {
    name: "Gumbo Mouse",
    price: "$32.00",
    reviews: "(52)",
    image: appleWatchCream,
    liked: false,
  },
  {
    name: "Camera Tripod",
    price: "$45.00",
    reviews: "(39)",
    image: appleWatchCream,
    liked: false,
  },
];

function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm">
      {/* Product Image */}
      <div className="relative flex h-[270px] items-center justify-center overflow-hidden bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="h-[220px] w-[220px] object-contain"
        />

        {/* Left Arrow */}
        <button
          className="absolute left-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-[#f3f6fb] text-gray-500 transition hover:bg-blue-100 hover:text-blue-600"
          type="button"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Right Arrow */}
        <button
          className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-[#f3f6fb] text-gray-500 transition hover:bg-blue-100 hover:text-blue-600"
          type="button"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Product Details */}
      <div className="px-4 pb-4">
        <div className="mb-1 flex items-start justify-between gap-2">
          <h3 className="text-sm font-medium text-[#111827]">
            {product.name}
          </h3>

          <button
            type="button"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-100 bg-white"
          >
            <Heart
              size={16}
              strokeWidth={1.8}
              className={
                product.liked
                  ? "fill-pink-500 text-pink-500"
                  : "text-gray-400"
              }
            />
          </button>
        </div>

        {/* Price */}
        <p className="mb-1 text-sm font-medium text-blue-600">
          {product.price}
        </p>

        {/* Rating */}
        <div className="mb-3 flex items-center gap-1">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={13}
                className="fill-orange-400 text-orange-400"
              />
            ))}
          </div>

          <span className="text-[11px] text-gray-400">
            {product.reviews}
          </span>
        </div>

        {/* Edit Button */}
        <button
          type="button"
          className="rounded-md bg-[#eef3fb] px-4 py-2 text-[11px] font-medium text-gray-700 transition hover:bg-blue-600 hover:text-white"
        >
          Edit Product
        </button>
      </div>
    </div>
  );
}

function Favorites() {
  return (
    <div className="w-full">
      {/* Page Title */}
      <h1 className="mb-5 text-2xl font-semibold text-[#111827]">
        Favorites
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;