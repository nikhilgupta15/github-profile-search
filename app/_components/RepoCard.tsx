import React from "react";
import Nesting from "../../public/Nesting.svg";
import Star from "../../public/Star.svg";
import Image from "next/image";

interface RepoCardProps {
  name: string;
  forks: number;
  stars: number;
  updated_at: string;
  description: string;
}

const RepoCard = ({
  name,
  forks,
  stars,
  updated_at,
  description,
}: RepoCardProps) => {
  return (
    <div className="bg-gradient-to-r from-[#111729] to-[#1D1B48] rounded-lg p-4 max-w-full">
      <p className="text-white">{name}</p>
      <p className="text-[#abb4c2] mt-2">{description}</p>
      <div className="flex items-center gap-4 mt-2">
        <div className="flex gap-3">
          <div className="flex items-center gap-1">
            <Image src={Nesting} alt="nesting-icon" height={15} />
            <p className="text-[#dce8f96e] font-light text-sm">{forks}</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src={Star} alt="nesting-icon" height={15} />
            <p className="text-[#dce8f96e] font-light text-sm">{stars}</p>
          </div>
        </div>
        <div>
          <p className="text-[#dce8f96e] font-light text-[10px]">
            updated {new Date(updated_at).toISOString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
