import React from "react";
import knosis from "../../assets/KNOSIS.png";
import cruz from "../../assets/Dr Cruz.png";
import airway from "../../assets/Airway 1.png";
import conspire from "../../assets/conspire logo.png";
import Image from "next/image";

const Collaborators = () => {
  return (
    <div className="lg:px-40 px-20 flex max-lg:grid max-lg:grid-cols-2 items-center lg:justify-between my-10">
      <Image src={knosis} alt="...knosis" />
      <Image src={cruz} alt="...cruz" />
      <Image src={airway} alt="...airway" />
      <Image src={conspire} alt="...conspire" />
    </div>
  );
};

export default Collaborators;
// import React from "react";
// import knosis from "../../assets/KNOSIS.png";
// import cruz from "../../assets/Dr Cruz.png";
// import airway from "../../assets/Airway 1.png";
// import conspire from "../../assets/conspire logo.png";
// import Image from "next/image";

// const Collaborators = () => {
//   return (
//     <div className="lg:px-40 px-10 flex flex-wrap gap-10 items-center justify-center my-10 max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1">
//       <Image
//         src={knosis}
//         alt="...knosis"
//         className="w-full max-w-[200px] object-contain"
//       />
//       <Image
//         src={cruz}
//         alt="...cruz"
//         className="w-full max-w-[200px] object-contain"
//       />
//       <Image
//         src={airway}
//         alt="...airway"
//         className="w-full max-w-[200px] object-contain"
//       />
//       <Image
//         src={conspire}
//         alt="...conspire"
//         className="w-full max-w-[200px] object-contain"
//       />
//     </div>
//   );
// };

// export default Collaborators;
