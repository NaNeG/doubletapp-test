import React from 'react';
import { Color, Student } from '../../types/student.type';
import dayjs from 'dayjs';
import classes from './student-entry-mobile.module.css';
import deleteIcon from '../../assets/images/delete-icon.svg';
import rainbowColor from '../../assets/images/rainbow-color.svg';
import ratingIcon from '../../assets/images/rating-icon.svg';
import { ageToString, translateGroupName } from '../../helpers/const';
import { removeStudent } from '../../store/action';
import { useAppDispatch } from '../../hooks';

type StudentEntryMobileProps = {
	student: Student;
};

export default function StudentEntryMobile(props: StudentEntryMobileProps) {
	const { avatar, color, group, name, rating, specialty, birthday } =
		props.student;
	const age = dayjs().diff(dayjs(birthday), 'year');
	const dispatch = useAppDispatch();
	const handleEntryRemove = (name: string) => {
		dispatch(removeStudent(name));
	}
	return (
		<div className={classes.card}>
			<div className={classes.header}>
				<img src={avatar} className={classes.avatar}></img>
				<div className={classes.mainContainer}>
					<p className={classes.name}>{name}</p>
					<div className={classes.bottomContainer}>
						{Color[color] === 'rainbow' ? (
							<img
								className={classes.colorCircle}
								src={rainbowColor}
							></img>
						) : (
							<div
								className={`${classes.colorCircle} ${
									classes[Color[color]]
								}`}
							></div>
						)}
						<div className={classes.ratingContainer}>
							<img
								src={ratingIcon}
								className={classes.ratingIcon}
							></img>
							<p className={classes.ratingNumber}>{rating}</p>
						</div>
					</div>
				</div>
				<div className={classes.buttonContainer}>
					<button className={classes.removeButton} onClick={() => handleEntryRemove(name)}>
						<img
							src={deleteIcon}
							className={classes.removeButtonImg}
						></img>
					</button>
				</div>
			</div>
			<div className={classes.listContainer}>
				<ul className={classes.propertiesList}>
					<li>{`${age} ${ageToString(age)}`}</li>
					<li>{specialty}</li>
					<li>{translateGroupName(group)}</li>
				</ul>
			</div>
		</div>
	);
}
