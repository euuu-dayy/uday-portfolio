import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import ResumeModal from "./ResumeModal";
import useResume from "../../hooks/useResume"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const resumeLink = useResume()

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Uday</h1>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#">
            <li className="hover:text-primary relative after:absolute after:w-0 hover:after:w-full after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 transition cursor-pointer">
              Home
            </li>
          </a>

          <a href="#about">
            <li className="hover:text-primary relative after:absolute after:w-0 hover:after:w-full after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 transition cursor-pointer">
              About
            </li>
          </a>

          <a href="#skills">
            <li className="hover:text-primary relative after:absolute after:w-0 hover:after:w-full after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 transition cursor-pointer">
              Skills
            </li>
          </a>

          <a href="#projects">
            <li className="hover:text-primary relative after:absolute after:w-0 hover:after:w-full after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 transition cursor-pointer">
              Projects
            </li>
          </a>

          <a href="#ai">
            <li className="hover:text-primary relative after:absolute after:w-0 hover:after:w-full after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 transition cursor-pointer">
              AI Assistant
            </li>
          </a>

          <a href="#contact">
            <li className="hover:text-primary relative after:absolute after:w-0 hover:after:w-full after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 transition cursor-pointer">
              Contact
            </li>
          </a>

          <a
            href={resumeLink}
            target="_blank"
            className="bg-primary text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            Resume
          </a>
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0f172a] border-t border-white/10 px-6 py-6 space-y-6">
          <a href="#about" onClick={() => setOpen(false)}>
            <p>About</p>
          </a>

          <a href="#skills" onClick={() => setOpen(false)}>
            <p>Skills</p>
          </a>

          <a href="#projects" onClick={() => setOpen(false)}>
            <p>Projects</p>
          </a>

          <a href="#ai" onClick={() => setOpen(false)}>
            <p>AI Assistant</p>
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            <p>Contact</p>
          </a>

          <a
            href={resumeLink}
            target="_blank"
            className="block text-primary"
          >
            Resume
          </a>

          <button
            onClick={() => setShowModal(true)}
            className="
            text-primary
            border
            border-primary
            px-4
            py-2
            rounded-lg
          "
          >
            Add Resume
          </button>
        </div>
      )}
      {showModal && <ResumeModal closeModal={() => setShowModal(false)} />}
    </nav>
  );
};

export default Navbar;
