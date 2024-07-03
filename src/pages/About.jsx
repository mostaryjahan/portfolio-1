const About = () => {
  return (
    <div className="mb-10 mt-10">
      <h1 className="text-center font-mon font-bold text-5xl dark:text-white">
        About Me
      </h1>

      <div className="md:grid grid-cols-2 mt-8 gap-4 md:space-y-0 space-y-4">
        <div className="border-2 rounded-2xl p-4">
            <p className="font-mon dark:text-white text-3xl font-bold">More about me: </p>
          <p className="font-mon mt-4">
            I am a dedicated frontend web developer with a passion for creating
            dynamic and responsive web applications. My expertise lies in using
            modern frameworks like React to build user-friendly interfaces that
            provide a seamless user experience. I take pride in writing clean,
            efficient code and continuously learning new technologies to enhance
            my skill set. With a keen eye for design and attention to detail, I
            strive to bridge the gap between design and technology, bringing
            creative ideas to life on the web.
          </p>
        </div>
        <div className="border-2 rounded-2xl p-4">
            <h3 className="font-pop text-3xl font-bold">Education</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
