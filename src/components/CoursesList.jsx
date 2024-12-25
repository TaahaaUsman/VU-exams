import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setQuizDetails } from '../features/quizSlice';

const CoursesList = () => {
  const courses = useSelector((state) => state.courses.value);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [preparationType, setPreparationType] = useState('');
  const [mcqCount, setMcqCount] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setPreparationType('');
    setMcqCount('');
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleStartPractice = () => {
    if (!preparationType || !mcqCount) {
      alert('Please select both preparation type and number of MCQs.');
      return;
    }

    dispatch(
      setQuizDetails({
        courseCode: selectedCourse.code,
        preparationType,
        mcqCount,
      })
    );

    setPopupVisible(false);
    navigate('/quiz');
  };

  const MCQDropdown = () => (
    <select
      value={mcqCount}
      onChange={(e) => setMcqCount(e.target.value)}
      className="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <option value="">Select</option>
      <option value="20">20</option>
      <option value="25">25</option>
      <option value="30">30</option>
    </select>
  );

  return (
    <div className="w-3/4 px-8">
      <h2 className="text-2xl font-bold mb-6">AVAILABLE COURSES</h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border px-2 sm:px-4 py-2 text-sm md:text-base">
              Sr. #
            </th>
            <th className="border px-4 py-2">Code</th>
            <th className="border px-4 py-2">Title</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{course.sr}</td>
              <td
                className="border px-4 py-2 text-blue-500 hover:underline cursor-pointer"
                onClick={() => handleCourseClick(course)}
              >
                {course.code}
              </td>
              <td className="border px-4 py-2">{course.title}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup Modal */}
      {popupVisible && (
        <div className="w-full h-full fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-10 rounded-lg shadow-2xl w-1/3 text-center">
            <h3 className="text-2xl font-bold mb-6">Select Preparation Type</h3>
            <div className="mb-6 space-y-6">
              {/* Mid Term Section */}
              <div
                className={`border p-4 rounded-md hover:bg-gray-50 transition cursor-pointer ${
                  preparationType === 'midterm' ? 'border-blue-500' : ''
                }`}
                onClick={() => setPreparationType('midterm')}
              >
                <label className="inline-flex items-center space-x-3 w-full cursor-pointer">
                  <input
                    type="radio"
                    name="preparationType"
                    value="midterm"
                    checked={preparationType === 'midterm'}
                    onChange={(e) => setPreparationType(e.target.value)}
                    className="hidden"
                  />
                  <span className="text-lg">Mid Term Preparation</span>
                </label>
                {preparationType === 'midterm' && (
                  <div className="mt-4">
                    <label className="block text-left mb-2 text-gray-700">
                      Select Number of MCQs
                    </label>
                    <MCQDropdown />
                  </div>
                )}
              </div>

              {/* Final Term Section */}
              <div
                className={`border p-4 rounded-md hover:bg-gray-50 transition cursor-pointer ${
                  preparationType === 'finalterm' ? 'border-blue-500' : ''
                }`}
                onClick={() => setPreparationType('finalterm')}
              >
                <label className="inline-flex items-center space-x-3 w-full cursor-pointer">
                  <input
                    type="radio"
                    name="preparationType"
                    value="finalterm"
                    checked={preparationType === 'finalterm'}
                    onChange={(e) => setPreparationType(e.target.value)}
                    className="hidden"
                  />
                  <span className="text-lg">Final Term Preparation</span>
                </label>
                {preparationType === 'finalterm' && (
                  <div className="mt-4">
                    <label className="block text-left mb-2 text-gray-700">
                      Select Number of MCQs
                    </label>
                    <MCQDropdown />
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleClosePopup}
                className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleStartPractice}
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Start Practice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesList;
