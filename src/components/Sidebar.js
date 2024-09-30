import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import DashboardIcon from "@/svg's/Sidebar/DashboardIcon";
import LeavesIcon from "@/svg's/Sidebar/LeavesIcon";
import EventsIcon from "@/svg's/Sidebar/EventsIcon";
import LogoutIcon from "@/svg's/Sidebar/LogoutIcon";
import AnnouncementsIcon from "@/svg's/Sidebar/AnnouncementsIcon";
import { AdminIcon } from "@/svg's/Sidebar/AdminIcon";
import UsersIcon from "@/svg's/Sidebar/UsersIcon";
import Modal from "./Modal";
import LogoutConfirmation from "./LogoutModal";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside className="bg-white min-w-[220px] text-SidebarNotSelected p-4 h-[calc(100dvh-76px)] overflow-auto">
      <div
        onClick={() => router.push("/")}
        className={`flex gap-2 items-center mb-3 py-3 px-4 rounded-[8px] ${
          pathname == "/" && "bg-SidebarSelectedBackGround text-SidebarSelected"
        } cursor-pointer hover:bg-SidebarSelectedBackGround`}
      >
        <DashboardIcon color={pathname == "/" ? "#0171EA" : "#8D98AF"} />
        {open && "Dashboard"}
      </div>
      <div
        onClick={() => router.push("/leaves")}
        className={`flex gap-2 items-center mb-3 py-3 px-4 rounded-[8px] ${
          pathname == "/leaves" &&
          "bg-SidebarSelectedBackGround text-SidebarSelected"
        } cursor-pointer hover:bg-SidebarSelectedBackGround`}
      >
        <LeavesIcon color={pathname == "/leaves" ? "#0171EA" : "#8D98AF"} />
        {open && "Leaves"}
      </div>

      {/* <div
        onClick={() => router.push("/events")}
        className={`flex gap-2 items-center mb-3 py-3 px-4 rounded-[8px] ${
          pathname == "/events" &&
          "bg-SidebarSelectedBackGround text-SidebarSelected"
        } cursor-pointer hover:bg-SidebarSelectedBackGround`}
      >
        <EventsIcon color={pathname == "/events" ? "#0171EA" : "#8D98AF"} />

        {open && "Events"}
      </div>
      <div
        onClick={() => router.push("/announcements")}
        className={`flex gap-2 items-center mb-3 py-3 px-4 rounded-[8px] ${
          pathname == "/announcements" &&
          "bg-SidebarSelectedBackGround text-SidebarSelected"
        } cursor-pointer hover:bg-SidebarSelectedBackGround`}
      >
        <AnnouncementsIcon
          color={pathname == "/announcements" ? "#0171EA" : "#8D98AF"}
        />
        {open && "Announcements"}
      </div> */}
      
      <div
        onClick={() => router.push("/admin")}
        className={`flex gap-2 items-center mb-3 py-3 px-4 rounded-[8px] ${
          pathname == "/admin" &&
          "bg-SidebarSelectedBackGround text-SidebarSelected"
        } cursor-pointer hover:bg-SidebarSelectedBackGround`}
      >
        <AdminIcon color={pathname == "/admin" ? "#0171EA" : "#8D98AF"} />
        {open && "Admin"}
      </div>
      <div
        onClick={() => router.push("/users")}
        className={`flex gap-2 items-center mb-3 py-3 px-4 rounded-[8px] ${
          pathname == "/users" &&
          "bg-SidebarSelectedBackGround text-SidebarSelected"
        } cursor-pointer hover:bg-SidebarSelectedBackGround`}
      >
        <UsersIcon color={pathname == "/users" ? "#0171EA" : "#8D98AF"} />
        {open && "Users"}
      </div>

      <div className="my-8 border-t border-[#F1F1F5]" />

      <div
        className={`flex gap-2 items-center mb-3 py-3 px-4 rounded-[8px] hover:bg-SidebarSelectedBackGround cursor-pointer`}
        onClick={() => setIsModalOpen(true)}
      >
        <LogoutIcon color={"#8D98AF"} />
        {open && "Logout"}
      </div>
      <Modal isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <LogoutConfirmation closeModal={() => setIsModalOpen(false)} />
      </Modal>
    </aside>
  );
};

export default Sidebar;
