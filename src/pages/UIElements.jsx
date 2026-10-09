import { SlidersHorizontal, ChevronDown } from "lucide-react";

function UIElements() {
  return (
    <div className="min-h-full bg-[#f5f6fa]">

      {/* ================= PAGE HEADER ================= */}

      <div className="mb-[18px] flex items-center justify-between">
        <h1 className="text-[24px] font-semibold leading-[30px] text-[#20242b]">
          UI Elements
        </h1>

        <div className="flex h-[40px] items-center rounded-[8px] border border-[#e3e7ec] bg-white">

          <button
            type="button"
            className="flex h-full w-[42px] items-center justify-center border-r border-[#e8ebef] text-[#4d5662]"
          >
            <SlidersHorizontal
              size={15}
              strokeWidth={1.7}
            />
          </button>

          <button
            type="button"
            className="flex h-full items-center border-r border-[#e8ebef] px-[18px] text-[9px] font-medium text-[#4d5662]"
          >
            Filter By
          </button>

          <button
            type="button"
            className="flex h-full items-center gap-[18px] px-[18px] text-[9px] font-medium text-[#4d5662]"
          >
            Charts

            <ChevronDown
              size={12}
              strokeWidth={1.7}
            />
          </button>

        </div>
      </div>

      {/* ================= BAR CHART ================= */}

      <div className="mb-[10px] rounded-[10px] border border-[#e5e8ed] bg-white px-[16px] pt-[16px] pb-[20px]">

        <h2 className="text-[14px] font-semibold text-[#30353d]">
          Bar Chart
        </h2>

        <div className="mt-[28px] flex h-[150px] items-end justify-between px-[12px] sm:px-[25px] lg:px-[30px]">

          {/* GROUP 1 */}

          <div className="flex h-full items-end gap-[9px]">

            <div className="h-[118px] w-[5px] rounded-t-[2px] bg-[#4d82f1]" />
            <div className="h-[65px] w-[5px] rounded-t-[2px] bg-[#4d82f1]" />
            <div className="h-[45px] w-[5px] rounded-t-[2px] bg-[#4d82f1]" />
            <div className="h-[88px] w-[5px] rounded-t-[2px] bg-[#4d82f1]" />
            <div className="h-[76px] w-[5px] rounded-t-[2px] bg-[#4d82f1]" />
            <div className="h-[55px] w-[5px] rounded-t-[2px] bg-[#4d82f1]" />
            <div className="h-[72px] w-[5px] rounded-t-[2px] bg-[#4d82f1]" />

          </div>

          {/* GROUP 2 */}

          <div className="flex h-full items-end gap-[9px]">

            <div className="relative h-[86px] w-[5px]">
              <div className="absolute bottom-0 h-[10px] w-full bg-[#19b9ae]" />
              <div className="absolute top-0 h-[76px] w-full bg-[#d9f4f5]" />
            </div>

            <div className="relative h-[115px] w-[5px]">
              <div className="absolute bottom-0 h-[10px] w-full bg-[#19b9ae]" />
              <div className="absolute top-0 h-[105px] w-full bg-[#d9f4f5]" />
            </div>

            <div className="relative h-[74px] w-[5px]">
              <div className="absolute bottom-0 h-[10px] w-full bg-[#19b9ae]" />
              <div className="absolute top-0 h-[64px] w-full bg-[#d9f4f5]" />
            </div>

            <div className="relative h-[102px] w-[5px]">
              <div className="absolute bottom-0 h-[10px] w-full bg-[#19b9ae]" />
              <div className="absolute top-0 h-[92px] w-full bg-[#d9f4f5]" />
            </div>

            <div className="relative h-[78px] w-[5px]">
              <div className="absolute bottom-0 h-[10px] w-full bg-[#19b9ae]" />
              <div className="absolute top-0 h-[68px] w-full bg-[#d9f4f5]" />
            </div>

            <div className="relative h-[122px] w-[5px]">
              <div className="absolute bottom-0 h-[10px] w-full bg-[#19b9ae]" />
              <div className="absolute top-0 h-[112px] w-full bg-[#d9f4f5]" />
            </div>

          </div>

          {/* GROUP 3 */}

          <div className="flex h-full items-end gap-[7px]">

            <div className="h-[68px] w-[5px] rounded-t-[2px] bg-[#4b76f0]" />
            <div className="h-[88px] w-[5px] rounded-t-[2px] bg-[#ff9418]" />

            <div className="h-[92px] w-[5px] rounded-t-[2px] bg-[#4b76f0]" />
            <div className="h-[110px] w-[5px] rounded-t-[2px] bg-[#ff9418]" />

            <div className="h-[76px] w-[5px] rounded-t-[2px] bg-[#4b76f0]" />
            <div className="h-[135px] w-[5px] rounded-t-[2px] bg-[#ff9418]" />

            <div className="h-[100px] w-[5px] rounded-t-[2px] bg-[#4b76f0]" />
            <div className="h-[120px] w-[5px] rounded-t-[2px] bg-[#ff9418]" />

            <div className="h-[80px] w-[5px] rounded-t-[2px] bg-[#4b76f0]" />
            <div className="h-[128px] w-[5px] rounded-t-[2px] bg-[#ff9418]" />

          </div>

          {/* GROUP 4 */}

          <div className="flex h-full items-end gap-[9px]">

            <div className="relative h-[96px] w-[5px]">
              <div className="absolute bottom-0 h-[10px] w-full bg-[#ed8fb5]" />
              <div className="absolute top-0 h-[86px] w-full bg-[#f8dce9]" />
            </div>

            <div className="relative h-[76px] w-[5px]">
              <div className="absolute bottom-0 h-[10px] w-full bg-[#ed8fb5]" />
              <div className="absolute top-0 h-[66px] w-full bg-[#f8dce9]" />
            </div>

            <div className="relative h-[108px] w-[5px]">
              <div className="absolute bottom-0 h-[10px] w-full bg-[#ed8fb5]" />
              <div className="absolute top-0 h-[98px] w-full bg-[#f8dce9]" />
            </div>

            <div className="relative h-[72px] w-[5px]">
              <div className="absolute bottom-0 h-[10px] w-full bg-[#ed8fb5]" />
              <div className="absolute top-0 h-[62px] w-full bg-[#f8dce9]" />
            </div>

            <div className="relative h-[114px] w-[5px]">
              <div className="absolute bottom-0 h-[10px] w-full bg-[#ed8fb5]" />
              <div className="absolute top-0 h-[104px] w-full bg-[#f8dce9]" />
            </div>

            <div className="relative h-[88px] w-[5px]">
              <div className="absolute bottom-0 h-[10px] w-full bg-[#ed8fb5]" />
              <div className="absolute top-0 h-[78px] w-full bg-[#f8dce9]" />
            </div>

            <div className="relative h-[122px] w-[5px]">
              <div className="absolute bottom-0 h-[10px] w-full bg-[#ed8fb5]" />
              <div className="absolute top-0 h-[112px] w-full bg-[#f8dce9]" />
            </div>

          </div>

        </div>
      </div>

      {/* ================= PIE CHART ================= */}

      <div className="mb-[10px] rounded-[10px] border border-[#e5e8ed] bg-white px-[16px] pt-[16px] pb-[24px]">

        <h2 className="text-[14px] font-semibold text-[#30353d]">
          Pie Chart
        </h2>

        <div className="mt-[28px] grid grid-cols-2 items-center justify-items-center gap-y-[30px] md:grid-cols-4">

          {/* PIE 1 */}

          <div
            className="
              h-[118px]
              w-[118px]
              rounded-full
              bg-[conic-gradient(#3f50f0_0deg_90deg,#e7edf8_90deg_360deg)]
            "
          />

          {/* PIE 2 */}

          <div
            className="
              h-[118px]
              w-[118px]
              rounded-full
              bg-[conic-gradient(#b15bed_0deg_90deg,#e7edf8_90deg_360deg)]
            "
          />

          {/* PIE 3 */}

          <div
            className="
              h-[118px]
              w-[118px]
              rounded-full
              bg-[conic-gradient(#ff8338_0deg_135deg,#e7edf8_135deg_360deg)]
            "
          />

          {/* PIE 4 - MATCHES FIGMA */}

          <div
            className="
              h-[118px]
              w-[118px]
              rounded-full
              bg-[conic-gradient(from_225deg,#4389ed_0deg_135deg,#e7edf8_135deg_360deg)]
            "
          />

        </div>
      </div>

      {/* ================= DONUT CHART ================= */}

      <div className="rounded-[10px] border border-[#e5e8ed] bg-white px-[16px] pt-[16px] pb-[24px]">

        <h2 className="text-[14px] font-semibold text-[#30353d]">
          Donut Chart
        </h2>

        <div className="mt-[28px] grid grid-cols-2 items-center justify-items-center gap-y-[30px] md:grid-cols-4">

          {/* DONUT 1 */}

          <div
            className="
              relative
              h-[118px]
              w-[118px]
              rounded-full
              bg-[conic-gradient(#20c4b7_0deg_270deg,#e1e5e9_270deg_360deg)]
            "
          >
            <div className="absolute inset-[14px] rounded-full bg-white" />
          </div>

          {/* DONUT 2 */}

          <div
            className="
              relative
              h-[118px]
              w-[118px]
              rounded-full
              bg-[conic-gradient(#4389ed_0deg_225deg,#ff8c32_225deg_250deg,#e1e5e9_250deg_360deg)]
            "
          >
            <div className="absolute inset-[14px] rounded-full bg-white" />
          </div>

          {/* DONUT 3 */}

          <div
            className="
              relative
              h-[118px]
              w-[118px]
              rounded-full
              bg-[conic-gradient(#20c4b7_0deg_230deg,#ffd05a_230deg_360deg)]
            "
          >
            <div className="absolute inset-[14px] rounded-full bg-white" />
          </div>

          {/* DONUT 4 */}

          <div
            className="
              relative
              h-[118px]
              w-[118px]
              rounded-full
              bg-[conic-gradient(#ff8b38_0deg_220deg,#ffd05a_220deg_255deg,#20c4b7_255deg_360deg)]
            "
          >
            <div className="absolute inset-[14px] rounded-full bg-white" />
          </div>

        </div>
      </div>

    </div>
  );
}

export default UIElements;