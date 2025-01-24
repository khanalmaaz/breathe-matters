import Image from "next/image";

const OfferCard = ({ bgImg, title, subtitle }) => {
  return (
    <div className="h-[348px] flex flex-col justify-center items-center text-white p-6 rounded-lg shadow-lg relative">
      <Image
        src={bgImg}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="absolute bottom-2 flex flex-col justify-center items-center bg-[#008080] bg-opacity-60 h-[116px] w-[90%]">
        <h3 className="text-xl font-bold text-center">{title}</h3>
        <p className="text-center mt-2">{subtitle}</p>
      </div>
    </div>
  );
};

export default OfferCard;
