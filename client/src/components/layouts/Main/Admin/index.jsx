import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import AdminHeader from "../../Header/Admin";

const AdminLayout = () => {
  return (
    <div className="w-full h-screen grid lg:grid-cols-[230px_auto] grid-cols-[50px_auto] bg-specwhite text-darkblue">
      <Sidebar />
      <div className="w-full relative">
        <AdminHeader />
        <div className="mt-[60px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
