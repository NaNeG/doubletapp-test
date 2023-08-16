import React, { useEffect, useState } from 'react';
import searchIcon from '../../assets/images/search-icon.svg';
import classes from './student-search.module.css';

type StudentSearchProps = {
	handleChange: (name: string) => void;
}

export default function StudentSearch(props: StudentSearchProps) {
	const {handleChange} = props;
	const [name, setName] = useState<string>('');

	useEffect(() => {
		handleChange(name);
	}, [name]);

	return (
		<div className={classes.inputContainer}>
			<img src={searchIcon} className={classes.searchIcon}></img>
			<input placeholder='Поиск по имени' className={classes.searchBar} value={name} onChange={(event) => setName(event.target.value)}></input>
		</div>
	);
}
