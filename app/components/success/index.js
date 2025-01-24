import Image from "next/image";
import customer1 from "../../assets/customer1.png";
import customer2 from "../../assets/customer2.png";

const Success = () => {
  const successStories = [
    {
      image: customer1,
      name: "Amanda K",
      role: "Entrepreneur",
      quote:
        '"I thought I knew how to breathe—until I used the CapnoTrainer GO. This device opened my eyes to habits I never realized were harming me. I feel more energized and focused than ever before!"',
    },
    {
      image: customer2,
      name: "Dr. Michael J",
      role: "Clinical Psychologist",
      quote:
        '"As a therapist, the CapnoTrainer®GO has completely transformed how I work with clients. It\'s a game-changer in helping people tackle anxiety and performance issues."',
    },
  ];

  return (
    <>
      <div className="max-md:hidden w-full bg-[#E6F2F2] h-[395px] relative overflow-hidden text-left text-[16px] text-[#008080] font-nunito">
        <div className="absolute top-[calc(50%-56.5px)] left-[calc(50%-720px)] bg-[#008080] w-[1440px] h-[92px]"></div>

        {successStories.map((story, index) => (
          <>
            <div
              key={index}
              className={`absolute max-xl:hidden top-[138px] ${
                index === 0 ? "left-[80px]" : "right-[80px]"
              } rounded-[10px] bg-white border border-[#008080] box-border w-[570px] h-[207px]`}
            >
              <div className="absolute top-0 left-0 rounded-[10px] bg-[#E6F2F2] shadow-[0px_33px_9px_rgba(0,0,0,0),0px_21px_9px_rgba(0,0,0,0.01),0px_12px_7px_rgba(0,0,0,0.05),0px_5px_5px_rgba(0,0,0,0.09),0px_1px_3px_rgba(0,0,0,0.1)] flex flex-row items-center justify-center p-[20px]">
                <div className="w-[528px] relative font-bold inline-block flex-shrink-0">
                  {story.quote}
                </div>
              </div>
              <div className="absolute top-[129px] left-48 flex flex-row items-start justify-start gap-[18px] text-[#101010]">
                <Image
                  className="w-[53px] h-[53px] relative rounded-full object-cover"
                  width={53}
                  height={53}
                  alt={`...${story.name}`}
                  src={story.image}
                />
                <div className="flex flex-col items-start justify-start gap-[5px]">
                  <b className="self-stretch relative">{story.name}</b>
                  <div className="self-stretch relative">{story.role}</div>
                </div>
              </div>
            </div>
            <div
              key={index}
              className={`absolute max-xl:hidden top-[138px] ${
                index === 0 ? "left-[80px]" : "right-[80px]"
              } rounded-[10px] bg-white border border-[#008080] box-border w-[570px] h-[207px]`}
            >
              <div className="absolute top-0 left-0 rounded-[10px] bg-[#E6F2F2] shadow-[0px_33px_9px_rgba(0,0,0,0),0px_21px_9px_rgba(0,0,0,0.01),0px_12px_7px_rgba(0,0,0,0.05),0px_5px_5px_rgba(0,0,0,0.09),0px_1px_3px_rgba(0,0,0,0.1)] flex flex-row items-center justify-center p-[20px]">
                <div className="w-[528px] relative font-bold inline-block flex-shrink-0">
                  {story.quote}
                </div>
              </div>
              <div className="absolute top-[129px] left-48 flex flex-row items-start justify-start gap-[18px] text-[#101010]">
                <Image
                  className="w-[53px] h-[53px] relative rounded-full object-cover"
                  width={53}
                  height={53}
                  alt={`...${story.name}`}
                  src={story.image}
                />
                <div className="flex flex-col items-start justify-start gap-[5px]">
                  <b className="self-stretch relative">{story.name}</b>
                  <div className="self-stretch relative">{story.role}</div>
                </div>
              </div>
            </div>
          </>
        ))}

        <p className="text-center max-md:text-[30px] leading-normal  text-[40px] font-spectral font-bold text-black mt-5">
          REAL SUCCESS STORIES
        </p>
      </div>
      <div className="xl:hidden">
        <p className="text-center max-md:text-[30px] leading-normal  text-[40px] font-spectral font-bold text-black mt-5">
          REAL SUCCESS STORIES
        </p>
        {successStories?.map((story, index) => (
          <div key={index} className="bg-[#E6F2F2]">
            <div className="flex flex-col my-10 gap-5">
              <p className="px-5 text-[#008080] font-nunito mt-4">
                {story.quote}
              </p>

              <div className="bg-white flex items-center justify-center gap-5 p-3">
                <Image
                  src={story.image}
                  alt="customer1"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col gap-2">
                  <p className="font-bold">{story.name}</p>
                  <span className="text-gray-600">{story.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Success;
