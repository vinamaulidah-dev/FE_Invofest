import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    alert("Logout berhasil!");
    navigate("/login");
  };

  return (
    <div className="flex w-full h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#7A1C3D] text-white flex flex-col justify-between shadow-lg">

        {/* LOGO */}
        <div className="h-16 flex items-center justify-center border-b border-white/20">
          <h2 className="text-xl font-bold tracking-wide">
            INVOFEST
          </h2>
        </div>

        {/* MENU */}
        <nav className="flex flex-col gap-2 p-4 text-sm">

          <Link
            to="/dashboard"
            className="px-4 py-2 rounded-lg hover:bg-[#5C142E] transition"
          >
            Dashboard
          </Link>

          <Link
            to="/dashboard/category"
            className="px-4 py-2 rounded-lg hover:bg-[#5C142E] transition"
          >
            Category Event
          </Link>

          <Link
            to="/dashboard/event"
            className="px-4 py-2 rounded-lg hover:bg-[#5C142E] transition"
          >
            Event
          </Link>

          <Link
            to="/dashboard/pembicara"
            className="px-4 py-2 rounded-lg hover:bg-[#5C142E] transition"
          >
            Pembicara
          </Link>

        </nav>

        {/* LOGOUT */}
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full bg-[#A52A2A] hover:bg-[#8B1E1E] py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>

      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-6 overflow-y-auto">

        {/* TOP RIGHT ADMIN */}
        <div className="flex justify-end mb-2">
          <Link
            to="/dashboard/biodata"
            className="bg-white rounded-lg shadow px-3 py-2 flex items-center gap-2 hover:shadow-md transition"
          >

            {/* FOTO */}
            <div className="w-9 h-9 rounded-full bg-[#7A1C3D] flex items-center justify-center text-white text-sm font-semibold">
              V
            </div>

            {/* INFO */}
            <div className="leading-tight">
              <h2 className="text-sm font-semibold text-[#7A1C3D]">
                Vina Maulidah
              </h2>

              <p className="text-[11px] text-gray-500">
                Mahasiswa TI
              </p>
            </div>

          </Link>
        </div>

        {/* PAGE */}
        <Outlet />

      </main>

    </div>
  );
}