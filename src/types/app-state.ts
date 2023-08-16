import { store } from "../store";
import { Student } from "./student.type";

export type AppState = {
  students: Student[],
}

export type AppDispatch = typeof store.dispatch;