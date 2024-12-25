import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from '../features/coursesSlice';
import quizReducer from '../features/quizSlice';

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    quiz: quizReducer,
  },
});

export default store;
