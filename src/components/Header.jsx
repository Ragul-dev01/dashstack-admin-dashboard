import { useState } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  Menu,
  Settings,
  KeyRound,
  RefreshCw,
  UserRound,
  LogOut,
  Check,
  CalendarDays,
  CircleAlert,
} from "lucide-react";

import moniroy from "../assets/Moniroy.png";
import ukFlag from "../assets/uk-flag.png";
import franceFlag from "../assets/france-flag.png";
import spainFlag from "../assets/spain-flag.png";

function Header({ setIsSidebarOpen }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "English",
    flag: ukFlag,
  });

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const handleLanguageChange = (name, flag) => {
    setSelectedLanguage({
      name,
      flag,
    });

    setOpenDropdown(null);
  };

  return (
    <header className="relative z-50 flex h-20 items-center justify-between border-b border-gray-100 bg-white px-5 sm:px-7 lg:px-8">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu */}
        <button
          type="button"
          onClick={() => setIsSidebarOpen(true)}
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
        >
          <Menu size={22} />
        </button>

        {/* Search */}
        <div className="relative w-48 sm:w-64 lg:w-80">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search"
            className="h-11 w-full rounded-full border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-700 outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Notification */}
        <div className="relative">
          <button
            type="button"
            onClick={() => toggleDropdown("notification")}
            className="relative text-gray-500 hover:text-gray-700"
          >
            <Bell size={22} />

            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ff5b6e] px-1 text-[9px] font-medium text-white">
              6
            </span>
          </button>

          {openDropdown === "notification" && (
            <div className="absolute right-0 top-10 w-[295px] overflow-hidden rounded-[10px] border border-gray-100 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              {/* Title */}
              <div className="border-b border-gray-100 px-5 py-4">
                <p className="text-[14px] font-medium text-gray-700">
                  Notification
                </p>
              </div>

              {/* Settings */}
              <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e5f1ff] text-[#5b8def]">
                  <Settings size={18} />
                </div>

                <div>
                  <p className="text-[13px] font-medium text-gray-700">
                    Settings
                  </p>
                  <p className="text-[11px] text-gray-400">
                    Update DashBoard
                  </p>
                </div>
              </div>

              {/* Event Update */}
              <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffe4f6] text-[#ed7bc9]">
                  <CalendarDays size={18} />
                </div>

                <div>
                  <p className="text-[13px] font-medium text-gray-700">
                    Event Update
                  </p>
                  <p className="text-[11px] text-gray-400">
                    An event date update again
                  </p>
                </div>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eee7ff] text-[#9a7bf5]">
                  <UserRound size={18} />
                </div>

                <div>
                  <p className="text-[13px] font-medium text-gray-700">
                    Profile
                  </p>
                  <p className="text-[11px] text-gray-400">
                    Update your profile
                  </p>
                </div>
              </div>

              {/* Application Error */}
              <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffe3e3] text-[#ff7b7b]">
                  <CircleAlert size={18} />
                </div>

                <div>
                  <p className="text-[13px] font-medium text-gray-700">
                    Application Error
                  </p>
                  <p className="text-[11px] text-gray-400">
                    Check Your running application
                  </p>
                </div>
              </div>

              {/* See all */}
              <button
                type="button"
                className="flex h-[48px] w-full items-center justify-center text-[12px] text-gray-400 hover:bg-gray-50"
              >
                See all notification
              </button>
            </div>
          )}
        </div>

        {/* Language */}
        <div className="relative hidden sm:block">
          <button
            type="button"
            onClick={() => toggleDropdown("language")}
            className="flex items-center gap-2"
          >
            <img
              src={selectedLanguage.flag}
              alt={selectedLanguage.name}
              className="h-5 w-7 rounded-sm object-cover"
            />

            <span className="text-sm text-gray-700">
              {selectedLanguage.name}
            </span>

            <ChevronDown size={15} className="text-gray-500" />
          </button>

          {openDropdown === "language" && (
            <div className="absolute right-0 top-10 w-[270px] overflow-hidden rounded-[10px] border border-gray-100 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              {/* Title */}
              <div className="border-b border-gray-100 px-5 py-4">
                <p className="text-[14px] font-medium text-gray-700">
                  Select Language
                </p>
              </div>

              {/* English */}
              <button
                type="button"
                onClick={() =>
                  handleLanguageChange("English", ukFlag)
                }
                className="flex w-full items-center justify-between border-b border-gray-100 px-5 py-4 hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={ukFlag}
                    alt="English"
                    className="h-7 w-9 object-cover"
                  />

                  <span className="text-[14px] text-gray-700">
                    English
                  </span>
                </div>

                {selectedLanguage.name === "English" && (
                  <Check size={20} className="text-gray-600" />
                )}
              </button>

              {/* French */}
              <button
                type="button"
                onClick={() =>
                  handleLanguageChange("French", franceFlag)
                }
                className="flex w-full items-center justify-between border-b border-gray-100 px-5 py-4 hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={franceFlag}
                    alt="French"
                    className="h-7 w-9 object-cover"
                  />

                  <span className="text-[14px] text-gray-700">
                    French
                  </span>
                </div>

                {selectedLanguage.name === "French" && (
                  <Check size={20} className="text-gray-600" />
                )}
              </button>

              {/* Spanish */}
              <button
                type="button"
                onClick={() =>
                  handleLanguageChange("Spanish", spainFlag)
                }
                className="flex w-full items-center justify-between px-5 py-4 hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={spainFlag}
                    alt="Spanish"
                    className="h-7 w-9 object-cover"
                  />

                  <span className="text-[14px] text-gray-700">
                    Spanish
                  </span>
                </div>

                {selectedLanguage.name === "Spanish" && (
                  <Check size={20} className="text-gray-600" />
                )}
              </button>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            type="button"
            onClick={() => toggleDropdown("profile")}
            className="flex items-center gap-2.5"
          >
            <img
              src={moniroy}
              alt="Moni Roy"
              className="h-10 w-10 rounded-full object-cover"
            />

            <div className="hidden leading-tight sm:block">
              <p className="text-sm font-medium text-gray-800">
                Moni Roy
              </p>

              <p className="text-xs text-gray-400">
                Admin
              </p>
            </div>

            <ChevronDown
              size={16}
              className="hidden text-gray-500 sm:block"
            />
          </button>

          {openDropdown === "profile" && (
            <div className="absolute right-0 top-12 w-[255px] overflow-hidden rounded-[10px] border border-gray-100 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              {/* Manage Account */}
              <button
                type="button"
                className="flex w-full items-center gap-4 border-b border-gray-100 px-5 py-4 text-left hover:bg-gray-50"
              >
                <Settings
                  size={20}
                  className="text-[#5b8def]"
                />

                <span className="text-[14px] text-gray-700">
                  Manage Account
                </span>
              </button>

              {/* Change Password */}
              <button
                type="button"
                className="flex w-full items-center gap-4 border-b border-gray-100 px-5 py-4 text-left hover:bg-gray-50"
              >
                <KeyRound
                  size={20}
                  className="text-[#e783d0]"
                />

                <span className="text-[14px] text-gray-700">
                  Change Password
                </span>
              </button>

              {/* Activity Log */}
              <button
                type="button"
                className="flex w-full items-center gap-4 border-b border-gray-100 px-5 py-4 text-left hover:bg-gray-50"
              >
                <RefreshCw
                  size={20}
                  className="text-[#a58af5]"
                />

                <span className="text-[14px] text-gray-700">
                  Activity Log
                </span>
              </button>

              {/* Log out */}
              <button
                type="button"
                className="flex w-full items-center gap-4 px-5 py-4 text-left hover:bg-gray-50"
              >
                <LogOut
                  size={20}
                  className="text-[#ff8585]"
                />

                <span className="text-[14px] text-gray-700">
                  Log out
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;