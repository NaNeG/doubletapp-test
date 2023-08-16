export enum Gender {
  'm' = 'male',
  'f' = 'female'
}

export enum Specialty {
  'kb' = 'Компьютерная безопасность',
  'kn' = 'Компьютерные науки',
  'mt' = 'Математика',
  'pm' = 'Прикладная математика'
}

export enum SpecialtyShort {
	'kb' = 'КБ',
	'kn' = 'КН',
	'mt' = 'МТ',
  'pm' = 'ПМ',
}

export enum Color {
  'blue' = 'blue',
  'red' = 'red',
  'green' = 'green',
  'yellow' = 'yellow',
  'black' = 'black',
  'orange' = 'orange',
  'rainbow' = 'rainbow',
}

export type StudentAPI = {
  id: number;
  email: string;
  name: string;
  sex: string;
  specialty: string;
  group: string;
  color: string;
  rating: number;
  birthday: string;
  avatar: string;
}

export type GetStudents = {
  students: StudentAPI[];
}

export type Student = {
  id: number;
  email: string;
  name: string;
  sex: Gender;
  specialty: Specialty;
  group: string;
  color: Color;
  rating: number;
  birthday: string;
  avatar: string;
}