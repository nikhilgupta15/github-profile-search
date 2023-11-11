import React from "react";
import Image from "next/image";
import NoImage from "../../public/no-image-found.png";
import StatCard from "./StatCard";
import RepoCard from "./RepoCard";
import { UserDetailsProps } from "@/types";

const UserDetails = ({
  searchedUser,
  initialReposToShow,
  repos,
  viewAllRepositories,
}: UserDetailsProps) => {
  return (
    <div>
      <div className="flex flex-row items-center relative ml-[10%]">
        <div className="absolute bg-[#20293A] w-[120px] h-[120px] top-[-30px] rounded-lg flex justify-center items-center">
          <Image
            src={searchedUser ? searchedUser.avatar_url : NoImage}
            className="object-contain rounded-lg"
            alt="cover"
            height={100}
            width={100}
          />
        </div>
        <div className="flex md:flex-row flex-col md items-center justify-around ml-[150px] gap-4 mt-4">
          <StatCard
            type="Followers"
            value={searchedUser ? searchedUser.followers : "Not Available"}
          />
          <StatCard
            type="Following"
            value={searchedUser ? searchedUser.following : "Not Available"}
          />
          <StatCard
            type="Location"
            value={searchedUser ? searchedUser.location : "Not Available"}
          />
        </div>
      </div>
      <div className="flex flex-col ml-[10%] mt-6">
        <p className="text-white text-4xl">
          {searchedUser ? searchedUser.name : "No Name Available"}
        </p>
        <p className="text-[#abb4c2]  mt-2">
          {searchedUser ? searchedUser.bio : "No Bio Available"}
        </p>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 ml-[10%] mt-6 w-[80%]">
        {initialReposToShow?.map((repo) => (
          <RepoCard
            name={repo.name}
            forks={repo.forks_count}
            stars={repo.stargazers_count}
            updated_at={repo.updated_at}
            description={repo.description}
          />
        ))}
      </div>
      {
        <div className="p-10 flex justify-center items-center">
          {initialReposToShow.length !== repos.length && (
            <p
              className="text-[#abb4c2] cursor-pointer"
              onClick={viewAllRepositories}
            >
              View All Repositories
            </p>
          )}
        </div>
      }
    </div>
  );
};

export default UserDetails;
