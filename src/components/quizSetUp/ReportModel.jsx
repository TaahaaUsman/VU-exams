import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ReportModal({ isOpen, onClose, report }) {
  const modalRef = useRef();

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div ref={modalRef} className="bg-white p-6 rounded-md shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Report</h2>
        <p>Total Attempted: {report.attempted}</p>
        <p>Total Correct: {report.correct}</p>
        <p>Total Wrong: {report.wrong}</p>
        <p>Percentage: {report.percentage.toFixed(2)}%</p>
        {report.weakLectures.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Weak Lectures:</h3>
            <ul className="list-disc list-inside">
              {report.weakLectures.map((lecture, index) => (
                <li key={index}>{lecture}</li>
              ))}
            </ul>
          </div>
        )}
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
}
