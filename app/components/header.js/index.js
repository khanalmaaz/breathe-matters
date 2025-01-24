import React from "react";
import Logo from "../../assets/Breathe matters Logo (1).png";
import Image from "next/image";
const Header = () => {
  return (
    <header className="flex justify-between items-end w-full py-4">
      <div>
        <Image src={Logo} alt="brathe Matter Logo" />
      </div>
      <span className="flex items-center justify-center">
        <button className="text-white font-lucida bg-[#008080] py-3 px-[19px] rounded-xl">
          Book Now
        </button>
      </span>
    </header>
  );
};

export default Header;
