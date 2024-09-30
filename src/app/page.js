import DashboardUsers from "@/components/dashboard/DashboardUsers";
import Header from "@/components/dashboard/Header";
import DashboardLeaves from "@/components/dashboard/DashboardLeaves";

export default function Home() {
  return (
    <div className="bg-gray-100 p-4 flex flex-col gap-4">
      <Header />
      <DashboardLeaves />
      <DashboardUsers />
    </div>
  );
}
