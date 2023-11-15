"use client";

import Hero from "./_components/Hero";
import { useState, useEffect } from "react";
import axios from "axios";
import { Repos, User } from "@/types";
import UserDetails from "./_components/UserDetails";
import SearchImage from "../public/SearchImage.jpg";
import Image from "next/image";

export default function Home() {
  const [searchedUser, setSearchedUser] = useState<User>(null);
  const [repos, setRepos] = useState<Repos[]>([]);
  const [initialReposToShow, setInitialReposToShow] = useState<Repos[]>([]);

  const setUserDetails = (user: User) => {
    setSearchedUser(user);
  };

  useEffect(() => {
    if (searchedUser) {
      getRepos().then((res) => {
        //console.log(res.data);
        setRepos(res.data);
        setInitialReposToShow(res.data.slice(0, 7));
      });
    }
  }, [searchedUser]);

  async function getRepos() {
    const repos = await axios.get(`/api/repos/${searchedUser?.login}`);
    return repos;
  }

  const viewAllRepositories = () => {
    setInitialReposToShow(repos);
  };

  return (
    <div className="h-full w-full">
      <Hero setUserDetails={setUserDetails} />
      <div className="w-full h-full">
        {searchedUser && (
          <UserDetails
            searchedUser={searchedUser}
            initialReposToShow={initialReposToShow}
            repos={repos}
            viewAllRepositories={viewAllRepositories}
          />
        )}
        {!searchedUser && (
          <div className="flex flex-col justify-center items-center h-fit mt-6">
            <p className="text-[#abb4c2] text-4xl text-center">
              Search for users to view their Github Profiles!!
            </p>
            <Image
              src={SearchImage}
              alt="search-image"
              className="object-contain mt-6 mb-6 "
              height={150}
              width={150}
            />
          </div>
        )}
      </div>
    </div>
  );
}
