import React from "react";
import Logo from "../../assets/Breathe matters Logo (1).png";
import Image from "next/image";
import heroElipse from "../../assets/hero-elipse.png";

const Header = () => {
  return (
    <header className="flex justify-between items-end w-full py-4">
      <div>
        <Image
          src={heroElipse}
          alt="...heroelipse"
          className="absolute top-0 right-0"
        />
        <Image
          src={Logo}
          alt="brathe Matter Logo"
          style={{
            position: "relative",
            zIndex: "999",
          }}
        />
      </div>
      <span className="flex items-center justify-center">
        <button className="text-white font-lucida bg-[#008080] py-3 px-[19px] rounded-[8px] relative z-10">
          Book Now
        </button>
      </span>
    </header>
  );
};

export default Header;
