import img01 from "../assets/img-1.png"

const Project = () => {
  return (
    <div className="mt-24 mb-10">
      <p className="text-center font-mon text-gray-600 text-xl dark:text-white">Some of my</p>
      <h1 className="text-center font-mon font-bold text-5xl dark:text-white">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 space-x-6 mt-10 p-2">
        {/* card 1 */}
        <div className=" p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 mt-6 border-2">
          <div className="space-y-4 ">
            <div className="space-y-2 border-2">
              <img
                src={img01}
                alt=""
                className="block object-cover object-center w-full rounded-md h-[300px] dark:bg-gray-500"
              />
            </div>
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="block">
                {/* <h3 className="text-xl font-bold ">Description :</h3> */}
                <p>This project is about a multi-vendor e-commerce platform specializing in the sale of medicines and healthcare products.</p>
              </a>
              <div className="flex justify-between">
                <a href="">Client Site</a>
                <a href="">Server Site</a>
                <a href="">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className=" p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 mt-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src=""
                alt=""
                className="block object-cover object-center w-full rounded-md h-[200px] dark:bg-gray-500"
              />
            </div>
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-bold ">Description :</h3>
              </a>
              <div className="flex justify-between">
                <p className="leading-snug dark:text-gray-600"></p>
              </div>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className=" p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 mt-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src=""
                alt=""
                className="block object-cover object-center w-full rounded-md h-[200px] dark:bg-gray-500"
              />
            </div>
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-bold ">Description :</h3>
              </a>
              <div className="flex justify-between">
                <p className="leading-snug dark:text-gray-600"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
