import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
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
import ProductStock from "./pages/ProductStock";
import Pricing from "./pages/Pricing";
import Calendar from "./pages/Calendar";
import ToDo from "./pages/ToDo";
import Contact from "./pages/Contact";
import AddContact from "./pages/AddNewContact";
import Invoice from "./pages/InvoicePage";
import UIElements from "./pages/UIElements";
import Team from "./pages/Team";
import Table from "./pages/Table";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFoundPage";

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/register";

  const isNotFoundPage = location.pathname === "/404";

  if (isAuthPage) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />
      </Routes>
    );
  }

  if (isNotFoundPage) {
    return (
      <Routes>
        <Route path="/404" element={<NotFound />} />
        <Route
          path="*"
          element={<Navigate to="/404" replace />}
        />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f6fa]">
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <div className="min-h-screen lg:ml-64">
        <Header setIsSidebarOpen={setIsSidebarOpen} />

        <main className="p-5 sm:p-7">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/login" replace />}
            />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/starred" element={<Starred />} />
            <Route
              path="/inbox/:id"
              element={<EmailDetails />}
            />
            <Route path="/orders" element={<OrderLists />} />
            <Route
              path="/product-stock"
              element={<ProductStock />}
            />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/todo" element={<ToDo />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/contact/add"
              element={<AddContact />}
            />
            <Route path="/invoice" element={<Invoice />} />
            <Route
              path="/ui-elements"
              element={<UIElements />}
            />
            <Route path="/team" element={<Team />} />
            <Route path="/table" element={<Table />} />
            <Route path="/settings" element={<Settings />} />

            <Route
              path="*"
              element={<Navigate to="/404" replace />}
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;