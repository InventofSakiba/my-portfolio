import Link from "next/link"
import Image from "next/image";
import img from "../../../../public/img/yellow-bg.png"

const Home = () => {
    return (
        <div className="w-[85%] mx-auto">
            {/* left */}
            <div className=" w-[40%]  ">
                <h3 className="font-bold text-[20px] text-[#3BB4FE]">Front-End Developer</h3>
                <h2 className="font-black text-[62px] w-">Hello,  my name is Sakiba Sarmin Rimi</h2>
                <p className="font-regular text-[24px]"> A dedicated fronted developer with a mission to craft seamless and visually appealing digital experiences. My journey in the world of web developer</p>
             <div className="flex gap-5">
             <button> <Link href={"/"}>Resume</Link></button>
             <button className="px-2 rounded-lg w-[70px] h-[25px]  bg-[#3BB4FE] text-white"> <Link href={"/"}>linkdin</Link></button>
             </div>
                
            </div>
            {/* right */}
            <div className="flex justify-end" > <Image src= {img}  /></div>
        </div>
    );
};

export default Home;