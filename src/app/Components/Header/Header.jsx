import Image from "next/image";
import Link from "next/link"
import img from "../../../../public/img/yellow-bg.png"; 
import Home from "../Home/Home";

const Header = () => {
    const links =[
        {
            title: "Home",
            path: "#home"
        },
        {
            title: "About",
            path: "#about"
        },
        {
            title: "project",
            path: "#project"
        },
        {
            title: "contact",
            path: "#contact"
        },
    ]


    return (
        <nav className="h-[56px] relative">
    <div className="max-w-[1170px] mx-auto h-full flex justify-between items-center">
        {/* logo */}
        <div>
            <Link href={"/"} className="font-medium">
                <h2>Inventofsakiba</h2>
            </Link>
        </div>

       

        {/* menubar */}
        <div className="relative z-10">
            <ul className="flex items-center gap-10 font-bold ">
                {
                    links?.map(link => <li key={link.path}><Link href={link.path}>{link.title}</Link></li>)
                }
            </ul>
        </div>

        <div className="absolute top-0 right-1 flex justify-end w-[700px] z-0">
            <Image src={img} alt="vector" className="" />
        </div>
    </div>
</nav>

        
    );
};

export default Header;