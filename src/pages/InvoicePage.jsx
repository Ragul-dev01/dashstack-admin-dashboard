import { Check, Printer } from "lucide-react";

function InvoicePage() {
  const items = [
    {
      id: 1,
      description: "Children Toy",
      quantity: 2,
      baseCost: 20,
      totalCost: 80,
    },
    {
      id: 2,
      description: "Makeup",
      quantity: 2,
      baseCost: 50,
      totalCost: 100,
    },
    {
      id: 3,
      description: "Asus Laptop",
      quantity: 5,
      baseCost: 100,
      totalCost: 500,
    },
    {
      id: 4,
      description: "Iphone X",
      quantity: 4,
      baseCost: 1000,
      totalCost: 4000,
    },
  ];

  return (
    <div className="min-h-full bg-[#f5f6fa]">

      {/* ================= TITLE ================= */}

      <h1 className="mb-5 text-[24px] font-semibold leading-[30px] text-[#20242b]">
        Invoice
      </h1>

      {/* ================= INVOICE CARD ================= */}

      <div className="rounded-[10px] bg-white px-5 py-7 shadow-[0_1px_3px_rgba(0,0,0,0.02)] sm:px-8 lg:px-12">

        {/* ================= TOP DETAILS ================= */}

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">

          {/* Invoice From */}

          <div>
            <p className="text-[11px] font-medium text-[#20242b]">
              Invoice From :
            </p>

            <h2 className="mt-2 text-[13px] font-medium text-[#20242b]">
              Virginia Walker
            </h2>

            <p className="mt-1 text-[10px] leading-[16px] text-[#7d8490]">
              9694 Krajcik Lock Suites 635
            </p>
          </div>

          {/* Invoice To */}

          <div>
            <p className="text-[11px] font-medium text-[#20242b]">
              Invoice To :
            </p>

            <h2 className="mt-2 text-[13px] font-medium text-[#20242b]">
              Austin Miller
            </h2>

            <p className="mt-1 text-[10px] leading-[16px] text-[#7d8490]">
              Brookview
            </p>
          </div>

          {/* Dates */}

          <div className="md:text-right">
            <p className="text-[11px] font-medium text-[#20242b]">
              Invoice Date : 12 Nov 2019
            </p>

            <p className="mt-2 text-[11px] font-medium text-[#20242b]">
              Due Date : 25 Dec 2019
            </p>
          </div>

        </div>

        {/* ================= TABLE ================= */}

        <div className="mt-9 overflow-x-auto">

          <table className="w-full min-w-[650px] border-collapse">

            <thead>
              <tr className="h-[30px] bg-[#f1f4f9]">

                <th className="rounded-l-[5px] px-3 text-left text-[9px] font-medium text-[#3f4650]">
                  Serial No.
                </th>

                <th className="px-3 text-left text-[9px] font-medium text-[#3f4650]">
                  Description
                </th>

                <th className="px-3 text-center text-[9px] font-medium text-[#3f4650]">
                  Quantity
                </th>

                <th className="px-3 text-center text-[9px] font-medium text-[#3f4650]">
                  Base Cost
                </th>

                <th className="rounded-r-[5px] px-3 text-right text-[9px] font-medium text-[#3f4650]">
                  Total Cost
                </th>

              </tr>
            </thead>

            <tbody>

              {items.map((item) => (
                <tr
                  key={item.id}
                  className="h-[56px] border-b border-[#edf0f3]"
                >

                  <td className="px-3 text-center text-[10px] text-[#30353d]">
                    {item.id}
                  </td>

                  <td className="px-3 text-left text-[10px] text-[#30353d]">
                    {item.description}
                  </td>

                  <td className="px-3 text-center text-[10px] text-[#30353d]">
                    {item.quantity}
                  </td>

                  <td className="px-3 text-center text-[10px] text-[#30353d]">
                    ${item.baseCost}
                  </td>

                  <td className="px-3 text-right text-[10px] text-[#30353d]">
                    ${item.totalCost}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* ================= TOTAL ================= */}

        <div className="mt-4 flex justify-end">

          <div className="flex items-center gap-5 pr-3">

            <span className="text-[12px] font-semibold text-[#20242b]">
              Total
            </span>

            <span className="text-[12px] font-semibold text-[#20242b]">
              = $4680
            </span>

          </div>

        </div>

        {/* ================= ACTION BUTTONS ================= */}

        <div className="mt-10 flex items-center justify-end gap-3">

          {/* Print */}

          <button
            type="button"
            className="flex h-[35px] w-[35px] items-center justify-center rounded-[6px] border border-[#e3e7ec] bg-white text-[#3f4650] transition hover:bg-[#f5f6fa]"
          >
            <Printer size={15} strokeWidth={1.8} />
          </button>

          {/* Send */}

          <button
            type="button"
            className="flex h-[35px] items-center gap-3 rounded-[7px] bg-[#5b8def] px-5 text-[10px] font-medium text-white transition hover:bg-[#4f82e5]"
          >
            <span>Send</span>

            <span className="flex h-[23px] w-[23px] items-center justify-center rounded-[5px] bg-[#78a3f4]">
              <Check size={13} strokeWidth={2.2} />
            </span>
          </button>

        </div>

      </div>

    </div>
  );
}

export default InvoicePage;