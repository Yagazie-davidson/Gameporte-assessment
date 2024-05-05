import UserAvatar from "@/public/avatar.png";
import Image from "next/image";

const HeaderGreeting = () => {
  return (
    <div className="bg-[#0F0F0F] flex justify-start space-x-[21px] py-[18px] pl-[31px] items-center">
      <Image src={UserAvatar} alt="user" />
      <p className="hidden">Hey! Aleem</p>
    </div>
  );
};

export default HeaderGreeting;
