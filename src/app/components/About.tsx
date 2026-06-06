import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code that stands the test of time',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Leveraging AI and modern tech to create cutting-edge solutions',
    },
    {
      icon: Rocket,
      title: 'Growth Mindset',
      description: 'Constantly learning and adapting to new technologies and challenges',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Learning from mentors and contributing to team success',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 dark:text-white">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 dark:text-white">Hi, I’m Sam Kiarani</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg">
              <p>
                
                I'm a full-stack developer based in Kenya, with a strong focus on backend development using Python, Django, FastApi, and modern JavaScript.
              </p>
              <p>
                Over the past year, I’ve built and deployed real-world systems, including a Library Management System currently used in a Kenyan high school. 
                I’m also developing a School Management System aligned with the CBC curriculum, focusing on database design, backend logic, and clean, user-friendly interfaces.
              </p>
              <p>
                I work with both teams and independent clients to turn ideas or manual workflows into reliable web applications. 
                My approach is practical—understanding the problem first, then building systems that are simple to use, maintainable, and suited to real-world environments.
              </p>
              <p>
                Whether collaborating in a remote team or working directly with organizations, 
                I focus on delivering functional solutions that solve clear problems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold mb-2 dark:text-white">{value.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              1+
            </div>
            <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              2
            </div>
            <div className="text-gray-600 dark:text-gray-300">Major Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              8+
            </div>
            <div className="text-gray-600 dark:text-gray-300">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-300">Dedication</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}