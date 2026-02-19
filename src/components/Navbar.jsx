import React from 'react';
import logo from '../assets/logo.png';

const Navbar = ({ isScrolled, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 shadow-none bg-white/90 backdrop-blur-md' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-10">
        {/* Left: Logo */}
        <div className="cursor-pointer z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logo} alt="Logo" className="h-10 md:h-12 w-auto" />
        </div>

        {/* Center: Navigation Links (Hidden on Mobile) */}
        <ul className=" md:flex items-center gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {['Home', 'Gallery', 'Artists', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-black text-sm font-bold uppercase tracking-widest hover:text-yellow-500 transition-colors drop-shadow-sm relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Icons (Hidden on Mobile) */}
        <div className=" md:flex items-center gap-6 z-50">
          {/* Search Icon */}
          <button className="text-black hover:text-yellow-500 transition-colors relative group">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Cart Icon */}
          <button className="text-black hover:text-yellow-500 transition-colors relative group">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-1 -right-2 bg-yellow-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">0</span>
          </button>
        </div>

        {/* Mobile Menu Icon (Visible on Mobile) */}
        <button
          className="md:hidden text-black z-50 p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <ul className="flex flex-col items-center gap-8 mb-8">
          {['Home', 'Gallery', 'Artists', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-black text-2xl font-bold uppercase tracking-widest hover:text-yellow-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Icons */}
        <div className="flex items-center gap-8 mt-4">
          <button className="text-black hover:text-yellow-500 transition-colors p-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <button className="text-black hover:text-yellow-500 transition-colors relative p-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute top-0 -right-1 bg-yellow-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
