import {
  CreatePlaylistIcon,
  DiscoverIcon,
  HomeIcon,
  LibraryIcon,
} from "@/public/Icons";
import Link from "next/link";
const BottomNav = () => {
  return (
    <div className="md:hidden fixed tie-background bottom-0 w-full flex justify-center items-center space-x-[74.73px] py-[37px] bg-black z-50">
      <Link href="">
        <HomeIcon width={25} height={29} />
      </Link>
      <Link href="">
        <DiscoverIcon width={34.27} height={26.29} />
      </Link>{" "}
      <Link href="">
        <LibraryIcon width={28} height={28} />
      </Link>{" "}
      <Link href="">
        <CreatePlaylistIcon width={25} height={25} />
      </Link>
    </div>
  );
};

export default BottomNav;
