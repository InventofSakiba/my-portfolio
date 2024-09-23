import Image from "next/image";
import Link from "next/link";
import img from "../../../../public/icons/ux-design.png";
import logo from "../../../../public/icons/logo.png";
import html from "../../../../public/icons/html.png";
import phone from "../../../../public/icons/phone.png";
import Subsection from "../CommonComponents/Subsection/Subsection";

const Specialties = () => {
  const skills = [
    {
      icon: img,
      title: "ui/ux design",
    },
    {
      icon: logo,
      title: "Graphic Design",
    },
    {
      icon: html,
      title: "Web development",
    },
  ];
  return (
    <section id="resume" className="mt-28">
      <Subsection title={"My specialties"} />

      <div className="mt-10 max-w-screen-lg mx-auto">
      <div className="grid grid-cols-3">
      {skills.map((skill, idx) => (
          <div key={idx} className="w-full flex justify-center">
            <div className="w-[250px] h-[200px] border bg-white shadow-md rounded">
            <div className="w-full h-full flex flex-col gap-y-4 justify-center items-center">
                <Image src={skill.icon} className="w-[70px] h-[70px]" alt="icons"/>
                <p className="text-[18px] font-medium">{skill.title}</p>
             </div>
             
            
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Specialties;
