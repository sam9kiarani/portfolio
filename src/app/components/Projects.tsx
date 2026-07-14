import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  ExternalLink, 
  Calendar,
  Users,
  Database,
  Shield,
  Zap
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import libraryImage from '../assets/library.webp';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Library Management System',
      description: 'A comprehensive library management solution deployed at a high school in Kenya. Features include book cataloging, borrowing management, user authentication, automated notifications, and detailed reporting.',
      image: libraryImage,
      icon: BookOpen,
      status: 'Completed',
      year: '2025',
      gradient: 'from-blue-600 to-cyan-600',
      features: [
        'Real-time book availability tracking',
        'Automated overdue notifications',
        'Advanced search and filtering',
        'User role management',
        'Comprehensive reporting dashboard',
      ],
      tech: ['Python', 'Django', 'PostgreSQL', 'Redis', 'React'],
      impact: [
        { icon: Users, label: '500+ Active Users' },
        { icon: BookOpen, label: '2000+ Books Managed' },
        { icon: Zap, label: '80% Faster Processing' },
      ],
    },
    {
      title: 'School Management System',
      description: 'An enterprise-level school management platform designed to support Kenya\'s new Competency-Based Curriculum (CBC). Currently in active development, featuring student information management, grade tracking, attendance monitoring, and parent-teacher communication.',
      image: 'https://images.unsplash.com/photo-1669333490889-194e8f46a766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMG5haXJvYmklMjBza3lsaW5lJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ1NTEwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: GraduationCap,
      status: 'In Development',
      year: '2026',
      gradient: 'from-purple-600 to-pink-600',
      features: [
        'CBC-compliant assessment system',
        'Multi-role access (Admin, Teachers, Parents, Students)',
        'Real-time attendance tracking',
        'Grade and progress reporting',
        'Parent-teacher messaging platform',
        'Timetable and resource management',
      ],
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'Celery', 'React', 'Node.js'],
      impact: [
        { icon: GraduationCap, label: 'CBC Curriculum Support' },
        { icon: Database, label: 'Scalable Architecture' },
        { icon: Shield, label: 'Enterprise Security' },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 dark:text-white">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-world educational technology solutions making a tangible impact in Kenyan institutions
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
            >
              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : '' }`}>
                  <div className="aspect-video lg:aspect-square relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute top-6 right-6">
                      <span className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-medium shadow-lg`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-3xl font-bold dark:text-white">{project.title}</h3>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{project.year}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold mb-3 dark:text-white">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2`}></div>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold mb-3 dark:text-white">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm font-medium shadow-sm dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.impact.map((item) => (
                      <div key={item.label} className="text-center">
                        <item.icon className={`w-6 h-6 mx-auto mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`} />
                        <p className="text-xs text-gray-600 dark:text-gray-400">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  <button className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all w-fit`}>
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Interested in Collaboration?</h3>
          <p className="text-xl mb-8 opacity-90">
            I'm always open to discussing new projects and opportunities in educational technology
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all"
          >
            Let's Talk
          </button>
        </motion.div>
      </div>
    </section>
  );
}