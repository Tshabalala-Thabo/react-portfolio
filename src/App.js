import React from 'react';
import BurgerMenu from './BurgerMenu';
import { Tab } from '@headlessui/react'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Palette, Globe, Zap, Server, Database, Terminal, Cpu, Figma, PenTool, TableProperties, BarChart } from 'lucide-react'

export function Component() {
  const cardData = [
    {
      title: "Web Development",
      subtitle: "Crafting Digital Experiences",
      content: "I create responsive, user-friendly websites using modern technologies. From concept to deployment, I ensure seamless functionality and engaging interfaces that captivate users and drive business growth."
    },
    {
      title: "UI/UX Design",
      subtitle: "Enhancing User Interactions",
      content: "I design intuitive and visually appealing user interfaces. By focusing on user experience, I create designs that are not only aesthetically pleasing but also functional and easy to navigate."
    },
    {
      title: "Mobile App Development",
      subtitle: "Building for the Small Screen",
      content: "I develop cross-platform mobile applications that work seamlessly on iOS and Android. Using React Native, I create efficient, feature-rich apps that provide a native-like experience to users."
    }
  ];

  return (
    <>
      {cardData.map((card, index) => (
        <div key={index} className="bg-primary-100 border bg-opacity-70 border-white border-opacity-10 text-white rounded-lg shadow-md overflow-hidden">
          <div className="px-8 py-7">
            <h3 className="text-2xl text-white font-semibold mb-2">{card.title}</h3>
            <h1 className="text-lg font-source-code-pro font-bold text-primary mb-4">{card.subtitle}</h1>
            <p className="text-white text-opacity-70">{card.content}</p>
          </div>
        </div>
      ))}</>
  );
}

export function ProfessionalSkills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { icon: Code, title: "HTML/CSS", description: "Proficient in creating responsive and accessible web layouts using modern HTML5 and CSS3." },
        { icon: Zap, title: "JavaScript", description: "Expert in JavaScript, including ES6+ features, async programming, and popular frameworks like React." },
        { icon: Globe, title: "Frameworks", description: "Experienced with frontend frameworks such as React, Vue, and Angular for building interactive UIs." },
        { icon: Palette, title: "UI/UX", description: "Skilled in creating intuitive user interfaces and enhancing overall user experience in web applications." },
      ]
    },
    {
      title: "Backend and Programming",
      skills: [
        { icon: Server, title: "Node.js", description: "Proficient in server-side JavaScript using Node.js for building scalable and efficient backend services." },
        { icon: Terminal, title: "Python", description: "Experienced in Python programming for web development, data analysis, and automation tasks." },
        { icon: Cpu, title: "APIs", description: "Skilled in designing and implementing RESTful APIs and working with GraphQL for data querying." },
        { icon: Database, title: "Databases", description: "Proficient in working with both SQL and NoSQL databases, including MySQL, PostgreSQL, and MongoDB." },
      ]
    },
    {
      title: "Design and Database",
      skills: [
        { icon: Figma, title: "Figma", description: "Experienced in using Figma for creating and collaborating on UI designs and prototypes." },
        { icon: PenTool, title: "Illustrator", description: "Skilled in vector graphics creation and manipulation using Adobe Illustrator for logos and icons." },
        { icon: TableProperties, title: "SQL", description: "Proficient in writing complex SQL queries and optimizing database performance for large-scale applications." },
        { icon: BarChart, title: "Data Viz", description: "Experienced in data visualization techniques using tools like D3.js and Chart.js for interactive dashboards." },
      ]
    }
  ]

  return (
    <>
      {skillCategories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h3 className="text-xl font-source-code-pro font-semibold mb-6 text-primary">{category.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="flex flex-col items-start space-y-2">
                <div className="flex items-center space-x-2">
                  <skill.icon className="w-6 h-6 text-primary" />
                  <h4 className="text-2xl font-bold">{skill.title}</h4>
                </div>
                <p className="text-sm opacity-70 ">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}


// Sample project data with descriptions and links
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'WEB-APP',
    image: '/images/tmsystem.png',
    description: 'A full-featured e-commerce platform with product management, shopping cart, and secure checkout.',
    link: '/projects/e-commerce-platform'
  },
  {
    id: 2,
    title: 'Fitness Tracker App',
    category: 'MOBILE-APP',
    image: '/images/tmsystem.png',
    description: 'Mobile app for tracking workouts, nutrition, and personal fitness goals with data visualization.',
    link: '/projects/fitness-tracker-app'
  },
  {
    id: 3,
    title: 'Corporate Website',
    category: 'WEBSITE',
    image: '/images/tmsystem.png',
    description: 'Responsive corporate website with modern design, showcasing company services and portfolio.',
    link: '/projects/corporate-website'
  },
  {
    id: 4,
    title: 'Tech Startup Logo',
    category: 'LOGO',
    image: '/images/tmsystem.png',
    description: 'Minimalist and memorable logo design for a cutting-edge tech startup in the AI industry.',
    link: '/projects/tech-startup-logo'
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    category: 'WEB-APP',
    image: '/images/tmsystem.png',
    description: 'Comprehensive dashboard for managing multiple social media accounts with analytics and scheduling.',
    link: '/projects/social-media-dashboard'
  },
  {
    id: 6,
    title: 'Restaurant Booking App',
    category: 'MOBILE-APP',
    image: '/images/tmsystem.png',
    description: 'User-friendly mobile app for booking restaurant tables, viewing menus, and managing reservations.',
    link: '/projects/restaurant-booking-app'
  },
]

const categories = ['ALL', 'WEB-APP', 'MOBILE-APP', 'WEBSITE', 'LOGO']

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('ALL')

  const filteredProjects = activeTab === 'ALL'
    ? projects
    : projects.filter(project => project.category === activeTab)

  return (
    <section className="py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center uppercase mb-8">My Portfolio</h2>

        <Tab.Group>
          <Tab.List className="flex justify-center space-x-1 mb-8">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  `px-4 py-2 text-sm font-medium leading-5 transition-colors duration-200
                  ${selected
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                  }`
                }
                onClick={() => setActiveTab(category)}
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-primary-100 relative border bg-opacity-70 border-white border-opacity-10 text-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div
                  className="absolute bottom-0 right-0 -mr-[0px] w-[200px] h-[200px] bg-no-repeat bg-right-bottom z-0 opacity-80"
                  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/card-polygons.svg)` }}
                ></div>
                <img src={project.image} alt={project.title} className="w-full h-auto object-cover z-10" />
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <span className="inline-block bg-muted rounded-full font-source-code-pro text-primary py-1 text-sm font-semibold">
                    {project.category}
                  </span>
                  <p className="text-white opacity-70 text-sm mb-4 flex-grow">{project.description}</p>
                  <div className="flex justify-between items-center">

                    <a href={project.link} className="text-white hover:text-primary/80 transition-colors duration-200 flex items-center gap-1">
                      See More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute top-0 right-0 -mt-[0px] -mr-[0px] w-[890px] h-[1673px] bg-no-repeat bg-right-top z-0 opacity-30 lg:opacity-100"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/polygons.svg)` }}
      ></div>
      <BurgerMenu />
      <main className="pt-16 relative z-10">
        <section className="py-8 px-4 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl container mx-auto flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full flex flex-col items-center lg:items-start lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <p className="text-sm sm:text-base text-white font-bold mb-2">HELLO, <span className="text-primary">MY NAME IS</span></p>
              <h1 className='text-3xl sm:text-4xl md:text-5xl text-primary font-bold mb-4'>
                THABO <span className='text-primary-200 [text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]'>TSHABALALA</span>
              </h1>
              <p className="text-base lg:text-lg mb-4 font-bold text-white">I am: <span className="text-white text-xl sm:text-2xl font-normal ml-1 font-source-code-pro">Software Developer</span></p>
              <div className='hidden lg:block'>
                <p className="text-sm sm:text-base text-white opacity-70 mb-6">From Pretoria, with competitive skills and a strong passion for my career. Always excited to work on a project.</p>
                <div className="flex mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8 opacity-70 mr-4 text-white" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z" /></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8 opacity-70 mr-4 text-white" viewBox="0 0 512 512"><path fill="currentColor" d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32Zm-273.3 373.43h-64.18V205.88h64.18ZM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43Zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64Z" /></svg>
                </div>
                <div className="flex items-center">
                  <button className="bg-primary mt-2 hover:bg-primary/80 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded transition duration-300 text-sm sm:text-base">
                    Download CV
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/2 md:w-2/3 lg:w-5/12 relative">
              <img
                src="/images/right.svg"
                alt="Hero illustration"
                className="w-full h-auto"
              />
              <div className="absolute bottom-12  md:bottom-16 sm:bottom-24 md:bottom-32 -left-24 lg:-left-9 sm:-left-10 flex items-center border border-white border-opacity-70 text-white rounded-md p-2 bg-primary-100 bg-opacity-70">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                  1 <span className="text-primary">+</span>
                </h1>
                <div className="text-xs sm:text-sm font-bold ml-2 sm:ml-4">
                  <p>YEARS OF</p>
                  <p className="text-primary">EXPERIENCE</p>
                </div>
              </div>
              <div className="absolute bottom-4 sm:bottom-8 md:bottom-16 -right-24 lg:right-0 flex items-center border border-white border-opacity-70 text-white rounded-md p-2 bg-primary-100 bg-opacity-70">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                  20 <span className="text-primary">+</span>
                </h1>
                <div className="text-xs sm:text-sm font-bold ml-2 sm:ml-4">
                  <p>PROJECTS</p>
                  <p className="text-primary">COMPLETED</p>
                </div>
              </div>
            </div>
            <div className='block lg:hidden flex flex-col items-center' >
              <p className="text-sm lg:text-base text-white opacity-70 text-center mt-6 mb-6">From Pretoria, with competitive skills in software development and UI design. I have a strong passion for my career and am always excited to tackle new projects, ensuring both functionality and great user experiences.</p>
              <div className="flex mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-8 sm:h-8 opacity-70 mr-2 text-white" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-8 sm:h-8 opacity-70 text-white" viewBox="0 0 512 512"><path fill="currentColor" d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32Zm-273.3 373.43h-64.18V205.88h64.18ZM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43Zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64Z" /></svg>
              </div>
              <div className="flex items-center">
                <button className="bg-primary mt-2 hover:bg-primary/80 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded transition duration-300 text-sm sm:text-base">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl text-white font-bold text-center mb-12">WHAT I DO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Component />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-100 bg-opacity-70 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-3xl text-center uppercase mb-12">Professional Skills</h2>
            <div className="space-y-16">
              <ProfessionalSkills />
            </div>
          </div>
        </section>
        <PortfolioSection />
      </main>
    </div>
  );
}

export default App;
