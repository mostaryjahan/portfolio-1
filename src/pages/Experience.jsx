

const Experience = () => {
  const technologies = [
    { name: 'Html', description: 'Programming Language', icon: '/public/html.png' },
    { name: 'Tailwind', description: 'CSS Framework', icon: '/public/tailwind-css.svg' },
    { name: 'Javascript', description: 'Programming Language', icon: '/public/js.png' },
    { name: 'React', description: 'Frontend Library', icon: '/public/react.png' },
    // { name: 'Next Js', description: 'React Framework', icon: 'path/to/nextjs-icon' },
    { name: 'Firebase', description: 'Backend as a service', icon: '/public/firebase.png' },
    { name: 'Node js', description: 'Javascript Runtime', icon: '/public/nodejs.png' },
    { name: 'MongoDB', description: 'NoSQL Database', icon: '/public/mongodb-original-wordmark.svg' },
    { name: 'Git', description: 'Version Controller', icon: '/public/git2.png' },
    { name: 'Vs Code', description: 'Code Editor', icon: '/public/vs-code.svg' },
  ];

  return (
    <div id="experience" className=" dark:text-gray-800 py-10 mb-6 font-mon">
      {/* <p className="text-center font-mon text-gray-600 md:text-xl dark:text-white">
        Some of my
      </p> */}
      <h1 className="text-center font-mon font-bold text-3xl md:text-5xl dark:text-white">
      Tech Stack
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
