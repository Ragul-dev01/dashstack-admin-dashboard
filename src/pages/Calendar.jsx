import { useRef, useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Camera,
  ArrowLeft,
} from "lucide-react";

import designConference from "../assets/design-conference.png";
import designConferenceCover from "../assets/design-conference-cover.png";
import designAvatar2 from "../assets/design-avatar-2.png";
import designAvatar3 from "../assets/design-avatar-3.png";

import weekendFestival from "../assets/weekend-festival.png";
import weekendAvatar1 from "../assets/weekend-avatar-1.png";
import weekendAvatar2 from "../assets/weekend-avatar-2.png";
import weekendAvatar3 from "../assets/weekend-avatar-3.png";

import glastonburyFestival from "../assets/glastonbury-festival.png";
import glastonburyAvatar1 from "../assets/glastonbury-avatar-1.png";
import glastonburyAvatar2 from "../assets/glastonbury-avatar-2.png";
import glastonburyAvatar3 from "../assets/glastonbury-avatar-3.png";

import ultraEurope from "../assets/ultra-europe.png";
import ultraAvatar1 from "../assets/ultra-avatar-1.png";
import ultraAvatar2 from "../assets/ultra-avatar-2.png";
import ultraAvatar3 from "../assets/ultra-avatar-3.png";

/* -------------------------------- */
/* EVENTS                           */
/* -------------------------------- */

const events = [
  {
    id: "design",
    title: "Design Conference",
    date: "Today 07:19 AM",
    dateShort: "3",
    location: "56 Davion Mission Suite 157",
    city: "Meaghanberg",
    image: designConference,
    cover: designConferenceCover,
    avatars: [designConference, designAvatar2, designAvatar3],
    count: "15+",
    color: "purple",
  },
  {
    id: "weekend",
    title: "Weekend Festival",
    date: "16 October 2019 at 5.00 PM",
    dateShort: "16",
    location: "853 Moore Flats Suite 158",
    city: "Sweden",
    image: weekendFestival,
    avatars: [weekendAvatar1, weekendAvatar2, weekendAvatar3],
    count: "20+",
    color: "pink",
  },
  {
    id: "glastonbury",
    title: "Glastonbury Festival",
    date: "20-22 October 2019 at 8.00 PM",
    dateShort: "20",
    location: "646 Walter Road Apt. 571",
    city: "Turks and Caicos Islands",
    image: glastonburyFestival,
    avatars: [
      glastonburyAvatar1,
      glastonburyAvatar2,
      glastonburyAvatar3,
    ],
    count: "14+",
    color: "orange",
  },
  {
    id: "ultra",
    title: "Ultra Europe 2019",
    date: "25 October 2019 at 10.00 PM",
    dateShort: "25",
    location: "506 Satterfield Tunnel Apt. 963",
    city: "San Marino",
    image: ultraEurope,
    avatars: [ultraAvatar1, ultraAvatar2, ultraAvatar3],
    count: "42+",
    color: "blue",
  },
];

/* -------------------------------- */
/* CALENDAR WEEKS                   */
/* -------------------------------- */

const weeks = [
  [
    { day: 25, muted: true },
    { day: 26, muted: true },
    { day: 27, muted: true },
    { day: 28, muted: true },
    { day: 29, muted: true },
    { day: 30, muted: true },
    { day: 1 },
  ],
  [
    { day: 2 },
    { day: 3 },
    { day: 4 },
    { day: 5 },
    { day: 6 },
    { day: 7 },
    { day: 8 },
  ],
  [
    { day: 9 },
    { day: 10 },
    { day: 11 },
    { day: 12 },
    { day: 13 },
    { day: 14 },
    { day: 15 },
  ],
  [
    { day: 16 },
    { day: 17 },
    { day: 18 },
    { day: 19 },
    { day: 20 },
    { day: 21 },
    { day: 22 },
  ],
  [
    { day: 23 },
    { day: 24 },
    { day: 25 },
    { day: 26 },
    { day: 27 },
    { day: 28 },
    { day: 29 },
  ],
  [
    { day: 30 },
    { day: 31 },
    { day: 1, muted: true },
    { day: 2, muted: true },
    { day: 3, muted: true },
    { day: 4, muted: true },
    { day: 5, muted: true },
  ],
];

/* -------------------------------- */
/* EVENT AVATARS                    */
/* -------------------------------- */

function EventAvatars({ avatars, count }) {
  return (
    <div className="flex items-center">
      {avatars.map((avatar, index) => (
        <img
          key={index}
          src={avatar}
          alt=""
          className={`h-7 w-7 rounded-full border-2 border-white object-cover ${
            index !== 0 ? "-ml-2" : ""
          }`}
        />
      ))}

      <div className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#4c8dff] bg-white text-[11px] font-medium text-[#3f82ff]">
        {count}
      </div>
    </div>
  );
}

/* -------------------------------- */
/* SIDEBAR EVENT                    */
/* -------------------------------- */

function SidebarEvent({ event }) {
  return (
    <div className="border-b border-[#edf0f5] px-5 py-5">
      <div className="flex gap-3">
        <img
          src={event.image}
          alt=""
          className="h-12 w-12 shrink-0 rounded-full object-cover"
        />

        <div className="min-w-0">
          <h3 className="text-[14px] font-semibold leading-5 text-[#111827]">
            {event.title}
          </h3>

          <p className="mt-1 text-[12px] leading-5 text-[#8c96a8]">
            {event.date}
          </p>

          <p className="text-[12px] leading-5 text-[#8c96a8]">
            {event.location}
          </p>

          <p className="text-[12px] leading-5 text-[#8c96a8]">
            {event.city}
          </p>

          <div className="mt-2">
            <EventAvatars
              avatars={event.avatars}
              count={event.count}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* CALENDAR EVENT                   */
/* -------------------------------- */

function CalendarEvent({ event, onClick, className = "" }) {
  const colorClasses = {
    purple:
      "border-l-[#7c4dff] bg-[#eee7ff] text-[#6d3df5]",
    pink:
      "border-l-[#ff3ca6] bg-[#ffe4f2] text-[#ef2593]",
    orange:
      "border-l-[#ff8a00] bg-[#fff0dd] text-[#ff7800]",
    blue:
      "border-l-[#3986ff] bg-[#e1ecff] text-[#286edc]",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute left-1 right-1 z-10 h-[30px] overflow-hidden rounded-[4px] border-l-[3px] px-3 text-left text-[10px] font-medium transition hover:brightness-95 ${
        colorClasses[event.color]
      } ${className}`}
    >
      {event.title}
    </button>
  );
}

/* -------------------------------- */
/* DESIGN CONFERENCE POPUP          */
/* -------------------------------- */

function DesignConferencePopup() {
  return (
    <div
      className="
        absolute
        left-[145px]
        top-[72px]
        z-50
        w-[178px]
        overflow-visible
        rounded-[9px]
        bg-white
        shadow-[0_10px_35px_rgba(0,0,0,0.14)]
      "
    >
      <div
        className="
          absolute
          -left-[9px]
          top-[86px]
          h-0
          w-0
          border-b-[9px]
          border-r-[9px]
          border-t-[9px]
          border-b-transparent
          border-r-white
          border-t-transparent
        "
      />

      <div className="p-3 pb-0">
        <img
          src={designConferenceCover}
          alt="Design Conference"
          className="h-[96px] w-full rounded-[8px] object-cover"
        />
      </div>

      <div className="px-3 pt-3">
        <h3 className="text-[14px] font-semibold leading-5 text-[#20242b]">
          Design Conference
        </h3>

        <p className="mt-1 text-[11px] text-[#666b73]">
          Zillul Design Agency
        </p>

        <p className="mt-2 text-[11px] text-[#92969c]">
          Today 07:19 AM
        </p>

        <p className="mt-2 pb-4 text-[11px] leading-4 text-[#92969c]">
          56 Davion Mission Suite 157
        </p>
      </div>

      <div className="border-t border-[#edf0f3] px-3 py-3">
        <EventAvatars
          avatars={[
            designConference,
            designAvatar2,
            designAvatar3,
          ]}
          count="15+"
        />
      </div>
    </div>
  );
}

/* -------------------------------- */
/* INPUT STYLES                     */
/* -------------------------------- */

const inputClassName = `
  h-[44px]
  w-full
  rounded-[4px]
  border
  border-[#e3e7ed]
  bg-[#f8f9fb]
  px-3
  text-[11px]
  text-[#333a46]
  outline-none
  transition
  placeholder:text-[#b0b6c0]
  focus:border-[#5b8def]
  focus:bg-white
`;

/* -------------------------------- */
/* ADD NEW EVENT FORM               */
/* -------------------------------- */

function AddNewEventForm({ onBack }) {
  const fileInputRef = useRef(null);

  const [coverImage, setCoverImage] = useState(null);

  const [formData, setFormData] = useState({
    eventName: "",
    time: "",
    date: "",
    address: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setCoverImage(imageUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("New Event:", {
      ...formData,
      coverImage,
    });

    onBack();
  };

  return (
    <div className="min-w-0 flex-1 bg-[#f5f7fb] p-4 md:p-6">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[22px] font-semibold text-[#20242b]">
          Add New Event
        </h2>

        <button
          type="button"
          onClick={onBack}
          className="
            flex
            items-center
            gap-1.5
            rounded-[5px]
            px-3
            py-2
            text-[11px]
            font-medium
            text-[#5b8def]
            transition
            hover:bg-[#edf3ff]
          "
        >
          <ArrowLeft size={14} />
          Back to Calendar
        </button>
      </div>

      {/* Figma-style form card */}
      <div
        className="
          rounded-[10px]
          border
          border-[#e5e9ef]
          bg-white
          px-6
          py-7
          md:px-12
          md:py-8
        "
      >
        <form onSubmit={handleSubmit}>
          {/* Cover Photo */}
          <div className="mb-8 flex flex-col items-center justify-center">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="group flex flex-col items-center justify-center"
            >
              <div
                className="
                  flex
                  h-[58px]
                  w-[58px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  bg-[#f1f3f7]
                  transition
                  group-hover:bg-[#e8edf6]
                "
              >
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt="Cover preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Camera
                    size={22}
                    strokeWidth={2}
                    className="text-[#555c68]"
                  />
                )}
              </div>

              <span className="mt-2 text-[10px] font-medium text-[#5b8def]">
                Upload Cover Photo
              </span>
            </button>
          </div>

          {/* Form fields */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-7 md:grid-cols-2">
            {/* Event Name */}
            <div>
              <label className="mb-2 block text-[10px] font-medium text-[#5b626d]">
                Event Name
              </label>

              <input
                type="text"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                placeholder="Enter event name"
                className={inputClassName}
              />
            </div>

            {/* Time */}
            <div>
              <label className="mb-2 block text-[10px] font-medium text-[#5b626d]">
                Time
              </label>

              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={inputClassName}
              />
            </div>

            {/* Date */}
            <div>
              <label className="mb-2 block text-[10px] font-medium text-[#5b626d]">
                Date
              </label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={inputClassName}
              />
            </div>

            {/* Address */}
            <div>
              <label className="mb-2 block text-[10px] font-medium text-[#5b626d]">
                Address
              </label>

              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className={inputClassName}
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="mb-2 block text-[10px] font-medium text-[#5b626d]">
                Contact Number
              </label>

              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Enter your Contact Number"
                className={inputClassName}
              />
            </div>
          </div>

          {/* Add Now */}
          <div className="mt-9 flex justify-center">
            <button
              type="submit"
              className="
                h-[44px]
                w-[150px]
                rounded-[5px]
                bg-[#5b8def]
                text-[11px]
                font-medium
                text-white
                shadow-sm
                transition
                hover:bg-[#4e82e3]
              "
            >
              Add Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* CALENDAR                         */
/* -------------------------------- */

export default function Calendar() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showAddEvent, setShowAddEvent] = useState(false);

  const designEvent = events[0];
  const weekendEvent = events[1];
  const glastonburyEvent = events[2];
  const ultraEvent = events[3];

  const openAddEvent = () => {
    setSelectedEvent(null);
    setShowAddEvent(true);
  };

  const backToCalendar = () => {
    setShowAddEvent(false);
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-full bg-[#f5f7fb] p-4 md:p-6">
      <div className="mx-auto max-w-[1440px]">

        {/* Page heading */}
        <div className="mb-5">
          <h1 className="text-[22px] font-semibold text-[#20242b]">
            Calendar
          </h1>
        </div>

        {/* Main card */}
        <div className="grid overflow-hidden rounded-[10px] bg-white shadow-sm xl:grid-cols-[344px_minmax(0,1fr)]">

          {/* LEFT SIDE */}
          <div className="border-r border-[#edf0f5]">

            {/* Add event / Back button */}
            <div className="border-b border-[#edf0f5] p-4">
              <button
                type="button"
                onClick={
                  showAddEvent
                    ? backToCalendar
                    : openAddEvent
                }
                className="
                  flex
                  h-[42px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-[5px]
                  bg-[#5b8def]
                  text-[12px]
                  font-medium
                  text-white
                  shadow-sm
                  transition
                  hover:bg-[#4e82e3]
                "
              >
                {showAddEvent ? (
                  <>
                    <ArrowLeft size={15} />
                    Back to Calendar
                  </>
                ) : (
                  <>
                    <Plus size={15} />
                    Add New Event
                  </>
                )}
              </button>
            </div>

            {/* Going to */}
            <div className="border-b border-[#edf0f5] px-5 py-5">
              <h2 className="text-[14px] font-semibold text-[#171b24]">
                You are going to
              </h2>
            </div>

            {/* Events */}
            <div>
              <SidebarEvent event={designEvent} />
              <SidebarEvent event={weekendEvent} />
              <SidebarEvent event={glastonburyEvent} />
              <SidebarEvent event={ultraEvent} />

              <div className="px-5 py-4">
                <button
                  type="button"
                  className="
                    rounded-[6px]
                    bg-[#f1f4f8]
                    px-5
                    py-2
                    text-[11px]
                    font-medium
                    text-[#4f5968]
                  "
                >
                  See More
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          {showAddEvent ? (
            <AddNewEventForm onBack={backToCalendar} />
          ) : (
            <div className="min-w-0 p-4 md:p-6">

              {/* Calendar header */}
              <div className="mb-5 flex items-center justify-between">

                <button
                  type="button"
                  className="text-[11px] text-[#7f8795]"
                >
                  Today
                </button>

                <div className="flex items-center gap-5">

                  <button
                    type="button"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-[6px]
                      border
                      border-[#e3e7ed]
                      text-[#667085]
                    "
                  >
                    <ChevronLeft size={17} />
                  </button>

                  <h2 className="text-[17px] font-semibold text-[#20242b]">
                    October 2019
                  </h2>

                  <button
                    type="button"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-[6px]
                      border
                      border-[#e3e7ed]
                      text-[#667085]
                    "
                  >
                    <ChevronRight size={17} />
                  </button>

                </div>

                {/* View buttons */}
                <div className="flex overflow-hidden rounded-[6px] border border-[#e2e6ec]">

                  <button
                    type="button"
                    className="h-9 px-4 text-[11px] text-[#687386]"
                  >
                    Day
                  </button>

                  <button
                    type="button"
                    className="
                      h-9
                      border-l
                      border-[#e2e6ec]
                      px-4
                      text-[11px]
                      text-[#687386]
                    "
                  >
                    Week
                  </button>

                  <button
                    type="button"
                    className="
                      h-9
                      bg-[#5b8def]
                      px-4
                      text-[11px]
                      font-medium
                      text-white
                    "
                  >
                    Month
                  </button>

                </div>
              </div>

              {/* Calendar */}
              <div className="overflow-hidden rounded-[10px] border border-[#e5e9ef]">

                {/* Week names */}
                <div className="grid grid-cols-7 bg-[#f8f9fb]">
                  {[
                    "MON",
                    "TUE",
                    "WED",
                    "THE",
                    "FRI",
                    "SAT",
                    "SUN",
                  ].map((day) => (
                    <div
                      key={day}
                      className="
                        flex
                        h-[42px]
                        items-center
                        justify-center
                        border-r
                        border-[#e8ebf0]
                        text-[10px]
                        font-medium
                        text-[#566276]
                        last:border-r-0
                      "
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar weeks */}
                <div className="relative">
                  {weeks.map((week, weekIndex) => (
                    <div
                      key={weekIndex}
                      className="grid grid-cols-7"
                    >
                      {week.map((date, dayIndex) => {

                        const isDesign =
                          weekIndex === 1 &&
                          dayIndex === 1;

                        const isWeekend =
                          weekIndex === 3 &&
                          dayIndex === 0;

                        const isGlastonbury =
                          weekIndex === 3 &&
                          dayIndex === 4;

                        const isUltra =
                          weekIndex === 4 &&
                          dayIndex === 2;

                        return (
                          <div
                            key={`${weekIndex}-${dayIndex}`}
                            className={`
                              relative
                              h-[105px]
                              border-b
                              border-r
                              border-[#e8ebf0]
                              p-3
                              last:border-r-0
                              ${
                                date.muted
                                  ? "bg-[#fbfcfe]"
                                  : "bg-white"
                              }
                            `}
                          >
                            {/* Date */}
                            <span
                              className={`
                                text-[10px]
                                ${
                                  date.muted
                                    ? "text-[#c3c9d2]"
                                    : "text-[#566276]"
                                }
                              `}
                            >
                              {date.day}
                            </span>

                            {/* Design Conference */}
                            {isDesign && (
                              <CalendarEvent
                                event={designEvent}
                                onClick={() =>
                                  setSelectedEvent(
                                    selectedEvent === "design"
                                      ? null
                                      : "design"
                                  )
                                }
                                className="top-[52px]"
                              />
                            )}

                            {/* Weekend Festival */}
                            {isWeekend && (
                              <CalendarEvent
                                event={weekendEvent}
                                onClick={() =>
                                  setSelectedEvent(null)
                                }
                                className="top-[52px]"
                              />
                            )}

                            {/* Glastonbury */}
                            {isGlastonbury && (
                              <CalendarEvent
                                event={glastonburyEvent}
                                onClick={() =>
                                  setSelectedEvent(null)
                                }
                                className="top-[52px]"
                              />
                            )}

                            {/* Ultra Europe */}
                            {isUltra && (
                              <CalendarEvent
                                event={ultraEvent}
                                onClick={() =>
                                  setSelectedEvent(null)
                                }
                                className="top-[52px]"
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}

                  {/* Design Conference popup */}
                  {selectedEvent === "design" && (
                    <DesignConferencePopup />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}