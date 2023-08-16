import { SelectOption } from '../types/select-option.type';
import { Specialty, SpecialtyShort, Student } from '../types/student.type';

export const studentFilterOptions: SelectOption[] = [
	{ option: 'nameAsc', translation: 'Имя А-Я' },
	{ option: 'nameDesc', translation: 'Имя Я-А' },
	{ option: 'youngestFirst', translation: 'Сначала моложе' },
	{ option: 'oldestFirst', translation: 'Сначала старше' },
	{ option: 'highestRating', translation: 'Высокий рейтинг' },
	{ option: 'lowestRating', translation: 'Низкий рейтинг' },
	{ option: 'colorAsc', translation: 'Цвет А-Я' },
	{ option: 'colorDesc', translation: 'Цвет Я-А' },
];

export const colorToHex = {
	blue: '#49C2E8',
	red: '#E25B5B',
	green: '#83C872',
	yellow: '#F7FB53',
	black: '#000000',
	orange: '#EFA638',
};

export const ageToString = (age: number) => {
	let count = age % 100;
	if (count >= 5 && count <= 20) {
		return 'лет';
	} else {
		count = count % 10;
		if (count === 1) {
			return 'год';
		} else if (count >= 2 && count <= 4) {
			return 'года';
		} else {
			return 'лет';
		}
	}
};

export const translateGroupName = (name: string) => {
	const prefix = name.slice(0, 2);
	return `${SpecialtyShort[prefix as keyof typeof SpecialtyShort]}${name.slice(2)}`;
}

export const sortStudents = (students: Student[], option: SelectOption) => {
	let sortedStudents: Student[] = [];
	switch (option.option) {
		case 'nameAsc':
				sortedStudents = students.sort((a, b) => {
					if (a.name < b.name) {
						return -1;
					}
					if (a.name > b.name) {
						return 1;
					}
					return 0;
				})
			break;
		case 'nameDesc':
			sortedStudents = students.sort((a, b) => {
					if (a.name < b.name) {
						return 1;
					}
					if (a.name > b.name) {
						return -1;
					}
					return 0;
				})
			break;
		case 'youngestFirst':
			sortedStudents = students.sort((a, b) => {
					if (
						Date.parse(a.birthday) < Date.parse(b.birthday)
					) {
						return 1;
					}
					if (
						Date.parse(a.birthday) > Date.parse(b.birthday)
					) {
						return -1;
					}
					return 0;
				})
			break;
		case 'oldestFirst':
			sortedStudents = students.sort((a, b) => {
					if (
						Date.parse(a.birthday) > Date.parse(b.birthday)
					) {
						return 1;
					}
					if (
						Date.parse(a.birthday) < Date.parse(b.birthday)
					) {
						return -1;
					}
					return 0;
				})
			break;
		case 'highestRating':
			sortedStudents = students.sort((a, b) => {
					if (a.rating < b.rating) {
						return 1;
					}
					if (a.rating > b.rating) {
						return -1;
					}
					return 0;
				})
			break;
		case 'lowestRating':
			sortedStudents = students.sort((a, b) => {
					if (a.rating > b.rating) {
						return 1;
					}
					if (a.rating < b.rating) {
						return -1;
					}
					return 0;
				})
			break;
		case 'colorAsc':
			sortedStudents = students.sort((a, b) => {
					if (a.color < b.color) {
						return 1;
					}
					if (a.color > b.color) {
						return -1;
					}
					return 0;
				})
			break;
		case 'colorDesc':
			sortedStudents = students.sort((a, b) => {
					if (a.color > b.color) {
						return 1;
					}
					if (a.color < b.color) {
						return -1;
					}
					return 0;
				})
			break;
	}
	return sortedStudents;
}
