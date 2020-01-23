import React, { Component } from 'react';
import Wrapper from '../components/Wrapper';
import Nav from '../components/Nav';
import Table from '../components/Table';
import StudentList from '../components/StudentList';
import API from '../utils/API';
import StudentAttendance from '../components/StudentAttendance';
import Footer from '../components/Footer';

class TeacherHome extends Component {
	state = {
		date: new Date(),
		students: [],
		username: ''
	};

	componentDidMount() {
		this.loadStudents();
	}
	//need to load specific students for specified teacher(user)
	loadStudents = () => {
		console.log('TEACHER HOME LOADED\nGetting students... ');
		API.getStudents()
			.then((res) => {
				console.log('--- Students Response Start ---');
				console.log(JSON.stringify(res.data));
				console.log('--- End Students Response ---');
				//if statement to get user ID
				this.setState({
					students: res.data
				});
			})
			.catch((err) => console.log(err));
    };
    

	render() {
		return (
			<div>
				<Nav />
				<Wrapper>
					<Table>
						{/* Display all students tied to this teacher */}
                        {this.state.students.map((student) => 
                        (
                            <div className="row px-3">
							<StudentList
								id={student._id}
								key={student._id}
								firstName={student.firstname}
								lastName={student.lastname}
							>
							</StudentList>
                            <StudentAttendance student={student} />
                            </div>))}
					</Table>
				</Wrapper>
				<Footer />
			</div>
		);
	}
}

export default TeacherHome;
