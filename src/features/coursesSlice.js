import { createSlice } from '@reduxjs/toolkit';
import { courses } from '../constents';

export const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    value: courses,
  },
  reducers: {
    filterCourses: (state, action) => {
      state.value = state.value.filter((course) =>
        course.code.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { filterCourses } = coursesSlice.actions;
export default coursesSlice.reducer;
