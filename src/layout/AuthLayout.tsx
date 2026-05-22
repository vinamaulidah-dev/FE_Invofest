import { Outlet } from "react-router-dom";
import Header from "../component/Header";

export default function AuthLayout() {
  return (
    <>
      <Header />

      {/* Content tengah */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </>
  );
}