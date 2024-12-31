import Image from "next/image";
import Items from "../../Items";
import logoText from "@/assets/images/logo_text.webp"
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="h-[500px] bg-green-900 w-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <Image 
          src={logoText}
          alt={"logo_text"}
          className="my-12"
        />
        
        <div className="flex flex-col items-center lg:flex-row lg:items-center font-bold my-4 ">
          <Items className={"lg:pb-16 my-2 lg:ml-8"}>
            هزاران فیلم و سریال خارجی (دوبله و زیرنویس)
          </Items>
          <Items className={"lg:pb-16 my-2 lg:ml-8"}>
            هزاران انیمیشن و کارتون برای کودکان
          </Items>
          <Items className={"lg:pb-16 my-2 mb-10 lg:mb-0"}>
            پشتیبانی 24 ساعته برای راهنمایی شما
          </Items>
        </div>
        <div className="w-full flex justify-center  text-[#888A79]">
        <p className="capitalize text-[21px]">devloped by younes namipooor</p>
      </div>
        <div className="w-full pt-10 flex justify-center gap-6">
        <Link
          className="p-2 bg-white text-black rounded-full border"
          href="https://github.com/younes-namipoor"
        >
          <FaGithub className="text-[30px]  cursor-pointer" />
        </Link>
        <Link
          className="p-2 bg-white text-black rounded-full border"
          href="https://www.linkedin.com/in/younes-namipoor"
        >
          <FaLinkedin className="text-[30px]  cursor-pointer" />
        </Link>
        <Link
          className="p-2 bg-white text-black rounded-full border"
          href="https://www.instagram.com/younes.namipoor"
        >
          <FaSquareInstagram className="text-[30px]  cursor-pointer" />
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Footer;
