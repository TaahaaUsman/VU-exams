  import { useState, useEffect } from 'react';
  import { bg } from '../constents';
  import { quizList } from '../mcqs';
  import Navbar from './quizSetUp/Navbar';
  import QuestionSection from './quizSetUp/QuestionSection';
  import OptionsSection from './quizSetUp/OptionsSection';
  import Navigation from './quizSetUp/Navigation';
  import SummaryToggle from './quizSetUp/SummaryToggle';
  import Summary from './quizSetUp/Summary';
  import User from './quizSetUp/User';
  import ReportModel from './quizSetUp/ReportModel';
  import { useSelector } from 'react-redux';

  export default function App() {
    const quizDetails = useSelector((state) => state.quiz);
    const [questions, setQuestions] = useState([
      {
        id: 1,
        text: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        correct: 0,
      },
    ]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [answers, setAnswers] = useState({});
    const [showSummary, setShowSummary] = useState(window.innerWidth >= 768);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFirst = () => {
      setCurrentQuestionIndex(0);
    };

    const handleLast = () => {
      setCurrentQuestionIndex(questions.length - 1);
    };

    const handleOptionSelect = (optionIndex) => {
      setSelectedOption(optionIndex);
    };

    const handleSave = () => {
      if (selectedOption === null) return;
      const updatedAnswers = {
        ...answers,
        [currentQuestionIndex]: selectedOption,
      };
      setAnswers(updatedAnswers);
      setSelectedOption(null);
    };

    const handleNext = () => {
      if (currentQuestionIndex === questions.length - 1) {
        setIsModalOpen(true);
      } else {
        setCurrentQuestionIndex((prev) =>
          Math.min(prev + 1, questions.length - 1)
        );
      }
    };

    const handlePrevious = () => {
      setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleFinishPractice = () => {
      setIsModalOpen(true);
    };

    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    const calculateReport = () => {
      const attempted = Object.keys(answers).length;
      const correct = Object.keys(answers).filter(
        (key) => answers[key] === questions[key].correct
      ).length;
      const wrong = attempted - correct;
      const percentage = (correct / questions.length) * 100;

      const lectureSize = 3;
      const lectures = Math.ceil(questions.length / lectureSize);
      const wrongPerLecture = Array(lectures).fill(0);

      Object.keys(answers).forEach((key) => {
        const lectureIndex = Math.floor(key / lectureSize);
        if (answers[key] !== questions[key].correct) {
          wrongPerLecture[lectureIndex]++;
        }
      });

      const weakLectures = wrongPerLecture
        .map((wrong, index) => (wrong > 1 ? `Lecture ${index + 1}` : null))
        .filter(Boolean);
      return { attempted, correct, wrong, percentage, weakLectures };
    };

    const handleSwitchQuestion = (index) => {
      setCurrentQuestionIndex(index);
    };

    const handleQuestion = () => {
      const selectedQuiz = quizList.find(
        (item) =>
          item.courseCode.toLowerCase() === quizDetails.courseCode.toLowerCase()
      );
      if (selectedQuiz) {
        const slicedQuestions = selectedQuiz.questions.slice(
          0,
          quizDetails.mcqCount
        );
        setQuestions(slicedQuestions);
      } else {
        setQuestions([
          {
            id: 1,
            text: 'What is the capital of France?',
            options: ['Paris', 'London', 'Berlin', 'Madrid'],
            correct: 0,
          },
        ]);
      }
    };

    useEffect(() => {
      if (quizDetails.courseCode) {
        handleQuestion();
      }
    }, [quizDetails.courseCode]);

    useEffect(() => {
      const handleResize = () => {
        setShowSummary(window.innerWidth >= 768);
      };
    
      // Add event listener on mount
      window.addEventListener('resize', handleResize);
    
      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    

    return (
      <div className="h-lvh bg-gray-100">
        <User />
        <Navbar courseCode={quizDetails.courseCode} />
        <div className="w-full flex gap-1">
          <div className={`w-full`}>
            {questions.length > 0 && (
              <>
                <div>
                  <QuestionSection
                    questions={questions}
                    currentQuestionIndex={currentQuestionIndex}
                    backgroundImage={bg}
                  />
                  <OptionsSection
                    questions={questions}
                    currentQuestionIndex={currentQuestionIndex}
                    selectedOption={selectedOption}
                    answers={answers}
                    handleOptionSelect={handleOptionSelect}
                  />
                </div>
              </>
            )}
          </div>
          <SummaryToggle
            showSummary={showSummary}
            setShowSummary={setShowSummary}
          />
          <div className={`w-1/5 ${showSummary ? 'block' : 'hidden'} `}>
            {showSummary && (
              <Summary
                questions={questions}
                answers={answers}
                backgroundImage={bg}
                attempted={Object.keys(answers).length}
                totalQuestions={questions.length}
                handleSwitchQuestion={handleSwitchQuestion}
              />
            )}
          </div>
        </div>
        <div className='absolute bottom-0 w-full'>
        <Navigation
          handlePrevious={handlePrevious}
          handleSave={handleSave}
          handleNext={handleNext}
          handleFirst={handleFirst}
          handleLast={handleLast}
          handleFinishExam={handleFinishPractice}
          report={calculateReport()}
        />
        </div>
        <ReportModel
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          report={calculateReport()}
        />
      </div>
    );
  }
