import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub as fabGithub,
  faLinkedin,
  faXTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);

 
  useEffect(() => {
    function handleClickOutside(e) {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const navLinks = [
    { to: '/', icon: faHome, label: 'Home' },
    { to: '/about', icon: faUser, label: 'About' },
    { to: '/projects', icon: faSuitcase, label: 'Projects' },
    { to: '/contact', icon: faEnvelope, label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://github.com/Satyamjr', icon: fabGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/satyam-singh-7b4933231/', icon: faLinkedin, label: 'LinkedIn' },
    { href: 'https://x.com/_iamsanskari', icon: faXTwitter, label: 'Twitter' },
    { href: 'https://www.facebook.com/jrsatyams/', icon: faFacebook, label: 'Facebook' },
  ];

  return (
    <>
      
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 sm:hidden text-2xl p-2 bg-white rounded shadow"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

     
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 sm:hidden" />
      )}

      
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 h-screen w-64 bg-white z-50 p-4 shadow transform transition-transform duration-300 sm:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setOpen(false)} className="text-xl">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <ul className="space-y-6">
          {navLinks.map(({ to, icon, label }) => (
            <li key={label}>
              <NavLink
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 py-2 px-3 rounded-md text-lg font-medium transition ${
                    isActive ? 'text-orange-700' : 'text-gray-700'
                  } hover:bg-gray-100`
                }
              >
                <FontAwesomeIcon icon={icon} />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex gap-4 justify-start">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-700"
              aria-label={label}
            >
              <FontAwesomeIcon icon={icon} className="text-xl" />
            </a>
          ))}
        </div>
      </div>

     
      <div className="hidden sm:fixed sm:top-0 sm:left-0 sm:h-screen sm:w-16 sm:hover:w-40 bg-white border-r transition-all duration-300 ease-in-out sm:flex sm:flex-col sm:justify-between z-50">
        <div className="flex-1 flex flex-col justify-center">
          <ul className="flex flex-col items-start w-full space-y-6 px-2">
            {navLinks.map(({ to, icon, label }) => (
              <li key={label} className="w-full">
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `group flex items-center w-full px-3 py-2 rounded-md relative text-xl font-medium transition-all duration-300 ${
                      isActive ? 'text-orange-700' : 'text-gray-700'
                    } hover:bg-gray-100`
                  }
                >
                  <span className="transition-opacity duration-200 group-hover:opacity-0">
                    <FontAwesomeIcon icon={icon} />
                  </span>
                  <span className="absolute left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap text-sm">
                    {label}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center pb-6 space-y-4">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-700 transition-colors"
              aria-label={label}
            >
              <FontAwesomeIcon icon={icon} className="text-lg" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
