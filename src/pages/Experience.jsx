import html from "../assets/html.png"
import tailwindIcon from "../assets/tailwind-css.svg";
import jsIcon from "../assets/js.png";
import reactIcon from "../assets/react.png";
import firebaseIcon from "../assets/firebase.png";
import nodejsIcon from "../assets/nodejs.png";
import mongodbIcon from "../assets/mongodb-original-wordmark.svg";
import gitIcon from "../assets/git2.png";
import vsCodeIcon from "../assets/vs-code.svg";

const Experience = () => {
  const technologies = [
    { name: 'Html', description: 'Programming Language', icon: html },
  { name: 'Tailwind', description: 'CSS Framework', icon: tailwindIcon },
  { name: 'Javascript', description: 'Programming Language', icon: jsIcon },
  { name: 'React', description: 'Frontend Library', icon: reactIcon },
  { name: 'Firebase', description: 'Backend as a service', icon: firebaseIcon },
  { name: 'Node js', description: 'Javascript Runtime', icon: nodejsIcon },
  { name: 'MongoDB', description: 'NoSQL Database', icon: mongodbIcon },
  { name: 'Git', description: 'Version Controller', icon: gitIcon },
  { name: 'Vs Code', description: 'Code Editor', icon: vsCodeIcon },
  ];

  return (
    <div id="experience" className=" dark:text-gray-800 py-10 mb-6 font-mon">
      {/* <p className="text-center font-mon text-gray-600 md:text-xl dark:text-white">
        Some of my
      </p> */}
      <h1 className="text-center font-mon font-bold text-3xl md:text-4xl dark:text-white">
      Technology I know
      </h1>
      <div className="max-w-6xl p-2 mx-auto mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex items-center p-4 bg-white shadow rounded-lg border border-gray-200">
            <img src={tech.icon} alt={tech.name} className="w-12 h-12 mr-4"/>
            <div>
              <h3 className="text-xl font-semibold">{tech.name}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
