// import React, { useState } from "react";

// import GroupAdmins from "../assets/images/GroupAdmins.json";
// import Lottie from "lottie-react";

const FeatureCard = ({
  title,
  description,
  image,
  slider,
}: {
  title: string;
  description: string;
  image: string;
  slider?: boolean;
}) => {
  return (
    // <div
    //   className={`flex items-center flex-col p-5  shadow-card border rounded-2xl ${
    //     slider ? "h-[555px] mx-2" : "h-full"
    //   } bg-[#f7fcf8] `}
    // >
    <div className={`flex items-center flex-col p-5`}>
      {/* <img className="w-[55px] h-[55px]" src={image} alt="logo" /> */}
      <img className="w-[100px] mb-4" src={image} alt="logo" />
      {/* <Lottie animationData={GroupAdmins} /> */}

      <div className="xl:text-xl font-semibold">{title}</div>
      {/* {description.split(".").map((word: string) => (
        <div className="text-sm text-gray-500 my-1 text-center">{word}.</div>
      ))} */}
      {/* <div className="flex-grow"></div> */}

      <div className="  w-full hover:bg-green-50 text-center p-2 rounded-2xl cursor-pointer text-green-700 text-sm font-semibold">
        Learn More
      </div>
    </div>
  );
};

export default FeatureCard;
