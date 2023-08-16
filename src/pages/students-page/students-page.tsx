import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import StudentSearch from '../../components/student-search/student-search';
import StudentFilter from '../../components/student-filter/student-filter';
import classes from './student-page.module.css';
import StudentList from '../../components/student-list/student-list';
import { useWindowWidth } from '../../hooks/use-window-width';
import StudentListMobile from '../../components/student-list-mobile/student-list-mobile';
import { fetchStudents } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SelectOption } from '../../types/select-option.type';
import { Student } from '../../types/student.type';
import { sortStudents, studentFilterOptions } from '../../helpers/const';

export default function StudentsPage() {
	const isDesktop = useWindowWidth(768);
	const students = useAppSelector((state) => state.students);
	const [searchResult, setSearchResult] = useState<string>('');
	const [option, setOption] = useState<SelectOption>(studentFilterOptions[0]);
	const [shownStudents, setShownStudents] = useState<Student[]>();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchStudents());
	}, [fetchStudents]);

	useEffect(() => {
		setShownStudents(students);
	}, [students]);

	useEffect(() => {
		let filteredStudents = [...students];
		if (searchResult) {
			filteredStudents = students.filter((student) => student.name.toLowerCase().includes(searchResult.toLowerCase()));
		}
		setShownStudents(
			applyFilter(filteredStudents, option)
		);
	}, [searchResult, option, students])

	const searchChangeHandler = (name: string) => {
		setSearchResult(name);
	}

	const filterChangeHandler = (option: SelectOption) => {
		setOption(option);
	}

	const applyFilter = (students: Student[], option: SelectOption) => {
		if (option) {
			return sortStudents(students, option);
		}
	};

	return (
		<>
			<Header />
			<div className={classes.container}>
				<h1>Студенты</h1>
				<div className={classes.searchContainer}>
					<StudentSearch handleChange={searchChangeHandler} />
					<StudentFilter handleChange={filterChangeHandler} />
				</div>
			</div>
			{isDesktop ? (
				<StudentList students={shownStudents ? shownStudents : []} />
			) : (
				<StudentListMobile students={shownStudents ? shownStudents: []} />
			)}
		</>
	);
}
