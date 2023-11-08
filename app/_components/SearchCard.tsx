import React from "react";
import Image from "next/image";
import img from "../../public/CARWALLAH.png";

const SearchCard = () => {
  return (
    <div className="bg-[#111729] rounded-lg p-2 flex gap-3 items-center">
      <Image
        src={img}
        className="object-contain rounded-lg"
        alt="cover"
        height={50}
        width={50}
      />
      <div className="flex flex-col gap-y-1">
        <p className="text-white text-xs">.github</p>
        <p className="text-[#abb4c2] text-xs">
          Community health files for the @Github organization
        </p>
      </div>
    </div>
  );
};

export default SearchCard;
