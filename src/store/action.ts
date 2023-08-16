import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Color, Gender, GetStudents, Specialty, Student, StudentAPI } from '../types/student.type';
import { AppDispatch, AppState } from '../types/app-state';
import { AxiosInstance } from 'axios';

export const removeStudent = createAction<string>('removeStudent');

export const fetchStudents = createAsyncThunk<
	Student[],
	undefined,
	{ dispatch: AppDispatch; state: AppState; extra: AxiosInstance }
>(
  'fetchStudents',
  async (_arg, {dispatch, extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<GetStudents>('persons');
      const parsedData = data.students.map(student => {
        return {
          ...student,
          sex: student.sex as Gender,
          specialty: Specialty[student.specialty as keyof typeof Specialty],
          color: Color[student.color as keyof typeof Color],
        }
      })
      return parsedData;
    } catch (e: any) {
      return rejectWithValue(e.message)
    }
  }
);
