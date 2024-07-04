import main from "../assets/main.png";


import { MdOutlineFileDownload } from "react-icons/md";

const Banners = () => {
  return (

    <div id="banner" className="hero  md:h-[500px] ">
      <div className="hero-content flex-col lg:flex-row-reverse">
       <div className="">
       <img src={main} className="object-cover border-dashed border-gray-200 p-4 border-2 rounded-full sm:ml-4 mt-6 sm:w-[350px] sm:h-[360px]"/>
       </div>
        <div className="text-center space-y-4 mr-4">
          <h3 className="md:text-2xl mt-10 dark:text-white text-gray-600">
            Hi, I&apos;m
          </h3>
          <h1 className="md:text-5xl text-3xl dark:text-white  font-bold font-mon">
            Mostary Jahan
          </h1>
          <p className="md:text-2xl text-gray-600 dark:text-white   font-mon">Frontend Web Developer</p>

          <div>
            <button onClick={()=> document.getElementById('contact').scrollIntoView({behavior:'smooth'})} className="btn bg-black dark:bg-white text-white hover dark:text-black rounded-3xl">
              Contact Info
            </button>
            <a
               href="https://drive.google.com/file/d/1vUz4nA2GpE8GMAuGTS0K97pIrkbNl3EW/view?usp=sharing"
               target="_blank"
               rel="noopener noreferrer"
              className="btn ml-2  bg-black dark:bg-white  dark:text-black text-white hover rounded-3xl"
            >
              Download CV <MdOutlineFileDownload className="h-8 w-4" />
            </a>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Banners;
