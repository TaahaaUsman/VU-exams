// OptionsSection Component
export default function OptionsSection({
  questions,
  currentQuestionIndex,
  selectedOption,
  answers,
  handleOptionSelect,
}) {
  return (
    <div className="p-6 bg-white shadow-md">
      {questions[currentQuestionIndex].options.map((option, index) => (
        <div
          key={index}
          onClick={() => handleOptionSelect(index)}
          className={`p-2 border rounded-md mb-2 cursor-pointer ${
            selectedOption === index ? 'bg-blue-300' : ''
          } ${
            answers[currentQuestionIndex] === index
              ? index === questions[currentQuestionIndex].correct
                ? 'bg-green-300'
                : 'bg-red-300'
              : ''
          }`}
        >
          {option}
        </div>
      ))}
    </div>
  );
}
