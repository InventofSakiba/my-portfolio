import Image from "next/image";
import Link from "next/link"
import  img from "../../../../public/icons/ux-design.png"
import logo from "../../../../public/icons/logo.png"
import html from "../../../../public/icons/html.png";
import phone from "../../../../public/icons/phone.png"

const Specialties = () => {
    return (
        <div>
            <div className="w-[85%] mx-auto flex flex-col items-center">
                <h2 className="font-bold text-[40px]">My specialties</h2>
                <div className="w-[100px] h-[4px] bg-[#3BB4FE] rounded-sm"></div>
            </div>
            <div className="w-[85%] mx-auto flex mt-10 justify-between">

                <div className="w-[55%] flex justify-center gap-10  grid grid-cols-3 ">

                    <div className="  w-[183px] h-[149px] bg-white flex-col text-center   border border-black ">
                    <div className=" mt-4 flex  justify-center items-center">
                        <Image className="w-[75px] h-[75px]"  src= {img}/>
                        </div>
                    <p className="font-medium text-[18px]">ui/ux design</p>
                    </div>
                    {/*  */}
                                 
                    <div className="  w-[183px] h-[149px] bg-white flex-col text-center   border border-black ">
                    <div className=" mt-4 flex  justify-center items-center">
                        <Image className="w-[75px] h-[75px]"  src= {logo}/>
                        </div>
                    <p className="font-medium text-[18px]">Graphic Design</p>
                    </div>
                    {/*  */}
                    
                    <div className="  w-[183px] h-[149px] bg-white flex-col text-center   border border-black ">
                    <div className=" mt-4 flex  justify-center items-center">
                        <Image className="w-[75px] h-[75px]"  src= {html}/>
                        </div>
                    <p className="font-medium text-[18px]">Web Development</p>
                    </div>
                    {/*  */}
                    
                    <div className="  w-[183px] h-[149px] bg-white flex-col text-center   border border-black ">
                    <div className=" mt-4 flex  justify-center items-center">
                        <Image className="w-[75px] h-[75px]"  src= {phone}/>
                        </div>
                    <p className="font-medium text-[18px]">App design</p>
                    </div>
                    {/*  */}
                    </div> 


                <div className="w-[30%] ">
                        <div className="w-[313px] h-[340px] bg-white border border-black">
                       <p className="text-center mt-20">  SAY HELLO! <br/>
                       inventofsakiba.me</p>
                    <button className=" mt-3 ml-28 px-2 rounded-lg w-[80px] h-[30px] text-center bg-[#3BB4FE] text-white"><Link  href={"/"}>Click Me</Link></button>
                        </div>

                    </div>
          
            </div>
        </div>
    );
};

export default Specialties;