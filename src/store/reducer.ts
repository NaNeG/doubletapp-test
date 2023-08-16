import { AppState } from "../types/app-state";
import { createReducer } from '@reduxjs/toolkit';
import { fetchStudents, removeStudent } from "./action";

const initialState: AppState = {
  students: [],
};

export const reducer = createReducer(initialState, (builder) => {
	builder.addCase(fetchStudents.fulfilled, (state, action) => {
		state.students = action.payload;
	})
  .addCase(fetchStudents.rejected, () => {
    console.log('Server error');
  })
  .addCase(removeStudent, (state, action) => {
    let newStudents = [...state.students];
    newStudents = newStudents.filter(student => student.name !== action.payload);
    state.students = newStudents;
  })
});
