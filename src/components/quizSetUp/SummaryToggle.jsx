import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';

// SummaryToggle Component
export default function SummaryToggle({ showSummary, setShowSummary }) {

  return (
    <div className="absolute right-0 top-60 z-10">
      <button
        onClick={() => setShowSummary(!showSummary)}
        className="bg-purple-700 bg-opacity-80 text-white px-4 py-4 rounded-l-md flex items-center gap-1"
      >
        {showSummary ? (
          <FaAngleDoubleRight style={{ fontSize: '1rem', color: 'white' }} />
        ) : (
          <FaAngleDoubleLeft style={{ fontSize: '1rem', color: 'white' }} />
        )}
      </button>
    </div>
  );
}
