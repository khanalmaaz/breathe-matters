const HowWeWork = () => {
  const cards = [
    {
      title: "Measure What Matters",
      description:
        "Monitor your End-Tidal CO2 (PetCO2) in real time to assess how effectively your breathing supports acid-base balance and health.",
    },
    {
      title: "Customized Interventions",
      description:
        "Based on your unique breathing habits, receive tailored exercises and interventions to dismantle bad habits and cultivate optimal ones.",
    },
    {
      title: "Visualize Your Breathing",
      description:
        "See your breathing habits on a capnogram, a dynamic display of your inhalation and exhalation patterns. Pinpoint issues like overbreathing, gasps, or shallow breaths.",
    },
    {
      title: "Engage in Practicums",
      description:
        "Explore playful self-intervention techniques to realign breathing mechanics with your body’s needs—whether through nose-breathing challenges or CO2 biofeedback training.",
    },
  ];

  return (
    <div className="frameParent frameParentBottom">
      <div className="   from-[#E6F2F2] via-[#E6F2F2] to-transparent opacity-100 md:bg-gradient-to-r md:from-[#E6F2F2] md:via-[#E6F2F2] md:to-transparent md:w-[70%] md:py-24 px-12 py-1">
        <h2 className="howTheCapnotrainer text-start">
          How the CapnoTrainer<sup>®</sup> GO Works
        </h2>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:place-items-center max-lg:justify-center gap-5 text-white my-5 lg:pr-16">
          {cards?.map((card, index) => (
            <div
              key={index}
              className={`section  ${
                index % 2 === 0
                  ? "h-40 bg-[#008080]"
                  : "h-[182px] bg-[#008080]/70"
              }`}
            >
              <b className="text-white text-[20px] font-bold font-nunito">
                {card.title}
              </b>
              <div className="text-white text-[16px] font-normal font-nunito">
                {card.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
