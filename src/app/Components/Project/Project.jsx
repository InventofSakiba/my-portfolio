import Image from "next/image";
import Link from "next/link";
import img1 from "../../../../public/img/img1.png";
import img2 from "../../../../public/img/img2.png";
import img3 from "../../../../public/img/img3.png";
import Subsection from "../CommonComponents/Subsection/Subsection";
import Btn from "../CommonComponents/Btn/Btn";

const Project = () => {
  const images = [img1, img2, img3];
  return (
    <section id="project" className="mt-16">
      <Subsection title={"Project"} />

      <div className="mt-10 max-w-screen-lg mx-auto h-[600px] bg-white border shadow-md">
        <div className="grid grid-cols-3 pt-16 px-12">
          {images.map((img, idx) => (
            <div key={idx} className="w-full flex justify-center">
              <Link href={"/"}><Image src={img} alt="projects"  /></Link>
            </div>
          ))}

        
        </div>

        <div className="w-[920px] flex justify-end mt-6">
            <Btn btnTitle={"View More"} />

          </div>
      </div>
    </section>
  );
};

export default Project;
