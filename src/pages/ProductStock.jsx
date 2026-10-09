import {
  Pencil,
  Trash2,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import appleWatch from "../assets/apple-watch-series-4.png";
import microsoftHeadset from "../assets/microsoft-headset.png";
import womensDress from "../assets/womens-dress.png";
import samsungA50 from "../assets/samsung-a50.png";
import camera from "../assets/camera.png";

const products = [
  {
    image: appleWatch,
    name: "Apple Watch Series 4",
    category: "Digital Product",
    price: "$690.00",
    piece: 63,
    colors: ["#000000", "#A3A3A3", "#F58B8B"],
  },
  {
    image: microsoftHeadset,
    name: "Microsoft Headset",
    category: "Digital Product",
    price: "$190.00",
    piece: 13,
    colors: ["#000000", "#F58B8B", "#4F8BEF", "#F2B94B"],
  },
  {
    image: womensDress,
    name: "Women's Dress",
    category: "Fashion",
    price: "$640.00",
    piece: 635,
    colors: ["#8E2C5B", "#71B3E8", "#172554", "#4545E8"],
  },
  {
    image: samsungA50,
    name: "Samsung A50",
    category: "Mobile",
    price: "$400.00",
    piece: 67,
    colors: ["#30458F", "#000000", "#A91F4C"],
  },
  {
    image: camera,
    name: "Camera",
    category: "Electronic",
    price: "$420.00",
    piece: 52,
    colors: ["#30458F", "#000000", "#A91F4C"],
  },
  {
    image: microsoftHeadset,
    name: "Microsoft Headset",
    category: "Digital Product",
    price: "$190.00",
    piece: 13,
    colors: ["#000000", "#F58B8B", "#4F8BEF", "#F2B94B"],
  },
  {
    image: womensDress,
    name: "Women's Dress",
    category: "Fashion",
    price: "$640.00",
    piece: 635,
    colors: ["#8E2C5B", "#71B3E8", "#172554", "#4545E8"],
  },
];

function ProductStock() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] p-6">
      {/* Top section */}
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-[24px] font-semibold text-[#202124]">
          Product Stock
        </h1>

        {/* Search */}
        <div className="flex h-[40px] w-[150px] items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4">
          <Search size={14} className="text-[#9CA3AF]" />

          <input
            type="text"
            placeholder="Search product name"
            className="w-full bg-transparent text-[11px] text-[#555] outline-none placeholder:text-[#A5A5A5]"
          />
        </div>
      </div>

      {/* Table container */}
      <div className="overflow-hidden rounded-[8px] border border-[#E5E7EB] bg-white">
        {/* Table header */}
        <div className="grid grid-cols-[74px_1.5fr_1.1fr_0.8fr_0.8fr_1.2fr_70px] items-center border-b border-[#E5E7EB] px-4 py-3">
          <p className="text-[11px] font-medium text-[#333]">Image</p>
          <p className="text-[11px] font-medium text-[#333]">Product Name</p>
          <p className="text-[11px] font-medium text-[#333]">Category</p>
          <p className="text-[11px] font-medium text-[#333]">Price</p>
          <p className="text-[11px] font-medium text-[#333]">Piece</p>
          <p className="text-[11px] font-medium text-[#333]">
            Available Color
          </p>
          <p className="text-[11px] font-medium text-[#333]">Action</p>
        </div>

        {/* Product rows */}
        {products.map((product, index) => (
          <div
            key={index}
            className="grid min-h-[64px] grid-cols-[74px_1.5fr_1.1fr_0.8fr_0.8fr_1.2fr_70px] items-center border-b border-[#EEEEEE] px-4 last:border-b-0"
          >
            {/* Image */}
            <div className="flex items-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-[38px] w-[38px] rounded-[6px] object-cover"
              />
            </div>

            {/* Product name */}
            <p className="text-[11px] text-[#444]">{product.name}</p>

            {/* Category */}
            <p className="text-[11px] text-[#444]">{product.category}</p>

            {/* Price */}
            <p className="text-[11px] text-[#444]">{product.price}</p>

            {/* Piece */}
            <p className="text-[11px] text-[#444]">{product.piece}</p>

            {/* Colors */}
            <div className="flex items-center gap-2">
              {product.colors.map((color, colorIndex) => (
                <span
                  key={colorIndex}
                  className="h-[12px] w-[12px] rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex h-[24px] w-[24px] items-center justify-center rounded-[4px] border border-[#E5E7EB] bg-white text-[#9CA3AF] hover:text-[#4B7BFF]"
              >
                <Pencil size={12} />
              </button>

              <button
                type="button"
                className="flex h-[24px] w-[24px] items-center justify-center rounded-[4px] border border-[#E5E7EB] bg-white text-[#FF6B6B] hover:text-red-600"
              >
                <Trash2 size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom section */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-[10px] text-[#777]">Showing 1-09 of 78</p>

        <div className="flex items-center gap-1">
          <button
            type="button"
            className="flex h-[28px] w-[28px] items-center justify-center rounded-[5px] border border-[#E5E7EB] bg-white text-[#777]"
          >
            <ChevronLeft size={14} />
          </button>

          <button
            type="button"
            className="flex h-[28px] w-[28px] items-center justify-center rounded-[5px] border border-[#E5E7EB] bg-white text-[#777]"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductStock;