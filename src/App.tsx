import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail,  ChevronRight, Download, Code2, Rocket, Cpu, Database, GitBranch, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Travel Tour",
      description: "A platform for travelers to find tour plans, book tours directly",
      image: "https://portfolio-mjhz.onrender.com/TravelTour.png",
      tags: ["MERN Stack", "Tailwind CSS", "JWT"],
      link: "https://traveltour-i4r3.onrender.com/",
    },
    {
      title: "SoloConnect",
      description: "A web app for solo Travellers to make social connections by planning trips together and engaging with communities.",
      image: "https://portfolio-mjhz.onrender.com/SoloConnect.png",
      tags: ["React", "Firebase", "TailwindCSS"],
      link: "https://github.com/yashsaraswat2004/SoloConnect",
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and Razorpay payment integration.",
      image: "https://portfolio-mjhz.onrender.com/Ecom.png",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "https://github.com/yashsaraswat2004/Ecommerce-Project--ECOM",
    },
    
  ];
  


  const features = [
    {
      icon: <Code2 size={32} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my passion"
    },
    {
      icon: <Rocket size={32} />,
      title: "Fast Performance",
      description: "Optimizing applications for the best possible user experience"
    },
    {
      icon: <Cpu size={32} />,
      title: "Modern Tech Stack",
      description: "Using the latest technologies to build robust applications"
    }
  ];

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: <Code2 size={24} />,
      skills: [
        { name: "React.js", level: 5 },
        { name: "JavaScript", level: 5 },
        { name: "Tailwind CSS", level: 5 },
        { name: "HTML5/CSS3", level: 5 },
      ]
    },
    backend: {
      title: "Backend Development",
      icon: <Cpu size={24} />,
      skills: [
        { name: "Node.js", level: 5 },
        { name: "Express.js", level: 4 },
      ]
    },
    database: {
      title: "Database & Cloud",
      icon: <Database size={24} />,
      skills: [
        { name: "MongoDB", level: 4 },
        { name: "Firebase", level: 4 }
      ]
    },
    tools: {
      title: "Tools & Version Control",
      icon: <GitBranch size={24} />,
      skills: [
        { name: "Git", level: 5 },
        { name: "Git & Github", level: 4 },
        { name: "Render", level: 4 }
      ]
    },
    soft: {
      title: "Soft Skills",
      icon: <Users size={24} />,
      skills: [
        { name: "Client Communication", level: 5 },
        { name: "Team Collaboration", level: 5 },
        { name: "Problem Solving", level: 5 },
        { name: "Public Speaking and Presentation Skills", level: 5 },
        { name: "Event Organization and Hosting", level: 5 },
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full bg-white shadow-sm z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center"
            >
              <span className="text-2xl font-bold text-indigo-600 cursor-pointer">My Portfolio</span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
              <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition-colors">Projects</a>
              <a href="#skills" className="text-gray-700 hover:text-indigo-600 transition-colors">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Hire Me
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-indigo-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
              <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Projects</a>
              <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Skills</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <motion.h1
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold text-gray-900 mb-4"
              >
                Hi, I'm <span className="text-indigo-600">Yash Saraswat</span>
                <motion.span
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="block text-indigo-600 mt-2"
                >
                  Full Stack Developer & Problem Solver
                </motion.span>
              </motion.h1>
              {/* Achievement Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-1 rounded-full font-semibold text-sm shadow-sm animate-pulse">
                  <Target size={18} className="mr-2" />
                  Hacksquad'23 Top 5% Contributor
                </span>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-6"
              >
                I build robust web apps, solve complex problems, and contribute to open source. <br />
                <span className="text-indigo-700 font-semibold">300+ coding problems solved</span> | <span className="text-green-700 font-semibold">Active Open Source Contributor</span>
              </motion.p>
              {/* Quick Stats Row */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-indigo-50 px-4 py-2 rounded-lg text-indigo-700 font-semibold flex items-center">
                  <Code2 size={18} className="mr-2" /> Full Stack Projects
                </div>
                <div className="bg-purple-50 px-4 py-2 rounded-lg text-purple-700 font-semibold flex items-center">
                  <Target size={18} className="mr-2" /> 300+ DSA Problems
                </div>
                <div className="bg-green-50 px-4 py-2 rounded-lg text-green-700 font-semibold flex items-center">
                  <Github size={18} className="mr-2" /> Open Source
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex space-x-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors flex items-center"
                >
                  View Projects <ChevronRight className="ml-2" size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-indigo-600 text-indigo-600 px-8 py-2 rounded-md hover:bg-indigo-50 transition-colors flex justify-center items-center"
                >
                <a href="/Yash_CV.pdf">Download CV <Download className="ml-2" size={20} /></a>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <img
                  src="https://portfolio-mjhz.onrender.com/Coder.png"
                  alt="Developer Illustration"
                  className="rounded-lg shadow-2xl w-[500px]"
                />
              </motion.div>
              {/* Decorative Elements */}
              <motion.div
                animate={{ 
                  rotate: 360,
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-0 right-0 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              />
              <motion.div
                animate={{ 
                  rotate: -360,
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute bottom-0 left-0 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block p-4 bg-indigo-100 rounded-full text-indigo-600 mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Freelancing & Services Section */}
      <section id="freelance" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Freelancing & Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I help startups, businesses, and individuals bring their ideas to life with modern web solutions. Here’s what I can do for you:
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-50 rounded-xl p-8 shadow-md text-center"
            >
              <Code2 size={36} className="mx-auto text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Custom Web Development</h3>
              <p className="text-gray-600">Full-stack web apps, landing pages, and business websites tailored to your needs.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-50 rounded-xl p-8 shadow-md text-center"
            >
              <Rocket size={36} className="mx-auto text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Performance Optimization</h3>
              <p className="text-gray-600">Speed up your site, improve SEO, and deliver a better user experience.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-50 rounded-xl p-8 shadow-md text-center"
            >
              <Users size={36} className="mx-auto text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Consulting & Mentorship</h3>
              <p className="text-gray-600">Get expert advice on architecture, tech stack, or career guidance in web development.</p>
            </motion.div>
            {/* New: Problem Solving & DSA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-purple-50 rounded-xl p-8 shadow-md text-center md:col-span-1"
            >
              <Target size={36} className="mx-auto text-purple-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Problem Solving & DSA</h3>
              <p className="text-gray-600">
                Strong foundation in Data Structures & Algorithms. <br />
                <span className="font-semibold text-purple-700">Hacksquad'23 Top 5% Contributor</span>.<br />
                300+ coding problems solved across LeetCode, Codeforces, and more.
              </p>
            </motion.div>
            {/* New: Open Source */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-green-50 rounded-xl p-8 shadow-md text-center md:col-span-1"
            >
              <Github size={36} className="mx-auto text-green-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Open Source Contributions</h3>
              <p className="text-gray-600">
                Active contributor to open source.<br />
                Collaborated on global projects, mentored newcomers, and built impactful solutions for the community.
              </p>
            </motion.div>
          </div>
          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors font-semibold"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With a diverse skill set spanning frontend, backend, and everything in between,
              I bring a holistic approach to software development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skillCategories).map(([key, category], categoryIndex) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, index) => (
                    <SkillBadge
                      key={skill.name}
                      skill={skill.name}
                      level={skill.level}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My academic journey has helped me build a strong foundation in computer science and problem solving.
            </p>
          </motion.div>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-indigo-50 rounded-xl p-6 shadow-md flex flex-col md:flex-row items-center md:items-start gap-6"
            >
              <div className="flex-shrink-0">
                <img
                  src="rjitlogo.jpeg"
                  alt="RJIT"
                  className="w-16 h-16 rounded-full object-contain border-2 border-indigo-200"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-700">Rustamji Institute of Technology, Tekanpur, Gwalior</h3>
                <p className="text-gray-700">B.Tech in Computer Science & Engineering</p>
                <p className="text-gray-500 text-sm">2022 – 2026 (Expected)</p>
                <p className="text-gray-600 mt-2">
                  Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems, Operating Systems.
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <span className="bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-xs font-semibold">
                    CGPA: 7.89
                  </span>
                  <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                    SGPA (Last Semester): 8.63
                  </span>
                </div>
              </div>
            </motion.div>
            {/* Add more education blocks if needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-8"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              href=" https://github.com/yashsaraswat2004"
              target='_blank'
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              href="https://www.linkedin.com/in/yashsaraswat15/"
              target='_blank'
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              href="mailto:yashsaraswat2004@gmail.com"
              target='_blank'
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Yash Saraswat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;