import Image from "next/image";
import HeaderIcon from "@/svg's/HeaderIcon";

const Header = () => {
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
        Khalid Hassan
      </div>
    </header>
  );
};

export default Header;
