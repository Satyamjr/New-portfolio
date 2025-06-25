import { useEffect } from 'react';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CubeSpinner.css';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top when visiting the page
  }, []);

  return (
    <div className="py-20 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Text Content */}
        <div className="md:w-7/12 space-y-6 text-gray-800">
          <h2 className="text-4xl font-bold text-gray-900">Who am I?</h2>
          <p>
            I'm a creative and passionate web developer with hands-on experience building responsive and user-friendly applications. I specialize in UI design and crafting engaging digital experiences with attention to detail.
          </p>
          <p>
            I specialize in building interactive, scalable applications using technologies like React.js, Node.js, Express.js, Firebase, and Java. My projects demonstrate both front-end expertise and algorithmic thinking.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">Technologies I have worked with</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {[
              'React.js', 'Node.js', 'Express.js', 'Firebase', 'MongoDB',
              'JavaScript', 'REST APIs', 'Tailwind CSS', 'HTML', 'GitHub',  
               'Docker','Java', 'Python', 'Redux', 'Postman',
              'TypeScript', 'Next.js', 'SQL', 'Supabase', 'Bootstrap','GSAP',
            ].map((tech) => (
              <span
                key={tech}
                className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

       
        <div className="stage-cube-cont w-[260px] h-[260px] relative">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
