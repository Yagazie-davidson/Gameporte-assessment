import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import {
  CreatePlaylistIcon,
  DiscoverIcon,
  HomeIcon,
  LeftArrow,
  LibraryIcon,
  RightArrow,
  SearchIcon,
} from "@/public/Icons";
import UserAvatar from "@/public/avatar.png";
import Link from "next/link";
import SideBar from "@/components/SideBar";
import BottomNav from "@/components/BottomNav";
import HeaderGreeting from "@/components/HeaderGreeting";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Assesment",
  description: "Something something",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" bg-black text-white space-x-0 md:space-x-[6px] flex">
          <SideBar />
          <div className="h-screen md:h-auto  custom-scroll relative max-w-full overflow-x-hidden">
            <div>
              <div className="md:hidden block">
                <HeaderGreeting />
              </div>
              <div className="mt-[21px]">
                <div className="mb-5 md:flex items-center space-x-[74px] hidden">
                  <div className="flex items-center space-x-[8px]">
                    <button className="py-[7.85px] bg-[#0F0F0F] px-[16.23px]">
                      <LeftArrow />{" "}
                    </button>
                    <button className="py-[7.85px] bg-[#0F0F0F] px-[16.23px]">
                      <RightArrow />
                    </button>
                  </div>
                  <div className="bg-black border border-[#0F0F0F] py-[19px] pl-[17px] w-full max-w-[471px] items-center space-x-2 flex">
                    <div>
                      <SearchIcon />
                    </div>
                    <input
                      type="text"
                      className="bg-black focus:outline-none focus:border-none focus:ring-0"
                    />
                  </div>
                </div>
              </div>
              <div className="h-[50vh]">{children}</div>
            </div>
            <BottomNav />
          </div>
        </div>
      </body>
    </html>
  );
}
