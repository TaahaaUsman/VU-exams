import { useState } from 'react';
// Static data
import { vu, links } from '../constents';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { filterCourses } from '../features/coursesSlice';
// React router dom
import { Link } from 'react-router-dom';
// React Icons
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.value);

  const handleSearch = () => {
    if (!searchTerm) {
      alert('Please enter code first');
      return;
    }

    dispatch(filterCourses(searchTerm));

    if (courses.length === 0) {
      alert('No course found');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <Link to="/">
          <img src={vu} alt="Virtual University" className="h-8 w-16" />
        </Link>
        <button className="ml-4 text-gray-700 sm:hidden" onClick={toggleMenu}>
          <FaBars size={24} />
        </button>
      </div>
      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } absolute top-10 right-6 z-10 flex-col bg-white shadow-md p-6 rounded-lg rounded-tr-[40px] sm:hidden`}
      >
        {links.map((link) => (
          <Link
            key={link.id}
            to={link.link}
            className={`text-gray-700 hover:text-blue-500 ${
              activeLink === link.id ? 'text-blue-500' : ''
            }`}
            onClick={() => setActiveLink(link.id)}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="hidden sm:flex sm:flex-row sm:items-center sm:space-x-6">
        {links.map((link) => (
          <Link
            key={link.id}
            to={link.link}
            className={`text-gray-700 hover:text-blue-500 ${
              activeLink === link.id ? 'text-blue-500' : ''
            }`}
            onClick={() => setActiveLink(link.id)}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex lg:items-center lg:space-x-4">
        <input
          type="text"
          placeholder="Search by code"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          className="border border-gray-300 rounded px-2 py-1"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
