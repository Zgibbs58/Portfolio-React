import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function NavLinks() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navigation
      links={[
        <Link key={1} className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2" to="/About">
          About
        </Link>,
        <Link key={2} className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2" to="/portfolio">
          Portfolio
        </Link>,
        <Link key={3} className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2" to="/resume">
          Resume
        </Link>,
        <Link key={4} className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2" to="/contact">
          Contact
        </Link>,
      ]}
    />
  );
}