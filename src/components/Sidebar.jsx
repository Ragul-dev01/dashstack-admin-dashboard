import {
  LayoutDashboard,
  Package,
  Heart,
  Inbox,
  ClipboardList,
  Boxes,
  CreditCard,
  CalendarDays,
  ListTodo,
  UsersRound,
  FileText,
  PanelsTopLeft,
  UserRound,
  Table2,
  Settings,
  LogOut,
  X,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const mainMenu = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    name: "Products",
    icon: Package,
    path: "/products",
  },
  {
    name: "Favorites",
    icon: Heart,
    path: "/favorites",
  },
  {
    name: "Inbox",
    icon: Inbox,
    path: "/inbox",
  },
  {
    name: "Order Lists",
    icon: ClipboardList,
    path: "/orders",
  },
];

const pagesMenu = [
  {
    name: "Pricing",
    icon: CreditCard,
    path: "/pricing",
  },
  {
    name: "Calendar",
    icon: CalendarDays,
    path: "/calendar",
  },
  {
    name: "To-Do",
    icon: ListTodo,
    path: "/todo",
  },
  {
    name: "Contact",
    icon: UsersRound,
    path: "/contact",
  },
  {
    name: "Invoice",
    icon: FileText,
    path: "/invoice",
  },
  {
    name: "UI Elements",
    icon: PanelsTopLeft,
    path: "/ui-elements",
  },
  {
    name: "Team",
    icon: UserRound,
    path: "/team",
  },
  {
    name: "Table",
    icon: Table2,
    path: "/table",
  },
];

function Sidebar({ isOpen, setIsOpen }) {
  const renderMenuItem = (item) => {
    const Icon = item.icon;

    return (
      <NavLink
        key={item.name}
        to={item.path}
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          `flex w-full items-center gap-4 rounded-md px-4 py-3 text-sm font-medium transition ${
            isActive
              ? "bg-blue-600 text-white shadow-sm"
              : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          }`
        }
      >
        <Icon size={18} strokeWidth={1.8} />

        <span>{item.name}</span>
      </NavLink>
    );
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-gray-100 bg-white transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-gray-100 px-7">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-blue-600">Dash</span>
            <span className="text-gray-800">Stack</span>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-5">
          {/* Main Menu */}
          <div className="space-y-1">
            {mainMenu.map(renderMenuItem)}

            {/* =================================================
                PRODUCT STOCK
                Temporarily disabled until Product Stock page
                is implemented.
            ================================================= */}
            <div
              className="
                flex
                w-full
                cursor-default
                items-center
                gap-4
                rounded-md
                px-4
                py-3
                text-sm
                font-medium
                text-gray-600
              "
              aria-disabled="true"
            >
              <Boxes size={18} strokeWidth={1.8} />

              <span>Product Stock</span>
            </div>
          </div>

          {/* Pages */}
          <div className="mt-7">
            <p className="mb-3 px-4 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
              Pages
            </p>

            <div className="space-y-1">
              {pagesMenu.map(renderMenuItem)}
            </div>
          </div>
        </nav>

        {/* Bottom Menu */}
        <div className="border-t border-gray-100 px-4 py-4">
          {/* Settings */}
          <NavLink
            to="/settings"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex w-full items-center gap-4 rounded-md px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <Settings size={18} strokeWidth={1.8} />

            <span>Settings</span>
          </NavLink>

          {/* Logout */}
          <button
            type="button"
            className="
              flex
              w-full
              items-center
              gap-4
              rounded-md
              px-4
              py-3
              text-sm
              font-medium
              text-gray-600
              transition
              hover:bg-gray-100
            "
          >
            <LogOut size={18} strokeWidth={1.8} />

            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;