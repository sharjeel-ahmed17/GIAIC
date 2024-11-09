import React from "react";
import "./Skills.css";

// Define a type for the skill object
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
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="progress-circle">
              <div
                className="progress-fill"
                style={{ "--fill": skill.level } as React.CSSProperties}
              ></div>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
