import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  Server, 
  Database, 
  Shield, 
  Layers, 
  Zap, 
  Code, 
  Palette,
  Search,
  Monitor,
  Cpu,
  Lock,
  GitBranch
} from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Backend Development',
      icon: Server,
      gradient: 'from-blue-600 to-blue-400',
      skills: [
        { name: 'API Development', icon: Cpu, level: 90 },
        { name: 'Database Integration', icon: Database, level: 85 },
        { name: 'System Security', icon: Shield, level: 80 },
        { name: 'System Architecture', icon: Layers, level: 85 },
        { name: 'Performance Optimization', icon: Zap, level: 75 },
        { name: 'Authentication & Authorization', icon: Lock, level: 80 },
      ],
    },
    {
      title: 'Frontend Development',
      icon: Monitor,
      gradient: 'from-purple-600 to-purple-400',
      skills: [
        { name: 'React Development', icon: Code, level: 75 },
        { name: 'Responsive Design', icon: Monitor, level: 80 },
        { name: 'UI/UX Implementation', icon: Palette, level: 70 },
        { name: 'AI-Powered Interfaces', icon: Cpu, level: 75 },
      ],
    },
    {
      title: 'Tools & Frameworks',
      icon: GitBranch,
      gradient: 'from-pink-600 to-pink-400',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Django', level: 85 },
        { name: 'FastAPI', level: 80 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
        { name: 'Node.js', level: 70 },
        { name: 'Redis', level: 75 },
        { name: 'Celery', level: 75 },
      ],
    },
  ];

  const designSkills = [
    { name: 'Brand Design', icon: Palette },
    { name: 'UX Design', icon: Monitor },
    { name: 'SEO Optimization', icon: Search },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 dark:text-white">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive skill set built through hands-on experience, continuous learning, and real-world project implementation
          </p>
        </motion.div>

        {/* Main Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className={`bg-gradient-to-r ${category.gradient} p-6`}>
                <category.icon className="w-10 h-10 text-white mb-3" />
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="p-6 space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {(() => {
                          const Icon = (skill as any).icon as any | undefined;
                          return Icon ? <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400" /> : null;
                        })()}
                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      </div>
                      {skill.level && <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>}
                    </div>
                    {skill.level && (
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Design & Web Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center dark:text-white">
            Design & Optimization Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {designSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 dark:text-white">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold mb-6 dark:text-white">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'RESTful APIs',
              'GraphQL',
              'Microservices',
              'Docker',
              'Git & Version Control',
              'Agile Methodologies',
              'Test-Driven Development',
              'CI/CD',
              'PostgreSQL',
              'MongoDB',
              'WebSockets',
              'Cloud Deployment',
            ].map((competency, index) => (
              <motion.span
                key={competency}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all font-medium text-gray-700 dark:text-gray-300"
              >
                {competency}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}