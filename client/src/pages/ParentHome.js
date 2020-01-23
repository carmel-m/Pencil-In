import React, { Component } from 'react';
import Wrapper from '../components/Wrapper';
import Nav from '../components/Nav';
import ChildCard from '../components/ChildCard';
import API from '../utils/API';
import Footer from '../components/Footer';
import Table from '../components/Table';
import axios from "axios";
import NoteModal from '../components/NoteModal';


class ParentHome extends Component {
	state = {
		date: new Date(),
		userID: '',
		username: "",
		students: []
	};

	componentDidMount() {
		this.getUser()
	}

	getUser() {
		axios.get("/user/").then(response => {
			console.log("Get user response on parent page: ");
			console.log(response.data);
			if (response.data) {
				this.setState({
					username: response.data.user.username
				})
			}
			this.loadStudents();
		});

	}

	loadStudents = () => {
		console.log('TEACHER HOME LOADED\nGetting students... ');
		var children = [];
		// console.log(`this.state.userID = ${this.state.userID}`);
		API.getStudents()
			.then((res) => {
				// console.log(this.state.userID);
				console.log('--- Students Response Start ---');
				// console.log(res.data);
				for (var i = 0; i < res.data.length; i++) {
					// console.log(res.data[i].parent)
					// console.log("This is the state: " + this.state.username)
					if (res.data[i].parent === this.state.username) {
						console.log("This is the child: " + res.data[i].firstname)
						children.push(res.data[i]);
					}
				}

				console.log('--- End Students Response ---');
				//if statement to get user ID
				this.setState({
					students: children
				});
			})
			.catch((err) => console.log(err));
	};

	render() {
		// console.log(`this.state.students = ${this.state.students}`)

		return (
			<div>
				<Nav />
				<Wrapper>
					<Table>
						<div className="row mt-4 mx-5 d-flex justify-content-center">
							{console.log("student:" + this.state.students)}
							{/* Display all students tied to this parent */}
							{this.state.students.map((student) => (
								<ChildCard
									// onClick={() => this.whenClicked(student.id)}
									id={student._id}
									key={student._id}
									firstName={student.firstname}
									lastName={student.lastname}
									attendanceStatus={student.present}
									grade={student.grade}
								// teacher={student.teacher}
								/>
							))}
						</div>
					</Table>
				</Wrapper>
				<Footer />
			</div>
		);
	}
}

export default ParentHome;
