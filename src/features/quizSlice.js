// src/redux/slices/quizSlice.js
import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    courseCode: '',
    preparationType: '',
    mcqCount: 0,
    questions:  [],
    currentQuestionIndex: 0,
    answers: [],
    selectedOption: null,
  },
  reducers: {
    setQuizDetails: (state, action) => {
      const { courseCode, preparationType, mcqCount } = action.payload;
      state.courseCode = courseCode;
      state.preparationType = preparationType;
      state.mcqCount = mcqCount;
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    setCurrentQuestionIndex: (state, action) => {
      state.currentQuestionIndex = action.payload;
    },
    setAnswers: (state, action) => {
      const { index, selectedOption } = action.payload;
      state.answers[index] = selectedOption;
    },
    resizeQuiz : (state) => {
      state.questions = [];
      state.currentQuestionIndex = 0;
      state.answers = {};
      state.selectedOption = null;
    },

  },
});

export const { setQuizDetails, setQuestions, setCurrentQuestionIndex, setAnswers, resizeQuiz } = quizSlice.actions;
export default quizSlice.reducer;
