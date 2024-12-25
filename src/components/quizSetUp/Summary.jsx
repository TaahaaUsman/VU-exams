// Summary Component
export default function Summary({
  questions,
  answers,
  backgroundImage,
  totalQuestions,
  attempted,
  handleSwitchQuestion,
}) {
  const progressPercentage = (attempted / totalQuestions) * 100;

  return (
    <div className="relative bg-gray-100 h-full">
      {/* First section */}
      <div
        className="bg-cover bg-center h-auto p-3 pb-4"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <p className="text-white text-lg font-semibold">Summary</p>
      </div>
      {/* Second section */}
      <div className="p-2" style={{ maxHeight: '300px', overflowY: 'auto' }}>
        <div className="grid grid-cols-6 gap-4">
          {questions.map((_, index) => (
            <div
              key={index}
              onClick={() => handleSwitchQuestion(index)}
              className={`cursor-pointer w-6 h-6 rounded-xl flex items-center justify-center text-sm font-semibold ${
                answers[index] !== undefined
                  ? answers[index] === questions[index].correct
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      {/* Third section */}
      <div className="absolute bottom-0 w-full p-4 bg-white">
        <div className="flex items-center justify-between">
          <span>Attempted: {attempted}</span>
          <span>Total: {totalQuestions}</span>
        </div>
        <div className="mt-2">
          <progress
            className="w-full"
            value={attempted}
            max={totalQuestions}
          ></progress>
          <div className="text-center mt-1">
            {progressPercentage.toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  );
}
