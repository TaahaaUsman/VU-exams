import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Icons import from React
import {
  FaCalendarCheck,
  FaSave,
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa';
// Import ReportModel component
import ReportModel from './ReportModel';
import { LiaAnkhSolid } from 'react-icons/lia';

export default function Navigation({
  handlePrevious,
  handleSave,
  handleNext,
  handleFirst,
  handleLast,
  report,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFinishPractice = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 bg-gray-200">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Button Group - Finish Practice & Back to Courses */}
        <div className="flex flex-row gap-2 sm:gap-4 w-full md:w-auto">
          <button
            onClick={handleFinishPractice}
            className="bg-red-600 text-black px-2 sm:px-4 py-1 sm:py-3 rounded-md flex items-center justify-center gap-1 hover:bg-opacity-80 active:scale-95 transition w-full md:w-auto"
          >
            <FaCalendarCheck style={{ fontSize: '1rem', color: 'black' }} />
            <span className="text-sm sm:text-base">Finish Practice</span>
          </button>

          <Link
            to="/courseslist"
            className="bg-[#34bfa3] text-black px-4 py-3 rounded-md flex items-center justify-center gap-1 hover:bg-opacity-80 active:scale-95 transition w-full md:w-auto"
          >
            Back to Courses
          </Link>
        </div>

        {/* Navigation Buttons - First, Last, Previous, Next */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <div className="flex w-full md:w-auto">
            <button
              onClick={handleFirst}
              className="bg-[#c19026d5] text-black py-2 w-1/2 md:w-24 rounded-l-md border-r border-black flex items-center justify-center gap-1 hover:bg-opacity-80 active:scale-95 transition"
            >
              <FaAngleLeft style={{ fontSize: '1rem', color: 'black' }} />
              <span>First</span>
            </button>
            <button
              onClick={handleLast}
              className="bg-[#c19028d5] text-black py-2 w-1/2 md:w-24 rounded-r-md border-l border-black flex items-center justify-center gap-1 hover:bg-opacity-80 active:scale-95 transition"
            >
              <span>Last</span>
              <FaAngleRight style={{ fontSize: '1rem', color: 'black' }} />
            </button>
          </div>

          <div className="flex w-full md:w-auto">
            <button
              onClick={handlePrevious}
              className="bg-[#c19026d5] text-black py-2 w-1/2 md:w-24 rounded-l-md border-r border-black flex items-center justify-center gap-1 hover:bg-opacity-80 active:scale-95 transition"
            >
              <FaAngleLeft style={{ fontSize: '1rem', color: 'black' }} />
              <span>Previous</span>
            </button>
            <button
              onClick={handleNext}
              className="bg-[#c19028d5] text-black py-2 w-1/2 md:w-24 rounded-r-md border-l border-black flex items-center justify-center gap-1 hover:bg-opacity-80 active:scale-95 transition"
            >
              <span>Next</span>
              <FaAngleRight style={{ fontSize: '1rem', color: 'black' }} />
            </button>
          </div>

          {/* Save Button - Full Width on Small Screens */}
          <button
            onClick={handleSave}
            className="bg-[#34bfa3] text-white px-4 py-2 rounded-md flex items-center justify-center gap-1 hover:bg-opacity-80 active:scale-95 transition"
          >
            <FaSave style={{ fontSize: '1rem', color: 'white' }} />
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
}
