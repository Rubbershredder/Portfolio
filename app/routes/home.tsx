import type { Route } from "./+types/root";
import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { Moon, Sun, Github, Linkedin, Mail, Phone, FileText, ExternalLink } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Aman Muleva" },
    { name: "description", content: "Welcome to My Portfolio!" },
  ];
}

export default function Index() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize theme based on user preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-teal-600 dark:text-teal-400 text-xl">Aman Muleva</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLink to="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Home</NavLink>
              <NavLink to="#about" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">About</NavLink>
              <NavLink to="#experience" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Experience</NavLink>
              <NavLink to="#projects" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Projects</NavLink>
              <NavLink to="#skills" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Skills</NavLink>
              <NavLink to="#contact" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Contact</NavLink>
              <button 
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="flex md:hidden items-center space-x-2">
              <button 
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button 
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                <div className={`w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-current my-1.5 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? 'max-h-96 py-4 border-b border-slate-200 dark:border-slate-800' 
              : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-4 px-6">
            <NavLink to="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
            <NavLink to="#about" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
            <NavLink to="#experience" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Experience</NavLink>
            <NavLink to="#projects" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Projects</NavLink>
            <NavLink to="#skills" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Skills</NavLink>
            <NavLink to="#contact" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-teal-600 dark:text-teal-400"># Hello..</h1>
              
              <p className="text-lg md:text-xl mb-6 leading-relaxed">
                I'm Aman Muleva, a Software Developer based in Bengaluru with a passion for building 
                efficient systems and solving complex problems through code.
              </p>
              
              <blockquote className="border-l-4 border-teal-500 pl-4 my-6 italic">
                Building software that matters.
              </blockquote>
              
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400 mb-6">
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <a href="mailto:amanmuleva@gmail.com" className="hover:text-teal-600 dark:hover:text-teal-400">amanmuleva@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <FileText size={16} className="mr-2" />
                  <a href="https://drive.google.com/file/d/169S-AqWHRhgmKj69guCOAW_HWojM_OEC/view?usp=sharing" className="hover:text-teal-600 dark:hover:text-teal-400">Download Resume</a>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-4">
                <a href="https://github.com/Rubbershredder" className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors" aria-label="GitHub Profile">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/aman-muleva-57b26b23a/" className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors" aria-label="LinkedIn Profile">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:amanmuleva@gmail.com" className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div className="hidden md:block md:w-1/3 mt-8 md:mt-0">
              <div className="w-full aspect-square bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center text-5xl font-bold text-teal-600 dark:text-teal-400">
                AM
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="mb-20 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-teal-600 dark:text-teal-400"># About Me</h2>
          
          <div className="space-y-4">
            <p className="leading-relaxed">
              I am a Bachelor of Engineering student at Sri Venkateshwara College of Engineering, 
              specializing in Information Science and Engineering. Expected to graduate in May 2025 
              with a cumulative GPA of 8.05/10.0.
            </p>
            
            <p className="leading-relaxed">
              My academic journey has been focused on building a strong foundation in computer networks, 
              software engineering, operating systems, algorithms, and artificial intelligence. Beyond the classroom, 
              I've been actively pursuing real-world experience through internships and projects.
            </p>
            
            <p className="leading-relaxed">
              My journey in software development includes hands-on experience with Python, JavaScript, Go, and Java, 
              along with modern frameworks and tools like React.js, Flask, Docker, and Kubernetes. I particularly 
              enjoy working on projects that require system optimization and process automation.
            </p>
          </div>
        </section>
        
        {/* Experience Section */}
        <section id="experience" className="mb-20 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-teal-600 dark:text-teal-400"># Work Experience</h2>
          
          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
              <div>
                <h3 className="font-bold text-xl mb-1">Software Developer Intern</h3>
                <p className="text-slate-600 dark:text-slate-400">EMEELAN PVT LTD, Bengaluru</p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400 mt-1 sm:mt-0">Sept 2024 - Feb 2025</span>
            </div>
            
            <ul className="space-y-3 mt-4">
              <li className="flex items-baseline">
                <span className="text-teal-500 mr-2">»</span>
                <span>Designed an automated email notification system that reduced alert response times by 40% and eliminated manual oversight.</span>
              </li>
              <li className="flex items-baseline">
                <span className="text-teal-500 mr-2">»</span>
                <span>Created and implemented a Jira synchronization tool that improved cross-team collaboration efficiency by 35%.</span>
              </li>
              <li className="flex items-baseline">
                <span className="text-teal-500 mr-2">»</span>
                <span>Constructed Alby PostDB, a centralized database solution that accelerated event logging by 50% and enhanced data integrity.</span>
              </li>
              <li className="flex items-baseline">
                <span className="text-teal-500 mr-2">»</span>
                <span>Established microservices architecture using Docker and Kubernetes, resulting in 30% faster deployment times.</span>
              </li>
            </ul>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="mb-20 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-teal-600 dark:text-teal-400"># Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-xl">CodeSense</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">February 2025</span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  An automated code review system using GitHub workflows for repository-wide analysis.
                </p>
                
                <ul className="space-y-2 mb-4">
                  <li className="flex items-baseline">
                    <span className="text-teal-500 mr-2 text-sm">•</span>
                    <span className="text-sm">Built a modern web application with React.js frontend for code submissions and review management.</span>
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-teal-500 mr-2 text-sm">•</span>
                    <span className="text-sm">Developed a robust Flask backend API to handle code processing and GitHub workflow integration.</span>
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-teal-500 mr-2 text-sm">•</span>
                    <span className="text-sm">Implemented comprehensive code quality analysis features to enhance development workflows.</span>
                  </li>
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">React.js</span>
                  <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">Flask</span>
                  <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">GitHub Actions</span>
                  <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">Llama 3.2</span>
                </div>
                
                <a href="https://github.com/suraj0-11/codesense.git" className="flex items-center text-teal-600 dark:text-teal-400 text-sm hover:underline">
                  View on GitHub
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-xl">Network Alarm</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">January 2025</span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  A multi-service application for institutional event management and notifications.
                </p>
                
                <ul className="space-y-2 mb-4">
                  <li className="flex items-baseline">
                    <span className="text-teal-500 mr-2 text-sm">•</span>
                    <span className="text-sm">Designing a multi-service application concept for institutional event management and notifications.</span>
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-teal-500 mr-2 text-sm">•</span>
                    <span className="text-sm">Planning architecture using React, Flask API, and Strapi CMS.</span>
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-teal-500 mr-2 text-sm">•</span>
                    <span className="text-sm">Developing containerization strategy using Docker for simplified deployment.</span>
                  </li>
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">React.js</span>
                  <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">Flask</span>
                  <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">Strapi</span>
                  <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">Docker</span>
                  <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">PostgreSQL</span>
                </div>
                
                <a href="https://github.com/Rubbershredder/NetworkAlarm.git" className="flex items-center text-teal-600 dark:text-teal-400 text-sm hover:underline">
                  View on GitHub
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-xl">Jira AutoSync</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">December 2024</span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  An automated test case management and tracking system that synchronizes with Jira.
                </p>
                
                <ul className="space-y-2 mb-4">
                  <li className="flex items-baseline">
                    <span className="text-teal-500 mr-2 text-sm">•</span>
                    <span className="text-sm">Developed a Python utility that automates the creation and linking of test case issues in Jira.</span>
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-teal-500 mr-2 text-sm">•</span>
                    <span className="text-sm">Implemented adaptive issue type detection and workflow status mapping for maximum compatibility.</span>
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-teal-500 mr-2 text-sm">•</span>
                    <span className="text-sm">Created a hierarchical organization system with Epic-level tracking for improved test case management.</span>
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-teal-500 mr-2 text-sm">•</span>
                    <span className="text-sm">Designed a JSON-based configuration system for flexible deployment across different Jira environments.</span>
                  </li>
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">Python</span>
                  <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">Jira API</span>
                  <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">JSON</span>
                  <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">Automation</span>
                </div>
                
                <a href="https://github.com/Rubbershredder/Jira-Sync.git" className="flex items-center text-teal-600 dark:text-teal-400 text-sm hover:underline">
                  View on GitHub
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="mb-20 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-teal-600 dark:text-teal-400"># Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <h3 className="font-bold mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">Go</span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">Java</span>
              </div>
            </div>
            
            <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <h3 className="font-bold mb-4">DevOps & Cloud</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">Docker</span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">Kubernetes</span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">Nginx</span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">Linux</span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">GitHub Actions</span>
              </div>
            </div>
            
            <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <h3 className="font-bold mb-4">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">Flask</span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">React.js</span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">Strapi</span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">Kafka</span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">Flink</span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">Supabase</span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">PocketBase</span>
              </div>
            </div>
            
            <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <h3 className="font-bold mb-4">Databases & Storage</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">PostgreSQL</span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">Elasticsearch</span>
              </div>
            </div>
            
            <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <h3 className="font-bold mb-4">Monitoring & Logging</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">Kibana</span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">Grafana</span>
              </div>
            </div>
            
            <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <h3 className="font-bold mb-4">Professional Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">Technical Leadership</span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">Collaborative Development</span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">Rapid Learning</span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">Problem Solving</span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 rounded-full text-sm">Agile/Scrum</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-teal-600 dark:text-teal-400"># Education</h2>
          
          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
              <div>
                <h3 className="font-bold text-xl mb-1">Sri Venkateshwara College of Engineering</h3>
                <p className="text-slate-600 dark:text-slate-400">Bachelor of Engineering, Information Science and Engineering</p>
              </div>
              <div className="mt-2 sm:mt-0 text-right">
                <span className="text-sm text-slate-500 dark:text-slate-400">Expected May 2025</span>
                <p className="text-sm font-medium mt-1">GPA: 8.05/10.0</p>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Relevant Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm">Computer Networks</span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm">Software Engineering</span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm">Operating Systems</span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm">Algorithms</span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm">Artificial Intelligence</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-teal-600 dark:text-teal-400"># Get In Touch</h2>
          
          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
            <p className="mb-6">
              I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out to me using any of the contact methods below.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center p-4 bg-white dark:bg-slate-900 rounded-lg">
                <Mail className="text-teal-600 dark:text-teal-400 mr-3" size={24} />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:amanmuleva@gmail.com" className="text-sm hover:text-teal-600 dark:hover:text-teal-400">amanmuleva@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white dark:bg-slate-900 rounded-lg">
                <Linkedin className="text-teal-600 dark:text-teal-400 mr-3" size={24} />
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/aman-muleva-57b26b23a/" className="text-sm hover:text-teal-600 dark:hover:text-teal-400">Connect on LinkedIn</a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white dark:bg-slate-900 rounded-lg">
                <Github className="text-teal-600 dark:text-teal-400 mr-3" size={24} />
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <a href="https://github.com/Rubbershredder/" className="text-sm hover:text-teal-600 dark:hover:text-teal-400">Check my repositories</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 dark:text-slate-400">© 2025 Aman Muleva.</p>
        </div>
      </footer>
    </div>
  );
}