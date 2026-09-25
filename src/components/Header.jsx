import { Search, Bell, ChevronDown, Menu } from "lucide-react";
import moniroy from "../assets/Moniroy.png";
import ukFlag from "../assets/uk-flag.png";

function Header({ setIsSidebarOpen }) {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-5 sm:px-7 lg:px-8">
      
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
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
            className="w-full h-11 pl-11 pr-4 rounded-full border border-gray-200 bg-white text-sm text-gray-700 outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 sm:gap-6">
        
        {/* Notification */}
        <button className="relative text-gray-500 hover:text-gray-700">
          <Bell size={22} />

          {/* Notification Dot */}
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* Language */}
        <div className="hidden sm:flex items-center gap-2 cursor-pointer">
          <img
            src={ukFlag}
            alt="UK Flag"
            className="w-6 h-4 object-cover rounded-sm"
          />

          <span className="text-sm text-gray-700">English</span>

          <ChevronDown size={15} className="text-gray-500" />
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2.5 cursor-pointer">
          <img
            src={moniroy}
            alt="Moni Roy"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div className="hidden sm:block leading-tight">
            <p className="text-sm font-medium text-gray-800">
              Moni Roy
            </p>

            <p className="text-xs text-gray-400">
              Admin
            </p>
          </div>

          <ChevronDown
            size={16}
            className="text-gray-500 hidden sm:block"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;