const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/classroom"
);

const studentsSeed = [
    {
        firstname: "Arnold",
        lastname: "Perlstein",
        dob: 12 / 23 / 10,
        gender: "Male",
        grade: 3,
        teacher: "5e0921ab4065f5410c3b7678",
        parent: "5e0921ab4065f5410c3b767d",
        present: false
    },
    {
        firstname: "Carlos",
        lastname: "Ramon",
        dob: 10 / 01 / 10,
        gender: "Male",
        grade: 3,
        teacher: "5e0921ab4065f5410c3b7678",
        // parent: ,
        present: false
    },
    {
        firstname: "Dorothy",
        lastname: "Rourke",
        dob: 3 / 30 / 11,
        gender: "Female",
        grade: 3,
        teacher: "5e0921ab4065f5410c3b7678",
        // parent: ,
        present: false
    },
    {
        firstname: "Jyoti",
        lastname: "Franklin",
        dob: 5 / 11 / 11,
        gender: "Female",
        grade: 3,
        teacher: "5e0921ab4065f5410c3b7678",
        parent: "5e0921ab4065f5410c3b767c",
        present: false
    },
    {
        firstname: "Keesha",
        lastname: "Franklin",
        dob: 5 / 11 / 11,
        gender: "Female",
        grade: 3,
        teacher: "5e0921ab4065f5410c3b7678",
        parent: "5e0921ab4065f5410c3b767c",
        present: false
    },
    {
        firstname: "Phoebe",
        lastname: "Terese",
        dob: 9 / 25 / 10,
        gender: "Female",
        grade: 3,
        teacher: "5e0921ab4065f5410c3b7678",
        // parent: ,
        present: false
    },
    {
        firstname: "Ralph",
        lastname: "Tennelli",
        dob: 2 / 7 / 11,
        gender: "Male",
        grade: 3,
        teacher: "5e0921ab4065f5410c3b7678",
        // parent: ,
        present: false
    },
    {
        firstname: "Timothy",
        lastname: "Jamal",
        dob: 2 / 14 / 11,
        gender: "Male",
        grade: 3,
        teacher: "5e0921ab4065f5410c3b7678",
        // parent: ,
        present: false
    },
    {
        firstname: "Wanda",
        lastname: "Li",
        dob: 8 / 20 / 10,
        gender: "Female",
        grade: 3,
        teacher: "5e0921ab4065f5410c3b7678",
        parent: "5e0921ab4065f5410c3b767b",
        present: false
    }
]

db.Student
    .remove({})
    .then(() => db.Student.collection.insertMany(studentsSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });