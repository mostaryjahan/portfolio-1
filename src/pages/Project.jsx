import img011 from "../assets/pic1.png";
import img22 from "../assets/Artz.png"
import img03 from "../assets/studyhub2.png";




const Project = () => {
  return (
    <div className="mt-24 mb-10">
      <p className="text-center font-mon text-gray-600 md:text-xl dark:text-white">
        Some of my
      </p>
      <h1 className="text-center font-mon font-bold text-3xl md:text-5xl dark:text-white">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 space-x-6 mt-10 md:space-y-0 space-y-4 p-2 ">
        {/* card 1 */}
        <div className="card glass bg-slate-200 ">
          <figure className="  ">
            <img src={img011} alt="car!" className="rounded-t-2xl h-[300px] w-full " />
          </figure>
          <div className="card-body ">
            <h2 className="card-title dark:text-black font-mon">Medi Corner</h2>
            <p className="dark:text-black font-mon">Medi Corner is a website for a multi-vendor e-commerce platform specializing in the sale of medicines and healthcare products.</p>
            <p>F</p>
            <div className="card-actions  flex justify-between">
             <a href="https://github.com/mostaryjahan/medi-client-a12" className="btn rounded-3xl dark:text-white bg-black text-white">Client Site</a>
             <a href="https://github.com/mostaryjahan/medi-server-a12" className="btn bg-black text-white rounded-3xl dark:text-white">Server Site</a>
             <a href="https://medi-corner-22.web.app" className="btn bg-black text-white rounded-3xl dark:text-white">Live Site</a>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="card glass bg-slate-200 ">
          <figure className=" ">
            <img src={img03} alt="car!" className="rounded-t-2xl h-[300px] w-full " />
          </figure>
          <div className="card-body ">
          <h2 className="card-title dark:text-black font-mon">StudyHub</h2>
            <p className="dark:text-black font-mon">StudyHub is an online platform designed to help students enhance their learning experience and academic performance. </p>
            <div className="card-actions  flex justify-between">
             <a href="https://github.com/mostaryjahan/group-study-client-a11" className="btn rounded-3xl dark:text-white bg-black text-white">Client Site</a>
             <a href="https://github.com/mostaryjahan/group-study-server-a11" className="btn bg-black text-white rounded-3xl dark:text-white">Server Site</a>
             <a href="https://group-study-a15f6.web.app/" className="btn bg-black text-white rounded-3xl dark:text-white">Live Site</a>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="card glass bg-slate-200 ">
          <figure className="">
            <img src={img22} alt="car!" className="rounded-t-2xl h-[300px] w-full " />
          </figure>
          <div className="card-body ">
          <h2 className="card-title dark:text-black font-mon">Artz</h2>
            <p className="dark:text-black font-mon">Artz is a web site focusing on Painting and Drawing. Artz allows users to browse various painting and drawing items.</p>
            <div className="card-actions  flex justify-between">
             <a href="https://github.com/mostaryjahan/art-client-a10" className="btn rounded-3xl dark:text-white bg-black text-white">Client Site</a>
             <a href="https://github.com/mostaryjahan/art-server-a10" className="btn bg-black text-white rounded-3xl dark:text-white">Server Site</a>
             <a href="https://art-store-64ab6.web.app" className="btn bg-black text-white rounded-3xl dark:text-white">Live Site</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
