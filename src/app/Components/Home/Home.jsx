import Link from "next/link"
import Image from "next/image";


const Home = () => {
    return (
        <section id="home" className=" max-w-[1170px] mx-auto mt-16">
            {/* left */}
            <div className="w-[500px] ">
                <h3 className="font-bold text-[20px] text-[#3BB4FE]">Front-End Developer</h3>
                <h2 className="font-black text-[62px] ">Hello, My name is Sakiba Sarmin Rimi</h2>
                <p className=" text-[24px] text-gray-500 mt-4 mb-6"> Hi, This is Sakiba. A dedicated fronted developer with a mission to craft seamless and visually appealing digital experiences. My journey in the world of web developer</p>
             <div className="flex gap-x-5">
             <button className="w-[114px] h-[43px] rounded-lg py-2 px-6 bg-[#3BB4FE]"> <Link href={"#resume"}>Resume</Link></button>
             <button className="w-[114px] h-[43px] rounded-lg py-2 px-6 border border-black"> <Link href={"/"}>LinkedIn</Link></button>
             </div>
                
            </div>
            {/* right */}
           
        </section>
    );
};

export default Home;