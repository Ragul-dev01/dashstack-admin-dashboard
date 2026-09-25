import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Filter,
  RotateCcw,
} from "lucide-react";

/* =========================================================
   ORDER DATA
========================================================= */

const ordersData = [
  {
    id: "00001",
    name: "Christine Brooks",
    address: "089 Kutch Green Apt. 448",
    date: "04 Sep 2019",
    type: "Electric",
    status: "Completed",
  },
  {
    id: "00002",
    name: "Rosie Pearson",
    address: "979 Immanuel Ferry Suite 526",
    date: "28 May 2019",
    type: "Book",
    status: "Processing",
  },
  {
    id: "00003",
    name: "Darrell Caldwell",
    address: "8587 Frida Ports",
    date: "23 Nov 2019",
    type: "Medicine",
    status: "Rejected",
  },
  {
    id: "00004",
    name: "Gilbert Johnston",
    address: "768 Destiny Lake Suite 600",
    date: "05 Feb 2019",
    type: "Mobile",
    status: "Completed",
  },
  {
    id: "00005",
    name: "Alan Cain",
    address: "042 Mylene Throughway",
    date: "29 Jul 2019",
    type: "Watch",
    status: "Processing",
  },
  {
    id: "00006",
    name: "Alfred Murray",
    address: "543 Weimann Mountain",
    date: "15 Aug 2019",
    type: "Medicine",
    status: "Completed",
  },
  {
    id: "00007",
    name: "Maggie Sullivan",
    address: "New Scottieberg",
    date: "21 Dec 2019",
    type: "Watch",
    status: "Processing",
  },
  {
    id: "00008",
    name: "Rosie Todd",
    address: "New Jon",
    date: "30 Apr 2019",
    type: "Medicine",
    status: "On Hold",
  },
  {
    id: "00009",
    name: "Dollie Hines",
    address: "124 Lyla Forge Suite 975",
    date: "09 Jan 2019",
    type: "Book",
    status: "In Transit",
  },
];

/* =========================================================
   ORDER TYPE OPTIONS
========================================================= */

const orderTypeOptions = [
  "Health & Medicine",
  "Book & Stationary",
  "Services & Industry",
  "Fashion & Beauty",
  "Home & Living",
  "Electronics",
  "Mobile & Phone",
  "Accessories",
];

/*
  Figma order type categories mapped
  to existing order data types.
*/

const orderTypeMap = {
  "Health & Medicine": ["Medicine"],
  "Book & Stationary": ["Book"],
  "Services & Industry": ["Electric"],
  "Fashion & Beauty": ["Watch"],
  "Home & Living": [],
  Electronics: [],
  "Mobile & Phone": ["Mobile"],
  Accessories: [],
};

/* =========================================================
   ORDER STATUS OPTIONS
========================================================= */

const orderStatusOptions = [
  "Completed",
  "Processing",
  "Rejected",
  "On Hold",
  "In Transit",
];

/* =========================================================
   DATE HELPERS
========================================================= */

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function parseOrderDate(dateString) {
  const [day, monthText, year] = dateString.split(" ");

  const monthIndex = MONTHS.findIndex(
    (month) =>
      month.slice(0, 3).toLowerCase() ===
      monthText.slice(0, 3).toLowerCase()
  );

  return new Date(Number(year), monthIndex, Number(day));
}

function dateKey(date) {
  if (!date) return "";

  return `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatSelectedDate(date) {
  if (!date) return "Date";

  return `${String(date.getDate()).padStart(2, "0")} ${
    MONTHS[date.getMonth()]
  } ${date.getFullYear()}`;
}

/* =========================================================
   STATUS BADGE
========================================================= */

function StatusBadge({ status }) {
  const styles = {
    Completed: "bg-[#d9f8ec] text-[#0abf83]",
    Processing: "bg-[#eee0ff] text-[#8b38e8]",
    Rejected: "bg-[#ffe0e0] text-[#ff4545]",
    "On Hold": "bg-[#ffedd5] text-[#ff8b00]",
    "In Transit": "bg-[#f9dff3] text-[#db3fb5]",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        rounded-md
        px-3
        py-1.5
        text-[12px]
        font-medium
        ${styles[status] || "bg-gray-100 text-gray-600"}
      `}
    >
      {status}
    </span>
  );
}

/* =========================================================
   DATE CALENDAR
========================================================= */

function DateCalendar({
  selectedDate,
  visibleMonth,
  setVisibleMonth,
  onSelectDate,
  onClose,
}) {
  const calendarRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target)
      ) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  const year = visibleMonth.getFullYear();
  const month = visibleMonth.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const previousMonth = () => {
    setVisibleMonth(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setVisibleMonth(new Date(year, month + 1, 1));
  };

  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(new Date(year, month, day));
  }

  return (
    <div
      ref={calendarRef}
      className="
        absolute
        left-0
        top-[calc(100%+10px)]
        z-[100]
        w-[330px]
        rounded-2xl
        border
        border-[#e7eaf0]
        bg-white
        p-5
        shadow-[0_15px_45px_rgba(25,45,80,0.15)]
      "
    >
      {/* Calendar Header */}

      <div className="mb-5 flex items-center justify-between">
        <button
          type="button"
          onClick={previousMonth}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            text-[#52627a]
            transition
            hover:bg-[#f2f5fa]
          "
        >
          <ChevronLeft size={19} />
        </button>

        <div className="text-[15px] font-semibold text-[#1f2d3d]">
          {MONTHS[month]} {year}
        </div>

        <button
          type="button"
          onClick={nextMonth}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            text-[#52627a]
            transition
            hover:bg-[#f2f5fa]
          "
        >
          <ChevronRight size={19} />
        </button>
      </div>

      {/* Weekdays */}

      <div className="mb-2 grid grid-cols-7">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="
              flex
              h-9
              items-center
              justify-center
              text-[12px]
              font-medium
              text-[#9aa6b7]
            "
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}

      <div className="grid grid-cols-7 gap-y-1">
        {days.map((date, index) => {
          if (!date) {
            return (
              <div
                key={`empty-${index}`}
                className="h-10"
              />
            );
          }

          const isSelected =
            selectedDate &&
            dateKey(selectedDate) === dateKey(date);

          return (
            <button
              key={dateKey(date)}
              type="button"
              onClick={() => onSelectDate(date)}
              className={`
                mx-auto
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                text-[13px]
                transition
                ${
                  isSelected
                    ? "bg-[#2f6df6] font-semibold text-white shadow-[0_4px_12px_rgba(47,109,246,0.25)]"
                    : "text-[#3f4f66] hover:bg-[#edf3ff] hover:text-[#2f6df6]"
                }
              `}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>

      {/* Calendar Footer */}

      <div className="mt-4 border-t border-[#edf0f4] pt-4">
        <button
          type="button"
          onClick={() => {
            onSelectDate(null);
            onClose();
          }}
          className="
            w-full
            rounded-lg
            py-2
            text-[13px]
            font-medium
            text-[#ff4b4b]
            transition
            hover:bg-[#fff2f2]
          "
        >
          Clear Date
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   ORDER TYPE POPUP
========================================================= */

function OrderTypePopup({
  tempTypes,
  setTempTypes,
  onApply,
  onClose,
}) {
  const popupRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target)
      ) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  const toggleType = (type) => {
    setTempTypes((current) =>
      current.includes(type)
        ? current.filter((item) => item !== type)
        : [...current, type]
    );
  };

  return (
    <div
      ref={popupRef}
      className="
        absolute
        left-1/2
        top-[calc(100%+10px)]
        z-[90]
        w-[500px]
        -translate-x-1/2
        rounded-2xl
        border
        border-[#e6eaf0]
        bg-white
        p-6
        shadow-[0_15px_45px_rgba(25,45,80,0.16)]
      "
    >
      <h3 className="mb-5 text-[15px] font-semibold text-[#26364d]">
        Select Order Type
      </h3>

      <div className="grid grid-cols-3 gap-3">
        {orderTypeOptions.map((type) => {
          const selected = tempTypes.includes(type);

          return (
            <button
              key={type}
              type="button"
              onClick={() => toggleType(type)}
              className={`
                rounded-full
                border
                px-3
                py-2
                text-[12px]
                font-medium
                transition
                ${
                  selected
                    ? "border-[#4c7ff7] bg-[#4c7ff7] text-white"
                    : "border-[#d8dee8] bg-white text-[#43536a] hover:border-[#4c7ff7] hover:text-[#4c7ff7]"
                }
              `}
            >
              {type}
            </button>
          );
        })}
      </div>

      <div className="mt-6 border-t border-[#edf0f4] pt-4">
        <p className="mb-4 text-[11px] text-[#8b97a8]">
          *You can choose multiple Order Type
        </p>

        <button
          type="button"
          onClick={onApply}
          className="
            mx-auto
            block
            rounded-lg
            bg-[#4c7ff7]
            px-7
            py-2.5
            text-[12px]
            font-medium
            text-white
            shadow-[0_5px_15px_rgba(76,127,247,0.22)]
            transition
            hover:bg-[#3d70e8]
          "
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   ORDER STATUS POPUP
========================================================= */

function OrderStatusPopup({
  tempStatuses,
  setTempStatuses,
  onApply,
  onClose,
}) {
  const popupRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target)
      ) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, [onClose]);

  const toggleStatus = (status) => {
    setTempStatuses((current) =>
      current.includes(status)
        ? current.filter((item) => item !== status)
        : [...current, status]
    );
  };

  return (
    <div
      ref={popupRef}
      className="
        absolute
        left-1/2
        top-[calc(100%+10px)]
        z-[90]
        w-[390px]
        -translate-x-1/2
        rounded-2xl
        border
        border-[#e6eaf0]
        bg-white
        p-5
        shadow-[0_15px_45px_rgba(25,45,80,0.16)]
      "
    >
      {/* Popup Title */}

      <h3 className="mb-5 text-[15px] font-semibold text-[#26364d]">
        Select Order Status
      </h3>

      {/* Status Options */}

      <div className="grid grid-cols-3 gap-3">
        {orderStatusOptions.map((status) => {
          const selected = tempStatuses.includes(status);

          return (
            <button
              key={status}
              type="button"
              onClick={() => toggleStatus(status)}
              className={`
                flex
                h-[34px]
                items-center
                justify-center
                rounded-full
                border
                px-3
                text-[12px]
                font-medium
                transition
                ${
                  selected
                    ? "border-[#4c7ff7] bg-[#4c7ff7] text-white"
                    : "border-[#d8dee8] bg-white text-[#43536a] hover:border-[#4c7ff7] hover:text-[#4c7ff7]"
                }
              `}
            >
              {status}
            </button>
          );
        })}
      </div>

      {/* Popup Footer */}

      <div className="mt-5 border-t border-[#edf0f4] pt-4">
        <p className="mb-4 text-[11px] text-[#8b97a8]">
          *You can choose multiple Order Status
        </p>

        <button
          type="button"
          onClick={onApply}
          className="
            mx-auto
            block
            rounded-lg
            bg-[#4c7ff7]
            px-7
            py-2.5
            text-[12px]
            font-medium
            text-white
            shadow-[0_5px_15px_rgba(76,127,247,0.22)]
            transition
            hover:bg-[#3d70e8]
          "
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN ORDERS PAGE
========================================================= */

export default function Orders() {
  /* =======================================================
     DATE STATE
  ======================================================= */

  const [dateOpen, setDateOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);

  const [calendarMonth, setCalendarMonth] = useState(
    new Date(2019, 1, 1)
  );

  /* =======================================================
     ORDER TYPE STATE
  ======================================================= */

  const [orderTypeOpen, setOrderTypeOpen] = useState(false);

  const [appliedOrderTypes, setAppliedOrderTypes] = useState([]);

  const [tempOrderTypes, setTempOrderTypes] = useState([]);

  /* =======================================================
     ORDER STATUS STATE
  ======================================================= */

  const [statusOpen, setStatusOpen] = useState(false);

  const [appliedStatuses, setAppliedStatuses] = useState([]);

  const [tempStatuses, setTempStatuses] = useState([]);

  /* =======================================================
     PAGINATION
  ======================================================= */

  const [page, setPage] = useState(1);

  const itemsPerPage = 9;

  /* =======================================================
     FILTERED ORDERS
  ======================================================= */

  const filteredOrders = useMemo(() => {
    return ordersData.filter((order) => {
      /* DATE FILTER */

      if (selectedDate) {
        const orderDate = parseOrderDate(order.date);

        if (
          dateKey(orderDate) !==
          dateKey(selectedDate)
        ) {
          return false;
        }
      }

      /* ORDER TYPE FILTER */

      if (appliedOrderTypes.length > 0) {
        const allowedTypes = appliedOrderTypes.flatMap(
          (type) => orderTypeMap[type] || []
        );

        if (!allowedTypes.includes(order.type)) {
          return false;
        }
      }

      /* ORDER STATUS FILTER */

      if (
        appliedStatuses.length > 0 &&
        !appliedStatuses.includes(order.status)
      ) {
        return false;
      }

      return true;
    });
  }, [
    selectedDate,
    appliedOrderTypes,
    appliedStatuses,
  ]);

  /* =======================================================
     PAGINATION
  ======================================================= */

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredOrders.length / itemsPerPage
    )
  );

  const visibleOrders = filteredOrders.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  useEffect(() => {
    setPage(1);
  }, [
    selectedDate,
    appliedOrderTypes,
    appliedStatuses,
  ]);

  /* =======================================================
     DATE SELECT
  ======================================================= */

  const handleDateSelect = (date) => {
    setSelectedDate(date);

    setDateOpen(false);

    if (date) {
      setCalendarMonth(
        new Date(
          date.getFullYear(),
          date.getMonth(),
          1
        )
      );
    }
  };

  /* =======================================================
     DATE OPEN
  ======================================================= */

  const handleDateOpen = () => {
    setOrderTypeOpen(false);
    setStatusOpen(false);

    if (selectedDate) {
      setCalendarMonth(
        new Date(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          1
        )
      );
    }

    setDateOpen((current) => !current);
  };

  /* =======================================================
     ORDER TYPE OPEN
  ======================================================= */

  const handleOrderTypeOpen = () => {
    setDateOpen(false);
    setStatusOpen(false);

    /*
      Copy applied values into temporary values.

      Selecting an option will NOT affect the table
      until Apply Now is clicked.
    */

    setTempOrderTypes(appliedOrderTypes);

    setOrderTypeOpen((current) => !current);
  };

  /* =======================================================
     APPLY ORDER TYPE
  ======================================================= */

  const applyOrderTypes = () => {
    setAppliedOrderTypes(tempOrderTypes);

    setOrderTypeOpen(false);
  };

  /* =======================================================
     ORDER STATUS OPEN
  ======================================================= */

  const handleStatusOpen = () => {
    setDateOpen(false);
    setOrderTypeOpen(false);

    /*
      Copy applied statuses into temporary values.

      Selecting a status will NOT affect the table
      until Apply Now is clicked.
    */

    setTempStatuses(appliedStatuses);

    setStatusOpen((current) => !current);
  };

  /* =======================================================
     APPLY ORDER STATUS
  ======================================================= */

  const applyStatuses = () => {
    setAppliedStatuses(tempStatuses);

    setStatusOpen(false);
  };

  /* =======================================================
     RESET FILTERS
  ======================================================= */

  const resetFilters = () => {
    setSelectedDate(null);

    setAppliedOrderTypes([]);

    setTempOrderTypes([]);

    setAppliedStatuses([]);

    setTempStatuses([]);

    setDateOpen(false);

    setOrderTypeOpen(false);

    setStatusOpen(false);

    setCalendarMonth(
      new Date(2019, 1, 1)
    );

    setPage(1);
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div className="min-h-full bg-[#f5f7fb] p-7">
      {/* ===================================================
          PAGE TITLE
      =================================================== */}

      <div className="mb-6">
        <h1
          className="
            text-[27px]
            font-semibold
            tracking-[-0.3px]
            text-[#152238]
          "
        >
          Order Lists
        </h1>
      </div>

      {/* ===================================================
          FILTER BAR
      =================================================== */}

      <div
        className="
          relative
          mb-6
          flex
          h-[50px]
          items-center
          rounded-[14px]
          border
          border-[#e3e7ed]
          bg-white
        "
      >
        {/* Filter Icon */}

        <div
          className="
            flex
            h-full
            w-[60px]
            items-center
            justify-center
            border-r
            border-[#edf0f4]
          "
        >
          <Filter
            size={19}
            strokeWidth={1.7}
            color="#607087"
          />
        </div>

        {/* Filter By */}

        <div
          className="
            flex
            h-full
            w-[76px]
            items-center
            justify-center
            border-r
            border-[#edf0f4]
          "
        >
          <span className="text-[13px] font-medium text-[#41516a]">
            Filter By
          </span>
        </div>

        {/* =================================================
            DATE FILTER
        ================================================= */}

        <div
          className="
            relative
            h-full
            w-[155px]
            border-r
            border-[#edf0f4]
          "
        >
          <button
            type="button"
            onClick={handleDateOpen}
            className="
              flex
              h-full
              w-full
              items-center
              justify-between
              px-4
              text-left
            "
          >
            <span className="text-[13px] font-medium text-[#42526a]">
              {formatSelectedDate(selectedDate)}
            </span>

            <ChevronDown
              size={16}
              className={`
                text-[#64748b]
                transition-transform
                ${
                  dateOpen
                    ? "rotate-180"
                    : ""
                }
              `}
            />
          </button>

          {dateOpen && (
            <DateCalendar
              selectedDate={selectedDate}
              visibleMonth={calendarMonth}
              setVisibleMonth={
                setCalendarMonth
              }
              onSelectDate={
                handleDateSelect
              }
              onClose={() =>
                setDateOpen(false)
              }
            />
          )}
        </div>

        {/* =================================================
            ORDER TYPE
        ================================================= */}

        <div
          className="
            relative
            h-full
            w-[180px]
            border-r
            border-[#edf0f4]
          "
        >
          <button
            type="button"
            onClick={handleOrderTypeOpen}
            className="
              flex
              h-full
              w-full
              items-center
              justify-between
              px-4
            "
          >
            <span className="text-[13px] font-medium text-[#42526a]">
              {appliedOrderTypes.length > 0
                ? `${appliedOrderTypes.length} Selected`
                : "Order Type"}
            </span>

            <ChevronDown
              size={16}
              className={`
                text-[#64748b]
                transition-transform
                ${
                  orderTypeOpen
                    ? "rotate-180"
                    : ""
                }
              `}
            />
          </button>

          {orderTypeOpen && (
            <OrderTypePopup
              tempTypes={tempOrderTypes}
              setTempTypes={
                setTempOrderTypes
              }
              onApply={
                applyOrderTypes
              }
              onClose={() =>
                setOrderTypeOpen(false)
              }
            />
          )}
        </div>

        {/* =================================================
            ORDER STATUS
        ================================================= */}

        <div
          className="
            relative
            h-full
            w-[160px]
            border-r
            border-[#edf0f4]
          "
        >
          <button
            type="button"
            onClick={handleStatusOpen}
            className="
              flex
              h-full
              w-full
              items-center
              justify-between
              px-4
            "
          >
            <span className="text-[13px] font-medium text-[#42526a]">
              {appliedStatuses.length > 0
                ? `${appliedStatuses.length} Selected`
                : "Order Status"}
            </span>

            <ChevronDown
              size={16}
              className={`
                text-[#64748b]
                transition-transform
                ${
                  statusOpen
                    ? "rotate-180"
                    : ""
                }
              `}
            />
          </button>

          {statusOpen && (
            <OrderStatusPopup
              tempStatuses={tempStatuses}
              setTempStatuses={
                setTempStatuses
              }
              onApply={applyStatuses}
              onClose={() =>
                setStatusOpen(false)
              }
            />
          )}
        </div>

        {/* =================================================
            RESET FILTER
        ================================================= */}

        <button
          type="button"
          onClick={resetFilters}
          className="
            ml-auto
            mr-5
            flex
            items-center
            gap-2
            text-[13px]
            font-medium
            text-[#ff4b4b]
            transition
            hover:text-[#e93434]
          "
        >
          <RotateCcw
            size={15}
            strokeWidth={1.8}
          />

          Reset Filter
        </button>
      </div>

      {/* ===================================================
          TABLE
      =================================================== */}

      <div
        className="
          overflow-hidden
          rounded-[14px]
          border
          border-[#e3e7ed]
          bg-white
        "
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] border-collapse">
            <thead>
              <tr className="h-[42px] border-b border-[#edf0f4]">
                <th className="px-4 text-left text-[12px] font-semibold uppercase tracking-wide text-[#34445c]">
                  ID
                </th>

                <th className="px-4 text-left text-[12px] font-semibold uppercase tracking-wide text-[#34445c]">
                  Name
                </th>

                <th className="px-4 text-left text-[12px] font-semibold uppercase tracking-wide text-[#34445c]">
                  Address
                </th>

                <th className="px-4 text-left text-[12px] font-semibold uppercase tracking-wide text-[#34445c]">
                  Date
                </th>

                <th className="px-4 text-left text-[12px] font-semibold uppercase tracking-wide text-[#34445c]">
                  Type
                </th>

                <th className="px-4 text-left text-[12px] font-semibold uppercase tracking-wide text-[#34445c]">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {visibleOrders.length > 0 ? (
                visibleOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="
                      h-[64px]
                      border-b
                      border-[#edf0f4]
                      last:border-b-0
                    "
                  >
                    <td className="px-4 text-[13px] font-medium text-[#49617f]">
                      {order.id}
                    </td>

                    <td className="px-4 text-[13px] font-medium text-[#25364e]">
                      {order.name}
                    </td>

                    <td className="px-4 text-[13px] text-[#536985]">
                      {order.address}
                    </td>

                    <td className="px-4 text-[13px] text-[#536985]">
                      {order.date}
                    </td>

                    <td className="px-4 text-[13px] text-[#536985]">
                      {order.type}
                    </td>

                    <td className="px-4">
                      <StatusBadge
                        status={order.status}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">
                    <div className="flex h-[250px] items-center justify-center">
                      <div className="text-center">
                        <div className="mb-2 text-[15px] font-medium text-[#7c899d]">
                          No orders found.
                        </div>

                        <div className="text-[12px] text-[#a3adbb]">
                          Try changing your filters.
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* =================================================
            TABLE FOOTER
        ================================================= */}

        <div
          className="
            flex
            h-[55px]
            items-center
            justify-between
            border-t
            border-[#edf0f4]
            px-4
          "
        >
          <span className="text-[13px] text-[#607087]">
            Showing{" "}
            {filteredOrders.length === 0
              ? "0"
              : `${(page - 1) * itemsPerPage + 1}-${Math.min(
                  page * itemsPerPage,
                  filteredOrders.length
                )}`}{" "}
            of {filteredOrders.length}
          </span>

          <div className="flex items-center gap-2">
            {/* Previous */}

            <button
              type="button"
              disabled={page === 1}
              onClick={() =>
                setPage(
                  (current) =>
                    current - 1
                )
              }
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                border
                border-[#e1e6ed]
                bg-white
                text-[#718096]
                transition
                hover:bg-[#f5f7fb]
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              <ChevronLeft size={16} />
            </button>

            {/* Next */}

            <button
              type="button"
              disabled={page >= totalPages}
              onClick={() =>
                setPage(
                  (current) =>
                    current + 1
                )
              }
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                border
                border-[#e1e6ed]
                bg-white
                text-[#718096]
                transition
                hover:bg-[#f5f7fb]
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}