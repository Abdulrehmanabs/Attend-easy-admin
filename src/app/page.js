import DashboardEvents from "@/components/dashboard/Events";
import Header from "@/components/dashboard/Header";
import DashboardLeaves from "@/components/dashboard/RequestedLeaves";

export default function Home() {
  return (
    <div className="bg-gray-100 p-4 flex flex-col gap-4">
      <Header />
      <DashboardLeaves />
      <DashboardEvents />
    </div>
  );
}
