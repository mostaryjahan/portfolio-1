import { MdSupervisedUserCircle } from "react-icons/md";
const About = () => {
  return (
    <div className="flex flex-col items-center  mt-10 font-mon">
      <p className=" md:text-xl text-gray-600 font-mon"> To Know More</p>
      <h1 className="md:text-5xl text-3xl font-mon font-bold mb-6">About Me</h1>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
       
        <div className="border-2 md:px-20 py-3 px-6 rounded-md">
          <p className="mt-4 font-mon md:text-left max-w-2xl ">
                      I am a dedicated frontend web developer with a passion for creating
           dynamic and responsive web applications. My expertise lies in using
             modern frameworks like React to build user-friendly interfaces that
             provide a seamless user experience. I take pride in writing clean,
            efficient code and continuously learning new technologies to enhance
            my skill set. Thank you for visiting.
          </p>
        </div>

        <div className="flex">
          <div className="text-center md:text-left py-6 px-6 border-2 md:py-10 md:px-20 rounded-md">
            <MdSupervisedUserCircle className="text-3xl mx-auto md:mx-0" />
            <h2 className="md:text-3xl text-2xl font-bold">Education</h2>
            <p className=" md:text-lg">
             (2019-20) - B.Sc. - Bachelor of Science
            </p>
            <p className=" md:text-lg">2019 - H.S.C - Higher Secondary Certificate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


