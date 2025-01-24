import React from "react";
import knosis from "../../assets/KNOSIS.png";
import cruz from "../../assets/Dr Cruz.png";
import airway from "../../assets/Airway 1.png";
import conspire from "../../assets/conspire logo.png";
import Image from "next/image";

const Collaborators = () => {
  return (
    <div className="px-10 flex max-md:flex-col items-center md:justify-between my-10">
      <Image src={knosis} alt="...knosis" />
      <Image src={cruz} alt="...cruz" />
      <Image src={airway} alt="...airway" />
      <Image src={conspire} alt="...conspire" />
    </div>
  );
};

export default Collaborators;
