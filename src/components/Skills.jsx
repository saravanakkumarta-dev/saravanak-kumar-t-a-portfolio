import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/motion';

const skills = {
  "Languages": ["Java", "Python", "JavaScript"],
  "Frontend": ["React", "HTML", "CSS"],
  "Backend": ["Spring Boot", "REST APIs"],
  "Mobile": ["Capacitor"],
  "Databases": ["MongoDB", "SQLite", "SQL"],
  "Tools": ["Git", "Vite"]
};

const skillGroups = {
  "Languages": ["Java", "Python", "JavaScript (ES6+)"],
  "Frontend": ["React", "HTML", "CSS"],
  "Backend": ["Spring Boot", "REST APIs"],
  "Mobile & Cross-Platform": ["Capacitor"],
  "Databases": ["MongoDB", "SQLite", "SQL"],
  "Tools & Workflow": ["Git", "Vite"]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-10">
          Technical Skills
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {Object.entries(skillGroups).map(([group, skills]) => (
            <div key={group}>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                {group}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-slate-50 p-3 rounded-lg border border-slate-200
                               text-center text-slate-700 font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;