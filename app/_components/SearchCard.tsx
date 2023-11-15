import React from "react";
import Image from "next/image";
import { SearchCardProps } from "@/types";

const SearchCard = ({ imgUrl, name, bio }: SearchCardProps) => {
  return (
    <div className="bg-[#111729] rounded-lg p-2 flex gap-3 items-center w-fit min-w-[250px]">
      <Image
        src={imgUrl}
        className="object-contain rounded-lg"
        alt="cover"
        height={50}
        width={50}
      />
      <div className="flex flex-col gap-y-1">
        <p className="text-white text-xs">{name}</p>
        <p className="text-[#abb4c2] text-xs">{bio}</p>
      </div>
    </div>
  );
};

export default SearchCard;
