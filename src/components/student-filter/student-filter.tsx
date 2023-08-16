import React, { useEffect, useState } from 'react';
import sortIcon from '../../assets/images/sort-icon.svg';
import classes from './student-filter.module.css';
import { studentFilterOptions } from '../../helpers/const';
import { SelectOption } from '../../types/select-option.type';
import checkmarkIcon from '../../assets/images/checkmark.svg';

type StudentFilterProps = {
	handleChange: (option: SelectOption) => void;
}

export default function StudentFilter(props: StudentFilterProps) {
	const {handleChange} = props;
	const [selectedOption, setSelectedOption] = useState<SelectOption>(studentFilterOptions[0]);
	const [listHidden, setListHidden] = useState(true);

	useEffect(() => {
		handleChange(selectedOption);
	}, [selectedOption])
	return (
		<>
			<div
				className={classes.select}
        onClick={() => {setListHidden(!listHidden)}}
        onBlur={() => setListHidden(true)}
        tabIndex={0}
			>
				<span>{selectedOption?.translation}</span>
				<img src={sortIcon} className={classes.selectImg}></img>
				{!listHidden && <ul className={`${classes.options}`}>
					{studentFilterOptions.map((option) => (
						<li
							className={`${classes.option} ${option === selectedOption ? classes.selectedOption : ''}`}
							onClick={() => {
								setSelectedOption(option);
                setListHidden(true);
							}}
							key={option.option}
							value={option.option}
						>
							<p>{option.translation}</p>
							<img src={checkmarkIcon} className={classes.checkmarkIcon}></img>
						</li>
					))}
				</ul>}
			</div>
		</>
	);
}
