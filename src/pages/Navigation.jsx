import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = localStorage.getItem('afsar');

  const handleLogout = () =>{
    localStorage.removeItem('afsar')
  }

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Title */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">Product-Manager-Mini-App</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/">
                <a className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition">Home</a>
              </Link>
              <Link to="/dashboard">
                <a  className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition">Deshboard</a>
              </Link>
              <Link to={auth ? "/" : "login"} className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition">
              {auth ? (
                <button type="button" onClick={handleLogout} className="w-full h-full">
                  Logout
                </button>
              ) : (
                "Login"
              )}
            </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="/about" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="/services" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="/contact" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;