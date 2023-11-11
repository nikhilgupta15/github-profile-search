"use client";
import React from "react";
import backgroundImage from "../../public/background-image.png";
import Search from "../../public/Search.svg";
import SearchCard from "./SearchCard";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { User } from "@/types";
import NoUserFound from "./NoUserFound";

var timer: any;

const Hero = ({ setUserDetails }: { setUserDetails: (user: User) => void }) => {
  const [searchValue, setSearchValue] = useState("");
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    if (searchValue !== "") {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(async () => {
        try {
          const user = await axios.get("/api/search", {
            params: {
              query: searchValue,
            },
          });
          console.log(user);
          setUser(user.data);
        } catch (error) {
          setUser(null);
        }
      }, 500);
    }
  }, [searchValue]);

  const userClick = () => {
    setUserDetails(user);
  };

  return (
    <div className="relative">
      <Image
        src={backgroundImage}
        className="object-fill h-[300px] md:h-auto"
        alt="cover"
      />
      <div className="absolute top-[20%] left-[20%] md:left-[35%] right-[5%]">
        <div>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
              <span className="text-gray-500 sm:text-sm">
                <Image src={Search} alt="search-icon" height={15} />
              </span>
            </div>
            <input
              type="text"
              className="block rounded-md border-0 bg-[#20293A] py-1.5 pl-7 pr-20 text-gray-400  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              placeholder="username"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
          </div>
        </div>
        {user && (
          <div className="mt-2 cursor-pointer" onClick={userClick}>
            <SearchCard
              imgUrl={user.avatar_url}
              name={user.name}
              bio={user.bio}
            />
          </div>
        )}
        {!user && searchValue !== "" && (
          <div className="mt-2">
            <NoUserFound />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
