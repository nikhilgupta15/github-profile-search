import React from "react";

interface StatCardProps {
  type: string;
  value: number | undefined | string;
}

const StatCard = ({ type, value }: StatCardProps) => {
  return (
    <div className="bg-[#111729] flex justify-around items-center rounded-lg ">
      <p className="text-[#4A5567] p-3">{type}</p>
      <p className="h-full text-[28px] text-[#4A5567] ">|</p>
      <p className="text-white p-3">{value}</p>
    </div>
  );
};

export default StatCard;
