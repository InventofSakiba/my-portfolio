import Image from "next/image";
import Link from "next/link"
import me from "../../../../public/img/me.png"

const About = () => {
    return (
        <div>
            <div className="w-[85%] mx-auto flex flex-col items-center mt-10 mb-5">
                <h2 className="font-bold text-[40px] ">About Me</h2>
                <div className="w-[100px] h-[4px] bg-[#3BB4FE] rounded-lg"></div>
            </div>

            <div className="w-[80%] mx-auto flex justify-center items-center mt-10">


                {/* left */}
            <div className="w-[40%] ">
                <div className="w-[496px] h-[524px] bg-white border border-black text-center">

                <h2 className="font-bold text-[40px] mt-5">Sakiba Sarmin Rimi</h2>
                <p className="font-medium text-[20px] mt-10 text-justify p-8">Executive Web Developer with 1+ years of experience developing websites and implementing front-end website design. Hard-working professional recognized by peers for my effective communication and multitasking skills. Looking to apply my experience with JavaScript and Project Management at your company.</p>
                <button className=" mt-3 ml-28 px-2 rounded-xl w-[150px] h-[30px] text-center bg-[#3BB4FE] text-white"><Link  href={"/"}>View Details</Link></button>
                </div>
                


                </div>


            {/* right */}
                <div className="w-[40%]">
                    <div><Image  src= {me}/></div>
                </div>


            </div>
        </div>
    );
};

export default About;