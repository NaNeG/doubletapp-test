import React from 'react';
import { Color, Student } from '../../types/student.type';
import classes from './student-entry.module.css';
import dayjs from 'dayjs';
import deleteIcon from '../../assets/images/delete-icon.svg';
import rainbowColor from '../../assets/images/rainbow-color.svg';
import { translateGroupName } from '../../helpers/const';
import { useAppDispatch } from '../../hooks';
import { removeStudent } from '../../store/action';

type StudentEntryProps = {
	student: Student;
};

export default function StudentEntry(props: StudentEntryProps) {
	const { avatar, color, group, name, rating, specialty, birthday } =
		props.student;
	const age = dayjs().diff(dayjs(birthday), 'year');
	const dispatch = useAppDispatch();

	const handleEntryRemove = (name: string) => {
		dispatch(removeStudent(name));
	}
	return (
		<tr className={classes.studentInfo}>
			<td className={classes.avatarCell}>
				<img src={avatar} className={classes.avatar}></img>
			</td>
			<td className={classes.name}>{name}</td>
			<td className={classes.specialty}>{specialty}</td>
			<td className={classes.group}>{translateGroupName(group)}</td>
			<td>{age}</td>
			<td>{rating}</td>
			<td className={classes.colorCell}>
				{Color[color] === 'rainbow' ? (
					<img className={classes.colorCircle} src={rainbowColor}></img>
				) : (
					<div className={`${classes.colorCircle} ${classes[Color[color]]}`}></div>
				)}
			</td>
			<td className={classes.removeButtonCell}>
				<button className={classes.removeButton} onClick={() => handleEntryRemove(name)}>
					<img
						src={deleteIcon}
						className={classes.removeButtonImg}
					></img>
				</button>
			</td>
		</tr>
	);
}
