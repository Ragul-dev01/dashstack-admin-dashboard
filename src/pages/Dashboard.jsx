function Dashboard() {
  return (
    <div className="space-y-5">
      {/* ================= PAGE TITLE ================= */}
      <div>
        <h1 className="text-2xl font-semibold text-[#1f2937]">
          Dashboard
        </h1>
      </div>

      {/* ================= STAT CARDS ================= */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {/* Total User */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-gray-400">Total User</p>

              <h2 className="mt-2 text-2xl font-semibold text-gray-800">
                40,689
              </h2>

              <p className="mt-2 text-[11px] text-gray-400">
                <span className="font-medium text-[#20c997]">
                  ↗ 8.5%
                </span>{" "}
                Up from yesterday
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eeeaff] text-xl">
              👥
            </div>
          </div>
        </div>

        {/* Total Order */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-gray-400">Total Order</p>

              <h2 className="mt-2 text-2xl font-semibold text-gray-800">
                10293
              </h2>

              <p className="mt-2 text-[11px] text-gray-400">
                <span className="font-medium text-[#20c997]">
                  ↗ 1.3%
                </span>{" "}
                Up from past week
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff2ce] text-xl">
              📦
            </div>
          </div>
        </div>

        {/* Total Sales */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-gray-400">Total Sales</p>

              <h2 className="mt-2 text-2xl font-semibold text-gray-800">
                $89,000
              </h2>

              <p className="mt-2 text-[11px] text-gray-400">
                <span className="font-medium text-[#ff6b6b]">
                  ↘ 4.3%
                </span>{" "}
                Down from yesterday
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dcf8ec] text-xl">
              📈
            </div>
          </div>
        </div>

        {/* Total Pending */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-gray-400">Total Pending</p>

              <h2 className="mt-2 text-2xl font-semibold text-gray-800">
                2040
              </h2>

              <p className="mt-2 text-[11px] text-gray-400">
                <span className="font-medium text-[#20c997]">
                  ↗ 1.8%
                </span>{" "}
                Up from yesterday
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffe5dc] text-xl">
              🕐
            </div>
          </div>
        </div>
      </div>

      {/* ================= SALES DETAILS ================= */}
      <div className="rounded-xl bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            Sales Details
          </h2>

          <select className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-500 outline-none">
            <option>October</option>
            <option>September</option>
            <option>August</option>
          </select>
        </div>

        <div className="relative h-[260px] w-full">

          {/* Grid */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[100, 80, 60, 40, 20, 0].map((item) => (
              <div key={item} className="flex items-center">
                <span className="w-9 text-[9px] text-gray-400">
                  {item}%
                </span>

                <div className="h-px flex-1 bg-gray-100" />
              </div>
            ))}
          </div>

          {/* Sales Line */}
          <svg
            viewBox="0 0 1000 250"
            className="absolute left-9 top-0 h-full w-[calc(100%-36px)]"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="salesGradient"
                x1="0"
                x2="0"
                y1="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#5b8def"
                  stopOpacity="0.22"
                />

                <stop
                  offset="100%"
                  stopColor="#5b8def"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            <path
              d="
                M0 190
                L30 175
                L55 175
                L80 160
                L105 165
                L125 115
                L145 145
                L165 130
                L185 160
                L205 125
                L225 150
                L245 135
                L265 150
                L285 120
                L305 135
                L325 35
                L345 170
                L370 145
                L390 115
                L415 135
                L440 125
                L465 140
                L490 110
                L510 145
                L535 130
                L560 135
                L585 105
                L605 70
                L620 150
                L645 145
                L670 160
                L690 155
                L710 125
                L735 130
                L760 105
                L780 135
                L805 125
                L830 105
                L850 120
                L875 145
                L900 115
                L925 135
                L950 110
                L975 130
                L1000 110
              "
              fill="none"
              stroke="#4f86ff"
              strokeWidth="2.5"
            />

            <path
              d="
                M0 190
                L30 175
                L55 175
                L80 160
                L105 165
                L125 115
                L145 145
                L165 130
                L185 160
                L205 125
                L225 150
                L245 135
                L265 150
                L285 120
                L305 135
                L325 35
                L345 170
                L370 145
                L390 115
                L415 135
                L440 125
                L465 140
                L490 110
                L510 145
                L535 130
                L560 135
                L585 105
                L605 70
                L620 150
                L645 145
                L670 160
                L690 155
                L710 125
                L735 130
                L760 105
                L780 135
                L805 125
                L830 105
                L850 120
                L875 145
                L900 115
                L925 135
                L950 110
                L975 130
                L1000 110
                L1000 230
                L0 230
                Z
              "
              fill="url(#salesGradient)"
            />

            <circle
              cx="325"
              cy="35"
              r="4"
              fill="#4f86ff"
            />
          </svg>

          {/* X Axis */}
          <div className="absolute bottom-0 left-10 right-0 flex justify-between text-[9px] text-gray-400">
            <span>5k</span>
            <span>10k</span>
            <span>15k</span>
            <span>20k</span>
            <span>25k</span>
            <span>30k</span>
            <span>35k</span>
            <span>40k</span>
            <span>45k</span>
            <span>50k</span>
            <span>55k</span>
            <span>60k</span>
            <span>65k</span>
          </div>
        </div>
      </div>

      {/* ================= DEALS DETAILS ================= */}
      <div className="rounded-xl bg-white p-5 shadow-sm">

        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            Deals Details
          </h2>

          <select className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-500 outline-none">
            <option>October</option>
          </select>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full text-left text-xs">

            <thead>
              <tr className="rounded-lg bg-[#f4f6fa] text-gray-500">
                <th className="px-4 py-3">Product Name</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Date - Time</th>
                <th className="px-4 py-3">Piece</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {/* Apple Watch */}
              <tr className="border-b border-gray-100">

                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">

                    <img
                      src="/src/assets/applewatch.png"
                      alt="Apple Watch"
                      className="h-9 w-9 rounded-md object-contain"
                    />

                    <span className="font-medium text-gray-700">
                      Apple Watch
                    </span>

                  </div>
                </td>

                <td className="px-4 py-4 text-gray-500">
                  6096 Marjolaine Landing
                </td>

                <td className="px-4 py-4 text-gray-500">
                  12.09.2019 - 12.53 PM
                </td>

                <td className="px-4 py-4 text-gray-500">
                  423
                </td>

                <td className="px-4 py-4 text-gray-500">
                  $34,295
                </td>

                <td className="px-4 py-4">
                  <span className="rounded-full bg-[#d8f7eb] px-3 py-1 text-[10px] font-medium text-[#18a978]">
                    Delivered
                  </span>
                </td>

              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="space-y-3 md:hidden">

          <div className="rounded-lg border border-gray-100 p-4">

            <div className="flex items-center gap-3">

              <img
                src="/src/assets/applewatch.png"
                alt="Apple Watch"
                className="h-10 w-10 rounded-md object-contain"
              />

              <p className="font-medium text-gray-800">
                Apple Watch
              </p>

            </div>

            <p className="mt-2 text-xs text-gray-500">
              6096 Marjolaine Landing
            </p>

            <p className="mt-1 text-xs text-gray-500">
              12.09.2019 - 12.53 PM
            </p>

            <div className="mt-3 flex justify-between text-xs">
              <span>423 pieces</span>
              <span>$34,295</span>
            </div>

            <span className="mt-3 inline-block rounded-full bg-[#d8f7eb] px-3 py-1 text-[10px] text-[#18a978]">
              Delivered
            </span>

          </div>

        </div>
      </div>

      {/* ================= REVENUE ================= */}
      <div className="rounded-xl bg-white p-5 shadow-sm">

        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            Revenue
          </h2>

          <select className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-500 outline-none">
            <option>October</option>
          </select>
        </div>

        <div className="relative h-[260px] overflow-hidden">

          <div className="absolute inset-0 flex flex-col justify-between">

            {[100, 80, 60, 40, 20].map((item) => (
              <div
                key={item}
                className="flex items-center"
              >
                <span className="w-8 text-[9px] text-gray-400">
                  {item}
                </span>

                <div className="h-px flex-1 bg-gray-100" />
              </div>
            ))}

          </div>

          <svg
            viewBox="0 0 1000 250"
            className="absolute left-8 top-0 h-full w-[calc(100%-32px)]"
            preserveAspectRatio="none"
          >

            {/* Purple */}
            <path
              d="
                M0 175
                C50 80 90 85 130 125
                C170 165 210 165 250 150
                C290 135 310 100 350 135
                C390 170 420 130 460 115
                C500 100 535 155 570 150
                C610 145 625 55 665 60
                C705 65 715 150 755 120
                C795 90 820 60 850 75
                C890 95 900 165 935 135
                C965 110 985 70 1000 65
                L1000 220
                L0 220
                Z
              "
              fill="#d5a5ff"
              opacity="0.8"
            />

            {/* Orange */}
            <path
              d="
                M0 190
                C45 155 90 150 130 165
                C170 180 205 175 245 165
                C285 155 320 120 355 140
                C395 165 420 175 455 145
                C490 115 520 80 555 100
                C595 125 610 165 650 145
                C690 125 710 90 750 115
                C790 140 820 170 855 150
                C895 125 920 110 950 120
                C975 130 990 170 1000 180
                L1000 220
                L0 220
                Z
              "
              fill="#ff9877"
              opacity="0.85"
            />

          </svg>
        </div>

        <div className="mt-3 flex justify-center gap-8 text-xs text-gray-500">

          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#ff9877]" />
            Sales
          </span>

          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#d5a5ff]" />
            Profit
          </span>

        </div>
      </div>

      {/* ================= BOTTOM CARDS ================= */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">

        {/* Customers */}
        <div className="rounded-xl bg-white p-5 shadow-sm">

          <h2 className="text-base font-semibold text-gray-800">
            Customers
          </h2>

          <div className="flex justify-center py-5">

            <div className="relative h-32 w-32">

              <div
                className="h-full w-full rounded-full"
                style={{
                  background:
                    "conic-gradient(#4f86ff 0deg 90deg, #dce7ff 90deg 180deg, #4f86ff 180deg 270deg, #dce7ff 270deg 360deg)",
                }}
              />

              <div className="absolute inset-4 rounded-full bg-white" />

            </div>

          </div>

          <div className="grid grid-cols-2 text-center">

            <div>
              <p className="text-xl font-semibold text-gray-800">
                34,249
              </p>

              <p className="mt-1 text-[10px] text-gray-500">
                🔵 New Customers
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold text-gray-800">
                1420
              </p>

              <p className="mt-1 text-[10px] text-gray-500">
                🔵 Repeated
              </p>
            </div>

          </div>
        </div>

        {/* Featured Product */}
        <div className="rounded-xl bg-white p-5 shadow-sm">

          <h2 className="text-base font-semibold text-gray-800">
            Featured Product
          </h2>

          <div className="relative flex h-[200px] items-center justify-center">

            <button className="absolute left-0 rounded-full bg-gray-100 px-2 py-1 text-gray-500">
              ‹
            </button>

            <div className="text-center">

              <img
                src="/src/assets/hero.png"
                alt="Beats Headphone"
                className="mx-auto h-28 w-36 object-contain"
              />

              <p className="mt-3 text-sm font-medium text-gray-800">
                Beats Headphone 2019
              </p>

              <p className="mt-1 text-xs font-medium text-blue-500">
                $89.00
              </p>

            </div>

            <button className="absolute right-0 rounded-full bg-gray-100 px-2 py-1 text-gray-500">
              ›
            </button>

          </div>
        </div>

        {/* Sales Analytics */}
        <div className="rounded-xl bg-white p-5 shadow-sm">

          <h2 className="text-base font-semibold text-gray-800">
            Sales Analytics
          </h2>

          <div className="mt-5 h-[190px]">

            <svg
              viewBox="0 0 500 220"
              className="h-full w-full"
              preserveAspectRatio="none"
            >

              {[50, 90, 130, 170].map((y) => (
                <line
                  key={y}
                  x1="35"
                  y1={y}
                  x2="480"
                  y2={y}
                  stroke="#f1f1f1"
                />
              ))}

              <path
                d="
                  M35 175
                  C70 110 100 90 130 105
                  C160 120 170 145 200 130
                  C230 115 245 85 270 100
                  C300 120 315 145 340 125
                  C370 100 390 60 410 80
                  C435 105 455 75 480 25
                "
                fill="none"
                stroke="#2f80ed"
                strokeWidth="3"
              />

              <path
                d="
                  M35 195
                  C70 150 100 125 130 140
                  C165 155 180 170 210 150
                  C240 130 265 145 290 165
                  C320 185 345 175 370 145
                  C400 110 425 140 450 100
                  C465 75 475 60 480 50
                "
                fill="none"
                stroke="#16b89a"
                strokeWidth="3"
              />

            </svg>

            <div className="flex justify-between px-5 text-[9px] text-gray-400">
              <span>2015</span>
              <span>2016</span>
              <span>2017</span>
              <span>2018</span>
              <span>2019</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;