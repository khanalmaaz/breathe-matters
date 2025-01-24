import React from "react";
import OfferCard from "../offer card";
import wellness from "../../assets/Wellness Enthusiasts.png";
import practitioners from "../../assets/Health Practitioners.png";
import athletes from "../../assets/Athletes & Performers.png";
import healthcare from "../../assets/Healthcare Professionals.png";
import educators from "../../assets/Educators & Trainers.png";

const weOfferData = [
  {
    title: "Wellness Enthusiasts",
    subtitle:
      "Achieve better sleep, reduce anxiety, and enhance overall vitality.",
    img: wellness.src,
  },
  {
    title: "Health Practitioners",
    subtitle:
      "Provide clients with revolutionary breathing behavior analysis for lasting results.",
    img: practitioners,
  },
  {
    title: "Athletes & Performers",
    subtitle: "Boost endurance, focus, and physical resilience.",
    img: athletes,
  },
  {
    title: "Healthcare Professionals",
    subtitle:
      "Enhance patient care with cutting-edge breathing assessment tools.",
    img: healthcare,
  },
  {
    title: "Educators & Trainers",
    subtitle:
      "Incorporate evidence-based breathing techniques into your teaching or coaching.",
    img: educators,
  },
];

const WeOffer = () => {
  return (
    <div className="my-10 max-md:my-16">
      <h2 className="text-center max-md:text-[26px] diffTheCapnotrainer">
        Who Is the CapnoTrainer® GO For?
      </h2>
      <div className="grid grid-cols-3 gap-6  max-lg:grid-cols-1">
        {weOfferData.slice(0, 3).map((obj, index) => (
          <OfferCard
            key={index}
            bgImg={obj.img}
            title={obj.title}
            subtitle={obj.subtitle}
          />
        ))}
      </div>
      <div className="flex gap-6 max-md:flex-col max-md:items-center max-md:w-full mt-6">
        {weOfferData.slice(3).map((obj, index) => (
          <div key={index} className="w-1/2 max-md:w-full">
            <OfferCard
              bgImg={obj.img}
              title={obj.title}
              subtitle={obj.subtitle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default WeOffer;
