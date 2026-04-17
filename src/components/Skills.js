import React from 'react'; // ONLY ONE OF THESE AT THE TOP

const Skills = () => {
  const skills = [
    { name: 'Networking', level: 85 },
    { name: 'React.js', level: 70 },
    { name: 'SQL/DB', level: 90 },
    { name: 'Statistics', level: 80 }
  ];

  return (
    <div>
      <h2 className="text-2xl mb-4 underline crt-glow">_SKILLS_ARCHIVE</h2>
      {skills.map(skill => (
        <div key={skill.name} className="mb-4">
          <p className="mb-1">{skill.name}</p>
          <div className="flex items-center text-[#33ff33]">
            <span className="mr-2">[</span>
            <span className="tracking-widest">
              {'#'.repeat(Math.floor(skill.level / 10))}
              <span className="opacity-20">
                {'-'.repeat(10 - Math.floor(skill.level / 10))}
              </span>
            </span>
            <span className="ml-2">] {skill.level}%</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills; // MAKE SURE THIS IS AT THE VERY END