import Image from "next/image";
import Link from "next/link";
import me from "../../../../public/img/me.png";
import Subsection from "../CommonComponents/Subsection/Subsection";
import Btn from "../CommonComponents/Btn/Btn";

const About = () => {
  return (
    <section id="about" className="mt-16">
      <Subsection title={"About Me"} />

      <div className="mt-14 max-w-screen-lg mx-auto flex justify-center items-center">
        {/* left */}
        <div>
          <div className="w-[496px] h-[524px] shadow-md border bg-white  text-center">
            <h2 className="font-bold text-[40px] mt-5">Sakiba Sarmin Rimi</h2>
            <p className="font-medium text-[20px] mt-10 text-justify p-8">
              Executive Web Developer with 1+ years of experience developing
              websites and implementing front-end website design. Hard-working
              professional recognized by peers for my effective communication
              and multitasking skills. Looking to apply my experience with
              JavaScript and Project Management at your company.
            </p>

            <div className="flex justify-center">
              <Btn btnTitle={"View Details"} />
            </div>
          </div>
        </div>

        {/* right */}
       
          <div className="w-[496px] h-[526px]">
            <Image
             src={me}
             alt="sakiba" 
             className="w-full h-full"
             />
          </div>
      
      </div>
    </section>
  );
};

export default About;
