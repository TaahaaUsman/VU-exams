import { categories } from '../constents';

const Sidebar = () => {
  return (
    <div className="hidden md:block w-1/4 px-8">
      <h2 className="text-xl font-semibold mb-4">FIND COURSES</h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
