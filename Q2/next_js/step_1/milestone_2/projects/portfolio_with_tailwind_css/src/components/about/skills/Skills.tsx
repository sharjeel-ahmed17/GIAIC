

type Skill = {
  name: string;
  level: number;
};

const Skills: React.FC = () => {
  // Define the skills array with the Skill type
  const skills: Skill[] = [
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "CSS", level: 85 },
    { name: "TypeScript", level: 70 },
    { name: "Node.js", level: 65 },
  ];

  return (
    <div className="text-center py-8 bg-gray-100">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="relative w-20 h-20 rounded-full flex items-center justify-center mb-2"
              style={{
                background: `conic-gradient(#3b82f6 ${skill.level}%, #e5e7eb ${skill.level}%)`,
              }}
            >
              <div className="absolute w-18 h-18 bg-white rounded-full"></div>
              <span className="absolute font-bold text-gray-700">
                {skill.level}%
              </span>
            </div>
            <p className="text-gray-600 text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
