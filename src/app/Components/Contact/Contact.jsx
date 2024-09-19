import Image from "next/image";
import Link from "next/link"
import vector from "../../../../public/img/Vector.png"

const Contact = () => {
    return (
        <div>
            <div className="w-[85%] mx-auto flex flex-col items-center mt-10">
                <h2 className=" font-bold text-[40px]">Contact</h2>
                <div className="w-[100px] h-[4px] bg-[#3BB4FE] rounded-lg"></div>
            </div>

            <div className="w-[100%]">
            <Image className="w-full h-[344]"  src= {vector}/>

            </div>

        </div>
    );
};

export default Contact;