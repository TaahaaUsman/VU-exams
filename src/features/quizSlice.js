// src/redux/slices/quizSlice.js
import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    courseCode: '',
    preparationType: '',
    mcqCount: 0,
  },
  reducers: {
    setQuizDetails: (state, action) => {
      const { courseCode, preparationType, mcqCount } = action.payload;
      state.courseCode = courseCode;
      state.preparationType = preparationType;
      state.mcqCount = mcqCount;
    },
  },
});

export const { setQuizDetails } = quizSlice.actions;
export default quizSlice.reducer;
