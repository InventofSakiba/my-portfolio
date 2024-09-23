import Image from "next/image";
import { FaGithub } from "react-icons/fa";

import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TbBrandFiverr } from "react-icons/tb";
import Link from "next/link";
import Subsection from "../CommonComponents/Subsection/Subsection";

const Footer = () => {
    const logos = [
        {
            icon: <AiFillInstagram className="w-10 h-10"/>,
            path: "https://github.com/Ahnaf-Hossain-Abir"
        },
        {
            icon: <IoLogoLinkedin className="w-10 h-10"/>,
            path: "https://github.com/Ahnaf-Hossain-Abir"
        },
        {
            icon: <MdEmail className="w-10 h-10"/>,
            path: "https://github.com/Ahnaf-Hossain-Abir"
        },
        {
            icon: <FaGithub className="w-10 h-10"/>,
            path: "https://github.com/Ahnaf-Hossain-Abir"
        },
        {
            icon: <TbBrandFiverr className="w-10 h-10"/>,
            path: "https://www.fiverr.com/hoithub25724/buying?source=avatar_menu_profile"
        },
    ]
    return (
        <section id="contact" className="mt-16">
        <Subsection title={"Contact"} />
  
        <div className="mt-10 max-w-screen-lg mx-auto flex justify-center gap-6 items-center">
          {
              logos.map((logo)=>(
                  <Link href={logo.path} key={logo.path}>{logo.icon}</Link>
              ))
          }
        </div>
  
        <div className="mt-14 mb-6 flex justify-center text-gray-400">
          <Link href={"https://github.com/Ahnaf-Hossain-Abir"}>Inventofsakiba</Link>
          </div>
  
     
      </section>
    );
};

export default Footer;