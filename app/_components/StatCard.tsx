import React from "react";

const StatCard = () => {
  return (
    <div className="bg-[#111729] flex justify-around items-center rounded-lg ">
      <p className="text-[#4A5567] p-3">Followers</p>
      <p className="h-full text-[28px] text-[#4A5567] ">|</p>
      <p className="text-white p-3">45</p>
    </div>
  );
};

export default StatCard;
