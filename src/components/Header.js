import Image from "next/image";
import HeaderIcon from "@/svg's/Sidebar/HeaderIcon";
import { useEffect, useState } from "react";

const Header = () => {
  const [email, setEmail] = useState("someone@gmail.com");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      if (user) {
        const userData = JSON.parse(user);
        setEmail(userData.email);
      }
    };
  }, []);
  return (
    <header className="text-black flex justify-between items-center px-5 py-4 bg-white">
      <span className="text-[20px] font-semibold flex items-center gap-4">
        <HeaderIcon color={"#0171EA"} />
        Attend Ease Admin Panel
      </span>
      <div
        onClick={() => {
          console.log("Admin");
        }}
        className="flex items-center gap-4 cursor-pointer"
      >
        <Image
          className="w-[44px] h-[44px] rounded-full"
          src={true ? "/AdminAvator.svg" : "https://i.pravatar.cc/300"}
          alt="AdminAvator"
          width={44}
          height={44}
          priority
        />
        <span className="capitalize">
          @{email.split("@")[0]}
        </span>          
      </div>
    </header>
  );
};

export default Header;
