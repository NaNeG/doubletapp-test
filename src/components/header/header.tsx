import React from 'react';
import logo from '../../assets/images/logo.svg'
import classes from './header.module.css'

export default function Header() {
	return (
		<div className={classes.header}>
			<img src={logo} className={classes.logo}></img>
			<div>
        <p className={classes.headerText}>STUDENTS<span className={classes.by}> by</span> <span className={classes.nickname}>NaNeG</span></p>
      </div>
		</div>
	);
}
