import Link from "next/link"


const Header = () => {
    const links =[
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About Me",
            path: "/"
        },
        {
            title: "project",
            path: "/"
        },
        {
            title: "contact",
            path: "/"
        },
    ]


    return (
        <div>
            <div className="w-[85%] mx-auto flex justify-between items-center  min-h-16 mt-5 ">
            {/* logo */}
           <div className="[w-20%]">
            <h2 className="font-medioum"><Link href={"/"}>inventofsakiba</Link></h2>
            </div>
            {/* menubar */}
            <div className="w-[30%] ">
           
                
            <ul className="flex  gap-10 items-center gap-10 font-bold justify-end">
                {
                    links?.map(link=> <li><Link href={link.path}>{link.title}</Link></li>)
                }
            </ul>
            </div>
           </div>

          
        </div>
        
    );
};

export default Header;