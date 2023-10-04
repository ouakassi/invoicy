import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      location.pathname === "/dashboard" ||
      location.pathname === "/dashboard/"
    ) {
      navigate("/dashboard/overview");
    }
  }, [location.pathname, navigate]);

  return (
    <div className="dashboard">
      <Sidebar />
      <Navbar />
      <main className=" min-h-screen bg-gray-200 p-4 pl-20 pt-16">
        <div className="mx-auto max-w-screen-xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
