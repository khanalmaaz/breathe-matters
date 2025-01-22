import React from "react";
import Logo from "../../assets/BM Salespage/Breathe matters Logo (1).png";
import Image from "next/image";
const Header = () => {
  return (
    <header className="flex justify-between w-full flex-shrink py-4">
      <div>
        <Image src={Logo} alt="brathe Matter Logo" />
      </div>
      <button className="text-white font-lucida bg-[#008080] py-3 px-[19px] rounded-lg text-[16px] font-semibold">
        Book Now
      </button>
    </header>
  );
};

export default Header;
