import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Favorites from "./pages/Favorites";
import Inbox from "./pages/Inbox";
import Starred from "./pages/Starred";
import EmailDetails from "./pages/EmailDetails";
import OrderLists from "./pages/OrderLists";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f5f6fa]">

        {/* ================= SIDEBAR ================= */}

        <Sidebar
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />

        {/* ================= MAIN AREA ================= */}

        <div className="min-h-screen lg:ml-64">

          {/* ================= HEADER ================= */}

          <Header
            setIsSidebarOpen={setIsSidebarOpen}
          />

          {/* ================= PAGE CONTENT ================= */}

          <main className="p-5 sm:p-7">

            <Routes>

              {/* ================= DASHBOARD ================= */}

              <Route
                path="/"
                element={<Dashboard />}
              />

              {/* ================= PRODUCTS ================= */}

              <Route
                path="/products"
                element={<Products />}
              />

              {/* ================= FAVORITES ================= */}

              <Route
                path="/favorites"
                element={<Favorites />}
              />

              {/* ================= INBOX ================= */}

              <Route
                path="/inbox"
                element={<Inbox />}
              />

              {/* ================= STARRED ================= */}

              <Route
                path="/starred"
                element={<Starred />}
              />

              {/* ================= EMAIL DETAILS ================= */}

              <Route
                path="/inbox/:id"
                element={<EmailDetails />}
              />

              {/* ================= ORDER LISTS ================= */}

              <Route
                path="/orders"
                element={<OrderLists />}
              />

              {/* ================= UNKNOWN URL ================= */}

              <Route
                path="*"
                element={<Navigate to="/" replace />}
              />

            </Routes>

          </main>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;