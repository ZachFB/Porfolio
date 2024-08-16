import clsx from "clsx";
import { useState } from "react";
import { FolderDot, GraduationCap, Home, Mail } from 'lucide-react';
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = ({className} : {className?:string}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header  className={clsx(className, "fixed top-0 w-full font1 h-20 border border-b-accent")}>
      <nav className="flex max-w-6xl mt-6 m-auto items-center justify-between">
        <h1 className="ml-8 text-2xl mr-auto">Dev Zack</h1>
        
        {/* Bouton pour ouvrir le menu sur mobile/tablette */}
        <button
          className="md:hidden mr-8 focus:outline-none"
          onClick={toggleMenu}
        >
          {/* Icone pour le menu hamburger */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Menu pour desktop */}
        <ul className="hidden md:flex md:space-x-6">
        <a href="#Presentation"><li className="flex space-x-2 active:text-muted"><Home size={20}/><span>Présentation</span></li></a>
        <a href="#Competences"><li className="flex space-x-2 active:text-muted"><GraduationCap size={20}/><span>Compétences</span></li></a>
        <a href="#Projets"><li className="flex space-x-2 active:text-muted"><FolderDot size={20}/><span>Projets</span></li></a>
        <a href="#Contact"><li className="flex space-x-2 active:text-muted"><Mail size={20}/><span>Contact</span></li></a>
          <li><ThemeToggle/></li>
        </ul>

        {/* Dropdown pour mobile/tablette */}
        {isOpen && (
          <ul className="md:hidden absolute top-20 left-0 w-full dark:bg-[#0a001a] bg-[#efe5ff] z-20">
            <a href="#Presentation"><li className="px-6 py-2 flex space-x-2 active:text-muted"><Home size={20}/><span>Présentation</span></li></a>
            <a href="#Competences"><li className="px-6 py-2 flex space-x-2 active:text-muted"><GraduationCap size={20}/><span>Compétences</span></li></a>
            <a href="#Projets"><li className="px-6 py-2 flex space-x-2 active:text-muted"><FolderDot size={20}/><span>Projets</span></li></a>
            <a href="#Contact"><li className="px-6 py-2 flex space-x-2 active:text-muted"><Mail size={20}/><span>Contact</span></li></a>
            <li className="px-6 py-2"><ThemeToggle/></li>
          </ul>
        )}
      </nav>
    </header>
  );
};