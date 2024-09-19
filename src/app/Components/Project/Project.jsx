import Image from "next/image";
import Link from "next/link"
import img1 from "../../../../public/img/img1.png"
import img2 from "../../../../public/img/img2.png"
import img3 from "../../../../public/img/img3.png"

const Project = () => {
    return (
        <div>
            
            <div className="w-[85%] mx-auto flex flex-col items-center mt-10">
                <h2 className=" font-bold text-[40px]">Project</h2>
                <div className="w-[100px] h-[4px] bg-[#3BB4FE] rounded-lg"></div>
            </div>

           <div className='w-[85%] mx-auto mt-10 flex justify-center '>
           <div className='h-[576px] w-[1150px]  bg-white border border-black  flex justify-between items-center p-10'>
            <div className="flex gap-10">
                {/* 1 */}
            <div className="mt-10 
            ">
            <Image  src= {img1}/>
            </div>
             {/* 2 */}
             <div className="mt-10">
            <Image  src= {img2}/>
            </div>
             {/* 3 */}
             <div className="mt-10">
            <Image  src= {img3}/>
            </div>
           
            </div>

            <button className="bottom-2 mt-3 px-2 rounded-xl w-[150px] h-[30px] text-center bg-[#3BB4FE] text-white"><Link  href={"/"}>View Details</Link></button>
            </div> 
              
           </div>

            
        </div>
    );
};

export default Project;