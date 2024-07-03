import img01 from "../assets/img-1.png";

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
          <figure className=" rounded-t-3xl pt-4 pl-4 pr-4">
            <img src={img01} alt="car!" className="rounded-t-2xl h-[300px] w-full " />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Project-1</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="card glass bg-slate-200 ">
          <figure className=" rounded-t-3xl pt-4 pl-4 pr-4">
            <img src={img01} alt="car!" className="rounded-t-2xl h-[300px] w-full " />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Project-1</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="card glass bg-slate-200 ">
          <figure className=" rounded-t-3xl pt-4 pl-4 pr-4">
            <img src={img01} alt="car!" className="rounded-t-2xl h-[300px] w-full " />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Project-1</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
