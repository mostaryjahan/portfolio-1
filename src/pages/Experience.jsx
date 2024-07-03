import { FaCheckCircle } from 'react-icons/fa';


const Experience = () => {

const skills = [
    { category: 'Frontend Development', skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Tailwind' },
      { name: 'JavaScript' },
      { name: 'React' },
    ]},
    { category: 'Backend Development', skills: [
      { name: 'MongoDB' },
      { name: 'Node JS' },
      { name: 'Express JS' },
      { name: 'Firebase Auth' },
    ]}
  ];
  
    return (
     
        <section className="my-10 dark:text-gray-200 font-mon lg:mb-0  px-2">
          <p className="text-center font-mon text-gray-600 text-xl dark:text-white">Explore my</p>
          <h1 className="text-center font-mon font-bold md:text-4xl text-3xl dark:text-white">Experience</h1>
          <div className="flex flex-col md:flex-row justify-center mt-8 space-y-8 md:space-y-0 md:space-x-12">
        {skills.map((skillSet, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-lg w-full md:w-80">
            <h3 className="text-xl font-semibold text-center mb-4">{skillSet.category}</h3>
            {skillSet.skills.map((skill, idx) => (
              <div key={idx} className="flex items-center  space-x-2 mb-4 md:pl-0 pl-16">
                <FaCheckCircle className="" />
                <p className="font-bold ">{skill.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      </section>

      
    );
};

export default Experience;