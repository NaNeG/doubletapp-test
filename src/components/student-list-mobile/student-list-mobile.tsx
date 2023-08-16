import React, { useState } from 'react'
import StudentEntryMobile from '../student-entry-mobile/student-entry-mobile';
import classes from './student-list-mobile.module.css';
import { Student } from '../../types/student.type';

type StudentListMobile = {
	students: Student[];
}

export default function StudentListMobile(props: StudentListMobile) {
  const {students} = props;
  return (
    <div className={classes.studentList}>
      {students.map(student => <StudentEntryMobile student={student} key={student.id}/>)}
    </div>
  )
}
