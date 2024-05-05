import {
  CreatePlaylistIcon,
  DiscoverIcon,
  HomeIcon,
  LibraryIcon,
  LikedSongsIcon,
  MyPlaylistIcon,
  RecentIcon,
  SearchIcon,
  VolumeIcon,
} from "@/public/Icons";
import Link from "next/link";
import HeaderGreeting from "./HeaderGreeting";
const SideBar = () => {
  return (
    <div className="h-screen custom-scroll tie-background hidden md:block max-w-[297px] min-w-[297px] bg-repeat bg-sidebar-vectors pb-[102px] overflow-y-scroll">
      <HeaderGreeting />
      <div className="mx-[33px] space-y-[17px]">
        <Link
          href=""
          className="flex items-center space-x-[15.03px] mt-[38px] hover:translate-x-3 duration-100 hover:text-[#fbba12]"
        >
          <HomeIcon />
          <span className="font-semibold text-base tracking-wide ">Home</span>
        </Link>{" "}
        <div className="border-b-[#70707026] pb-[22.5px] border-b">
          <Link
            href=""
            className="flex items-center space-x-[15.03px] hover:translate-x-3 duration-100 hover:text-[#fbba12]"
          >
            <DiscoverIcon />
            <span className="font-semibold hover:text-[#fbba12] text-base tracking-wide">
              Discover
            </span>
          </Link>
        </div>
        <Link
          href=""
          className="flex items-center space-x-[15.03px] hover:translate-x-3 duration-100 hover:text-[#fbba12]"
        >
          <LibraryIcon />
          <span className="font-semibold hover:text-[#fbba12] text-base tracking-wide">
            Your Library
          </span>
        </Link>{" "}
        <Link
          href=""
          className="flex items-center space-x-[15.03px] hover:translate-x-3 duration-100 hover:text-[#fbba12]"
        >
          <LikedSongsIcon />
          <span className="font-semibold hover:text-[#fbba12] text-base tracking-wide">
            Liked song
          </span>
          <div className="pl-14">
            <VolumeIcon />
          </div>
        </Link>{" "}
        <Link
          href=""
          className="flex items-center space-x-[15.03px] hover:translate-x-3 duration-100 hover:text-[#fbba12]"
        >
          <RecentIcon />
          <span className="font-semibold text-base hover:text-[#fbba12] tracking-wide">
            Recent Played
          </span>
        </Link>{" "}
        <Link
          href=""
          className="flex items-center space-x-[15.03px] hover:translate-x-3 duration-100 hover:text-[#fbba12]"
        >
          <CreatePlaylistIcon />
          <span className="font-semibold hover:text-[#fbba12] text-base tracking-wide">
            Create Playlist
          </span>
        </Link>{" "}
        <div className="pt-[25px]">
          <Link
            href=""
            className="flex items-center space-x-[15.03px]  border-b-[#70707026] pb-[22.5px] border-b"
          >
            <MyPlaylistIcon />
            <span className="font-semibold hover:text-[#fbba12] text-base tracking-wide">
              My Playlist
            </span>
            <div className="pl-14">
              <SearchIcon />
            </div>
          </Link>{" "}
        </div>
        <div>
          <Link href="" className="font-medium hover:text-[#fbba12]">
            Riffs & Runs{" "}
          </Link>
        </div>
        <div>
          <Link href="" className="font-medium hover:text-[#fbba12]">
            African Heat
          </Link>
        </div>
        <div>
          <Link href="" className="font-medium hover:text-[#fbba12]">
            Gidi Nights
          </Link>
        </div>
        <div>
          <Link href="" className="font-medium hover:text-[#fbba12]">
            Running out of playlist
          </Link>
        </div>
        <div>
          <Link href="" className="font-medium hover:text-[#fbba12]">
            Saturday was a Good Day
          </Link>
        </div>
        <div>
          <Link href="" className="font-medium hover:text-[#fbba12]">
            Riffs & Runs{" "}
          </Link>
        </div>
        <div>
          <Link href="" className="font-medium hover:text-[#fbba12]">
            African Heat
          </Link>
        </div>
        <div>
          <Link href="" className="font-medium hover:text-[#fbba12]">
            Gidi Nights
          </Link>
        </div>
        <div>
          <Link href="" className="font-medium hover:text-[#fbba12]">
            Running out of playlist
          </Link>
        </div>
        <div>
          <Link href="" className="font-medium hover:text-[#fbba12]">
            Saturday was a Good Day
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
