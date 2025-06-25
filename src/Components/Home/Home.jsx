import { FaFilePdf } from 'react-icons/fa';
import Pic from '../../Assets/Images/Pic.jpg';

export default function Home() {
  return (
    <div className="relative flex flex-col-reverse sm:flex-row items-center justify-between max-w-7xl mx-auto px-6 sm:px-16 py-20 bg-gradient-to-b from-white to-[#fdf5f1] overflow-hidden">
      <div className="sm:w-1/2 w-full z-10 text-center sm:text-left">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight">
          Hi, <br />
          I'm <span className="text-orange-700">Satyam Singh <span className="wave-emoji">👋</span></span>
          <br />
        </h2>
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mt-4">
          Software Engineer / Web Developer
        </h3>
        <a
          href="/Satyam_Singh_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white text-black font-medium border border-orange-700 rounded-lg shadow hover:shadow-md transition"
        >
          <FaFilePdf className="text-red-600 text-xl" />
          Download CV
        </a>
      </div>

      <div className="sm:w-1/2 w-full relative flex justify-center sm:justify-end mb-10 sm:mb-0">
        <div className="w-60 sm:w-96 rounded-full border-[6px] border-orange-700 shadow-lg overflow-hidden">
          <img src={Pic} alt="Satyam Singh" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
}
