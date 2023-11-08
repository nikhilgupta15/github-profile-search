import Image from "next/image";
import backgroundImage from "../public/background-image.png";
import img from "../public/CARWALLAH.png";
import StatCard from "./_components/StatCard";
import RepoCard from "./_components/RepoCard";
import Search from "../public/Search.svg";
import SearchCard from "./_components/SearchCard";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <div className="relative">
        <Image
          src={backgroundImage}
          className="object-fill h-[200px] md:h-auto"
          alt="cover"
        />
        <div className="absolute top-[20%] left-[35%]">
          <div>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                <span className="text-gray-500 sm:text-sm">
                  <Image src={Search} alt="search-icon" height={15} />
                </span>
              </div>
              <input
                type="text"
                className="block w-full rounded-md border-0 bg-[#20293A] py-1.5 pl-7 pr-20 text-gray-400  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                placeholder="username"
              />
            </div>
          </div>
          <div className="mt-2">
            <SearchCard />
          </div>
        </div>
      </div>
      <div className="bg-[#20293A] w-full h-full">
        <div className="flex flex-row items-center relative ml-[10%]">
          <div className="absolute bg-[#20293A] w-[120px] h-[120px] top-[-50px] rounded-lg flex justify-center items-center">
            <Image
              src={img}
              className="object-contain rounded-lg"
              alt="cover"
              height={100}
              width={100}
            />
          </div>
          <div className="flex md:flex-row flex-col md items-center justify-around ml-[150px] gap-4 mt-4">
            <StatCard />
            <StatCard />
            <StatCard />
          </div>
        </div>
        <div className="flex flex-col ml-[10%] mt-6">
          <p className="text-white text-4xl">GitHub</p>
          <p className="text-[#abb4c2]  mt-2">How people build software</p>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 ml-[10%] mt-6 w-[80%]">
          <RepoCard />
          <RepoCard />
        </div>
      </div>
    </div>
  );
}
