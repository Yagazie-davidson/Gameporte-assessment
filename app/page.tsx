import Image from "next/image";
import Banner from "@/public/Banner.png";
import MadeInNaija from "@/public/made-in-naija.png";
import NextAlte from "@/public/next-alte.png";
import WeOutside from "@/public/we-outside.png";
import Link from "next/link";
import MusicCard from "@/components/MusicCard";
export default function Home() {
  return (
    <main className="md:border border-[#0F0F0F] py-[8px] px-[6px] overflow-hidden">
      <Image src={Banner} alt="banner" className="mb-9 h-[159px]" />
      <h5 className="font-bold text-xl md:text-[28px] md:mb-[52px] mx-8">
        Welcome Back !
      </h5>
      <div>
        <Link
          href=""
          className="w-full flex md:hidden justify-end text-xs font-normal mb-[19px] text-[#D9D9D9E5]"
        >
          See more
        </Link>
        <div className="flex items-center overflow-x-auto space-x-4 hidden-scroll mb-12 pl-8">
          <MusicCard
            img={MadeInNaija}
            title="Daily Vibes 1"
            artists={[
              "Burna Boy",
              "Oxlade",
              "Davido",
              "Tems",
              "Wizkid",
              "Tiwa Savage",
            ]}
            linearGradTop="bg-gradient-to-r from-yellow to-orange"
            linearGradBottom="bg-gradient-to-r from-orange to-yellow"
          />
          <MusicCard
            img={NextAlte}
            title="Daily Vibes 2"
            artists={[
              "Loyay",
              "Oxlade",
              "Amaa Rae",
              "Rema",
              "Omah Lay",
              "SGawd",
            ]}
            linearGradTop="bg-gradient-to-r from-wine to-red"
            linearGradBottom="bg-gradient-to-r from-red to-wine"
          />
          <MusicCard
            img={WeOutside}
            title="Daily Vibes 3"
            artists={[
              "Koffee",
              "Chris Brown",
              "WSTRN",
              "Drake",
              "Future",
              "Burna Boy",
            ]}
            linearGradTop="bg-gradient-to-r from-sky to-blue"
            linearGradBottom="bg-gradient-to-r from-blue to-sky"
          />{" "}
          <MusicCard
            img={MadeInNaija}
            title="Daily Vibes 1"
            artists={[
              "Burna Boy",
              "Oxlade",
              "Davido",
              "Tems",
              "Wizkid",
              "Tiwa Savage",
            ]}
            linearGradTop="bg-gradient-to-r from-yellow to-orange"
            linearGradBottom="bg-gradient-to-r from-orange to-yellow"
          />
          <MusicCard
            img={NextAlte}
            title="Daily Vibes 2"
            artists={[
              "Loyay",
              "Oxlade",
              "Amaa Rae",
              "Rema",
              "Omah Lay",
              "SGawd",
            ]}
            linearGradTop="bg-gradient-to-r from-wine to-red"
            linearGradBottom="bg-gradient-to-r from-red to-wine"
          />
          <MusicCard
            img={WeOutside}
            title="Daily Vibes 3"
            artists={[
              "Koffee",
              "Chris Brown",
              "WSTRN",
              "Drake",
              "Future",
              "Burna Boy",
            ]}
            linearGradTop="bg-gradient-to-r from-sky to-blue"
            linearGradBottom="bg-gradient-to-r from-blue to-sky"
          />
        </div>
      </div>
      <h5 className="font-bold text-sm md:text-[28px] md:mb-6 mx-8">
        Cheers to the Weekend
      </h5>
      <div>
        <Link
          href=""
          className="w-full flex md:hidden justify-end text-xs font-normal mb-[19px] text-[#D9D9D9E5]"
        >
          See more
        </Link>
        <div className="flex items-center overflow-x-auto space-x-4 hidden-scroll mb-12 pl-8">
          <MusicCard
            img={MadeInNaija}
            title="Daily Vibes 1"
            artists={[
              "Burna Boy",
              "Oxlade",
              "Davido",
              "Tems",
              "Wizkid",
              "Tiwa Savage",
            ]}
            linearGradTop="bg-gradient-to-r from-yellow to-orange"
            linearGradBottom="bg-gradient-to-r from-orange to-yellow"
          />
          <MusicCard
            img={NextAlte}
            title="Daily Vibes 2"
            artists={[
              "Loyay",
              "Oxlade",
              "Amaa Rae",
              "Rema",
              "Omah Lay",
              "SGawd",
            ]}
            linearGradTop="bg-gradient-to-r from-wine to-red"
            linearGradBottom="bg-gradient-to-r from-red to-wine"
          />
          <MusicCard
            img={WeOutside}
            title="Daily Vibes 3"
            artists={[
              "Koffee",
              "Chris Brown",
              "WSTRN",
              "Drake",
              "Future",
              "Burna Boy",
            ]}
            linearGradTop="bg-gradient-to-r from-sky to-blue"
            linearGradBottom="bg-gradient-to-r from-blue to-sky"
          />{" "}
          <MusicCard
            img={MadeInNaija}
            title="Daily Vibes 1"
            artists={[
              "Burna Boy",
              "Oxlade",
              "Davido",
              "Tems",
              "Wizkid",
              "Tiwa Savage",
            ]}
            linearGradTop="bg-gradient-to-r from-yellow to-orange"
            linearGradBottom="bg-gradient-to-r from-orange to-yellow"
          />
          <MusicCard
            img={NextAlte}
            title="Daily Vibes 2"
            artists={[
              "Loyay",
              "Oxlade",
              "Amaa Rae",
              "Rema",
              "Omah Lay",
              "SGawd",
            ]}
            linearGradTop="bg-gradient-to-r from-wine to-red"
            linearGradBottom="bg-gradient-to-r from-red to-wine"
          />
          <MusicCard
            img={WeOutside}
            title="Daily Vibes 3"
            artists={[
              "Koffee",
              "Chris Brown",
              "WSTRN",
              "Drake",
              "Future",
              "Burna Boy",
            ]}
            linearGradTop="bg-gradient-to-r from-sky to-blue"
            linearGradBottom="bg-gradient-to-r from-blue to-sky"
          />
        </div>
      </div>
    </main>
  );
}
