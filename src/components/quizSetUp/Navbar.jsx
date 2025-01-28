import { courses } from '../../constents';
import { useEffect, useState } from 'react';

export default function Navbar({ courseCode }) {
  const [title, setTitle] = useState({});
  const [courseNotFound, setCourseNotFound] = useState(false);
  const date = new Date();

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${strMinutes} ${ampm}`;
  };

  const handleCourseTitle = (courseCode) => {
    const course = courses.find((course) => course.code === courseCode);
    if (course) {
      setTitle(course);
      setCourseNotFound(false);
    } else {
      setTitle({});
      setCourseNotFound(true);
    }
  };

  useEffect(() => {
    handleCourseTitle(courseCode);
  }, [courseCode]);

  return (
    <nav className="w-full h-[10%] bg-[#212529] text-white font-semibold mb-2 flex justify-between items-center">
      {courseNotFound ? (
        <span className="text-sm sm:text-base">Course Not Found</span>
      ) : (
        <span className="text-sm sm:text-base">
          {title.code} ({title.title})
        </span>
      )}
      <div className="hidden md:block">
        <div className="flex space-x-8">
          <span>Login Time {formatTime(date)}</span>
          <span>Guest</span>
        </div>
      </div>
    </nav>
  );
}
