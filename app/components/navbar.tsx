// @flow strict
import Link from "next/link";


function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-[#0A0A0A]/70 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="flex items-center justify-between py-5 max-w-[92rem] mx-auto px-6 sm:px-12">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-cyan-400 text-3xl font-extrabold tracking-tight drop-shadow-md">
            AMIT YADAV
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#about">
              <div className="text-sm font-medium text-slate-300 transition-all duration-300 hover:text-cyan-400 hover:scale-105">ABOUT</div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#experience"><div className="text-sm font-medium text-slate-300 transition-all duration-300 hover:text-cyan-400 hover:scale-105">EXPERIENCE</div></a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#skills"><div className="text-sm font-medium text-slate-300 transition-all duration-300 hover:text-cyan-400 hover:scale-105">SKILLS</div></a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#education"><div className="text-sm font-medium text-slate-300 transition-all duration-300 hover:text-cyan-400 hover:scale-105">EDUCATION</div></a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#projects"><div className="text-sm font-medium text-slate-300 transition-all duration-300 hover:text-purple-400 hover:scale-105">PROJECTS</div></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;