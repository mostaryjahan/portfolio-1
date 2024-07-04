import study from "../assets/study-crop.png";
import art from "../assets/art-1.png";
import medi from "../assets/medi-crop.png"




const Project = () => {
  return (
    <div id="project" className="mt-10 mb-10">
      <p className="text-center font-mon text-gray-600 md:text-xl dark:text-white">
        Some of my
      </p>
      <h1 className="text-center font-mon font-bold text-3xl md:text-5xl dark:text-white">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 space-x-6 mt-10 md:space-y-0 space-y-4 p-2 ">
        {/* card 1 */}
        <div className="card rounded glass bg-slate-200 ">
          <figure className="  ">
            <img src={medi} alt="car!" className="rounded-t h-[300px] w-full " />
          </figure>
          <div className="p-4 ">
            <h2 className="card-title dark:text-black font-mon">Medi Corner</h2>
            <p className="dark:text-black font-mon">Medi Corner is a website for a multi-vendor e-commerce platform specializing in the sale of medicines and healthcare products.</p>
            <p className="font-mon mt-2"><span className="font-semibold">Features:</span> User Authentication, Payment Integration, Data Management</p>
            <p className="font-mon mt-2 mb-2"><span className="font-semibold">Technology: </span>Tanstack query ,Axios, React,React-router-dom, MongoDB, Jwt, Firebase, Node.js</p>
            <div className=" card-actions md:flex justify-center">
             <a href="https://github.com/mostaryjahan/medi-client-a12" className="p-2 rounded-3xl dark:text-white bg-black text-white">Client Site</a>
             <a href="https://github.com/mostaryjahan/medi-server-a12" className="p-2 bg-black text-white rounded-3xl dark:text-white">Server Site</a>
             <a href="https://medi-corner-22.web.app" className="p-2 bg-black text-white rounded-3xl dark:text-white">Live Site</a>
            </div>
          </div>
        </div>
     


     {/*  */}

    

        {/* card 2 */}
        <div className="card glass rounded  bg-slate-200 ">
          <figure className=" ">
            <img src={study} alt="car!" className="rounded-t h-[300px] w-full " />
          </figure>
          <div className="p-4 ">
          <h2 className="card-title dark:text-black font-mon">StudyHub</h2>
            <p className="dark:text-black font-mon">StudyHub is an online platform designed to help students enhance their learning experience and academic performance. </p>
            <p className="font-mon mt-2"><span className="font-semibold">Features:</span> User Authentication, Assignment Creation, Assignment Management</p>
            <p className="font-mon mt-2 mb-2"><span className="font-semibold">Technology: </span>Axios, React,React-router-dom, MongoDB, Jwt, Firebase, Node.js</p>
            <div className="card-actions md:flex justify-center">
             <a href="https://github.com/mostaryjahan/group-study-client-a11" className="p-2 rounded-3xl dark:text-white bg-black text-white">Client Site</a>
             <a href="https://github.com/mostaryjahan/group-study-server-a11" className="p-2 bg-black text-white rounded-3xl dark:text-white">Server Site</a>
             <a href="https://group-study-a15f6.web.app/" className="p-2 bg-black text-white rounded-3xl dark:text-white">Live Site</a>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="card glass rounded border-2 border-gray-600 bg-slate-200 ">
          <figure className="">
            <img src={art} alt="car!" className="rounded-t h-[300px] w-full " />
          </figure>
          <div className="p-4">
          <h2 className=" dark:text-black text-xl font-semibold font-mon">Artz</h2>
            <p className="dark:text-black font-mon">Artz is a web site focusing on Painting and Drawing. Artz allows users to browse various painting and drawing items.</p>
            <p className="font-mon mt-2"><span className="font-semibold">Features:</span> User Authentication, Category Browsing, Responsive Design</p>
            <p className="mt-2 mb-2 font-mon"><span className="font-semibold ">Technology:</span> React-router-dom, MongoDB,  Firebase for environment variables, Node.js</p>
            <div className="card-actions  md:flex justify-center">
             <a href="https://github.com/mostaryjahan/art-client-a10" className="p-2 rounded-3xl dark:text-white bg-black text-white">Client Site</a>
             <a href="https://github.com/mostaryjahan/art-server-a10" className="p-2 bg-black text-white rounded-3xl dark:text-white">Server Site</a>
             <a href="https://art-store-64ab6.web.app" className="p-2 bg-black text-white rounded-3xl dark:text-white">Live Site</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
