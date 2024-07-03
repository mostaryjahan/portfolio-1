import img from "../assets/human.png"
import { MdOutlineFileDownload } from "react-icons/md";

const Banners = () => {
    return (
        <div className="flex justify-center  items-center  space-x-20">
         
           <div className=" mt-44 font-mon  space-y-4  text-center h-[300px]">
              <h3 className="text-2xl mt-10 dark:text-white text-gray-600">Hi, I'm</h3>
              <h1 className="text-5xl dark:text-white  font-bold font-mon">Mostary Jahan</h1>
              <p className="text-gray-600 dark:text-white  text-2xl">Frontend Web Developer</p>
              <div>
                <button className="btn bg-[#DBFCFF] hover dark:text-black rounded-3xl">Contact Info</button>
                <a href="/name.pdf" className="btn ml-2 dark:text-black bg-[#DBFCFF] hover rounded-3xl">Download CV <MdOutlineFileDownload className="h-8 w-4"/></a>
              </div>
           </div>

           <div className="  mt-10 ">
            <img src={img} alt="" className="w-[300px] h-[300px] rounded-full border-2"/>

           </div>
        </div>
    );
};

export default Banners;