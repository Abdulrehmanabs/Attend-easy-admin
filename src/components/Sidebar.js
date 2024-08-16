import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import DashboardIcon from "@/svg's/DashboardIcon";
import LeavesIcon from "@/svg's/LeavesIcon";
import EventsIcon from "@/svg's/EventsIcon";
import LogoutIcon from "@/svg's/LogoutIcon";
import AnnouncementsIcon from "@/svg's/AnnouncementsIcon";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <aside className="bg-white text-SidebarNotSelected p-4 min-h-full">
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

      <div
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
      </div>

      <div
        onClick={() => {
          // localStorage.removeItem("user");
          window.location.reload();
          router.push("/logout");
        }}
        className={`flex gap-2 items-center mb-3 py-3 px-4 rounded-[8px] ${
          pathname == "/logout" &&
          "bg-SidebarSelectedBackGround text-SidebarSelected"
        } cursor-pointer hover:bg-SidebarSelectedBackGround`}
      >
        <LogoutIcon color={pathname == "/logout" ? "#0171EA" : "#8D98AF"} />
        {open && "Logout"}
      </div>
    </aside>
  );
};

export default Sidebar;
