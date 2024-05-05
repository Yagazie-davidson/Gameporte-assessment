import Image, { StaticImageData } from "next/image";

interface MusicCardProps {
  img: StaticImageData | string;
  title: string;
  artists: string[];
  linearGradTop?: string;
  linearGradBottom?: string;
}
const MusicCard = ({
  img,
  title,
  artists,
  linearGradTop,
  linearGradBottom,
}: MusicCardProps) => {
  return (
    <div className="border border-[#707070] min-w-[226.38px] w-[226.38px] pb-[14.66px] pt-[34.5px]">
      <div className={`${linearGradTop} flex justify-center`}>
        <div className="bg-black border border-[#707070] -mt-5 px-[14px] pb-[14px] pt-[4.89px]">
          <Image src={img} alt="image" />
        </div>
      </div>
      <div className={`${linearGradBottom} px-[22px]`}>
        <h3 className="font-bold text-base pt-[12.56px]">{title}</h3>
        <p className="text-[10px] font-medium pb-[8.35px]">
          {artists.map((artist, index) => {
            return (
              <span key={index}>
                {artist}
                {index + 1 !== artists.length && ", "}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default MusicCard;
