import React, { useEffect, useState } from 'react';
import StudentEntry from '../student-entry/student-entry';
import classes from './student-list.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchStudents } from '../../store/action';
import { Student } from '../../types/student.type';

type StudentListProps = {
	students: Student[];
}

export default function StudentList(props: StudentListProps) {
	const {students} = props;
	return (
		<div className={classes.container}>
			<table className={classes.studentList}>
				<thead>
					<tr>
						<td></td>
						<td>ФИО</td>
						<td>Специальность</td>
						<td>Группа</td>
						<td>Возраст</td>
						<td>Рейтинг</td>
						<td></td>
					</tr>
				</thead>
				<tbody className={classes.tableBody}>
					{students?.map((student) => (
						<StudentEntry student={student} key={student.id} />
					))}
				</tbody>
			</table>
		</div>
	);
}
