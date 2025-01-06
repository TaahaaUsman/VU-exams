import { FaExclamation } from 'react-icons/fa';

// QuestionSection Component
export default function QuestionSection({
  questions,
  currentQuestionIndex,
  backgroundImage,
}) {
  return (
    <div
      className="bg-cover bg-center h-auto"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-purple-700 bg-opacity-60">
        {/* First part */}
        <div className="flex justify-between items-center p-1 pr-2 sm:pr-20 md:pr-36">
          <p className="text-white text-base sm:text-lg font-semibold">
            Question No : {currentQuestionIndex + 1} of {questions.length}
          </p>
          <div className="flex items-center space-x-2 font-semibold">
            <p className="text-xs sm:text-sm text-white">
              Marks: <span className="text-[#00c5dc]">1</span> (Time{' '}
              <span className="text-[#00c5dc]">1 Min</span>)
            </p>
            <div className="hidden md:block">
              <span className="cursor-pointer w-10 h-10 bg-[#ffb822] rounded-full flex items-center justify-center">
                <FaExclamation style={{ fontSize: '1.4rem', color: 'white' }} />
              </span>
            </div>
          </div>
        </div>
        {/* Second part */}
        <div className="bg-white p-1 w-full h-auto shadow-md">
          <textarea
            className="font-bold w-full h-32 outline-none border-2 p-2"
            readOnly
            value={questions[currentQuestionIndex].text}
          />
        </div>
        {/* Third part */}
        <div>
          <p className="text-white text-base sm:text-lg font-semibold p-1">
            Answer
          </p>
        </div>
      </div>
    </div>
  );
}
