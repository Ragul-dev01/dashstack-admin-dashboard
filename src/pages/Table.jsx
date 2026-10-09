import { useState } from "react";
import { Pencil, Trash2, X } from "lucide-react";
import appleWatch from "../assets/applewatch.png";
import microsoftHeadset from "../assets/microsoft-headset.png";

const orderData = [
  { id: "00001", name: "Christine Brooks", address: "089 Kutch Green Apt. 448", date: "14 Feb 2019", type: "Electric", status: "Completed" },
  { id: "00002", name: "Rosie Pearson", address: "979 Immanuel Ferry Suite 526", date: "14 Feb 2019", type: "Book", status: "Processing" },
  { id: "00003", name: "Darrell Caldwell", address: "8587 Frida Ports", date: "14 Feb 2019", type: "Medicine", status: "Rejected" },
  { id: "00004", name: "Gilbert Johnston", address: "768 Destiny Lake Suite 600", date: "14 Feb 2019", type: "Mobile", status: "Completed" },
  { id: "00005", name: "Alan Cain", address: "042 Mylene Throughway", date: "14 Feb 2019", type: "Watch", status: "Processing" },
  { id: "00006", name: "Alfred Murray", address: "543 Weimann Mountain", date: "14 Feb 2019", type: "Medicine", status: "Completed" },
];

const initialProducts = [
  {
    id: 1,
    image: appleWatch,
    name: "Apple Watch Series 4",
    category: "Digital Product",
    price: "$690.00",
    piece: 63,
    colors: ["#000000", "#a5a5a5", "#ed858b"],
  },
  {
    id: 2,
    image: microsoftHeadset,
    name: "Microsoft Headsquare",
    category: "Digital Product",
    price: "$190.00",
    piece: 13,
    colors: ["#000000", "#ff7479", "#4d83f5", "#f2c34e"],
  },
];

function Table() {
  const [products, setProducts] = useState(initialProducts);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleSave = (event) => {
    event.preventDefault();

    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === editingProduct.id ? editingProduct : product
      )
    );

    setEditingProduct(null);
  };

  const handleDelete = (id) => {
    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="min-h-full bg-[#f5f6fa]">
      <h1 className="mb-6 text-[24px] font-semibold leading-[30px] text-[#20242b]">
        Table
      </h1>

      {/* Orders Table */}
      <div className="mb-6 overflow-hidden rounded-[10px] border border-[#e6e8ec] bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#e8e9ed]">
                {["ID", "NAME", "ADDRESS", "DATE", "TYPE", "STATUS"].map(
                  (heading) => (
                    <th
                      key={heading}
                      className="px-5 py-4 text-[10px] font-semibold text-[#444950]"
                    >
                      {heading}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {orderData.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-[#eceef1] last:border-b-0"
                >
                  <td className="px-5 py-4 text-[10px] text-[#41464d]">
                    {order.id}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-[10px] text-[#41464d]">
                    {order.name}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-[10px] text-[#41464d]">
                    {order.address}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-[10px] text-[#41464d]">
                    {order.date}
                  </td>
                  <td className="px-5 py-4 text-[10px] text-[#41464d]">
                    {order.type}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex min-w-[58px] justify-center rounded-[3px] px-2 py-1 text-[9px] font-medium ${
                        order.status === "Completed"
                          ? "bg-[#d5f5f0] text-[#19b99a]"
                          : order.status === "Processing"
                            ? "bg-[#e9ddff] text-[#8a5cf6]"
                            : "bg-[#ffe0dd] text-[#fa6868]"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Products Table */}
      <div className="overflow-hidden rounded-[10px] border border-[#e6e8ec] bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#e8e9ed]">
                {[
                  "Image",
                  "Product Name",
                  "Category",
                  "Price",
                  "Piece",
                  "Available Color",
                  "Action",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="whitespace-nowrap px-4 py-4 text-[10px] font-semibold text-[#444950]"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-[#eceef1] last:border-b-0"
                >
                  <td className="px-4 py-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[38px] w-[38px] rounded-[5px] object-cover"
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-[10px] text-[#41464d]">
                    {product.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-[10px] text-[#41464d]">
                    {product.category}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-[10px] text-[#41464d]">
                    {product.price}
                  </td>
                  <td className="px-4 py-3 text-[10px] text-[#41464d]">
                    {product.piece}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {product.colors.map((color, index) => (
                        <span
                          key={`${product.id}-${index}`}
                          className="h-[12px] w-[12px] rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => setEditingProduct({ ...product })}
                        aria-label={`Edit ${product.name}`}
                        className="flex h-[28px] w-[30px] items-center justify-center rounded-l-[4px] border border-[#e5e7eb] text-[#8a929d] transition hover:bg-blue-50 hover:text-blue-600"
                      >
                        <Pencil size={13} />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(product.id)}
                        aria-label={`Delete ${product.name}`}
                        className="flex h-[28px] w-[30px] items-center justify-center rounded-r-[4px] border-y border-r border-[#e5e7eb] text-[#ff6b6b] transition hover:bg-red-50"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-4 py-8 text-center text-sm text-gray-400"
                  >
                    No products available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Product Modal */}
      {editingProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">
          <form
            onSubmit={handleSave}
            className="w-full max-w-[420px] rounded-[10px] bg-white p-6 shadow-xl"
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#20242b]">
                Edit Product
              </h2>
              <button
                type="button"
                onClick={() => setEditingProduct(null)}
                aria-label="Close edit form"
                className="rounded p-1 text-gray-500 hover:bg-gray-100"
              >
                <X size={18} />
              </button>
            </div>

            <label className="mb-2 block text-sm text-gray-600">
              Product Name
            </label>
            <input
              required
              value={editingProduct.name}
              onChange={(event) =>
                setEditingProduct({
                  ...editingProduct,
                  name: event.target.value,
                })
              }
              className="mb-4 h-10 w-full rounded border border-gray-200 px-3 text-sm outline-none focus:border-blue-500"
            />

            <label className="mb-2 block text-sm text-gray-600">
              Category
            </label>
            <input
              required
              value={editingProduct.category}
              onChange={(event) =>
                setEditingProduct({
                  ...editingProduct,
                  category: event.target.value,
                })
              }
              className="mb-4 h-10 w-full rounded border border-gray-200 px-3 text-sm outline-none focus:border-blue-500"
            />

            <label className="mb-2 block text-sm text-gray-600">
              Price
            </label>
            <input
              required
              value={editingProduct.price}
              onChange={(event) =>
                setEditingProduct({
                  ...editingProduct,
                  price: event.target.value,
                })
              }
              className="mb-6 h-10 w-full rounded border border-gray-200 px-3 text-sm outline-none focus:border-blue-500"
            />

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setEditingProduct(null)}
                className="rounded border border-gray-200 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded bg-[#5b8def] px-4 py-2 text-sm text-white hover:bg-[#4f82e5]"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Table;