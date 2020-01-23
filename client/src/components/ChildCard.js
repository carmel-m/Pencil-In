import React from 'react';
import NoteModal from './NoteModal';

function ChildCard(student) {
	return (
		// student = name of prop being passed in
		// image, id, name, teacher, grade, onClick = named on ParentHome page

		<div className="col-sm-4 card card bg-light mx-3 mb-3">
		{() => student.onClick(student.id)}
			<div className="card-body">
				<h4 className="card-text student-card-text text-success">
					{student.firstName} {student.lastName}
				</h4>
				<p>
					{/* Teacher {student.teacher} - */}
					Grade {student.grade}
				</p>

				<div className="card card-body">
					<h2 className="text-center">{student.attendanceStatus}</h2>
				</div>

                		<NoteModal />
			</div>
		</div>
	);
}

export default ChildCard;
