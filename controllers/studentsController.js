const db = require('../models');

module.exports = {
	// lsit of functions that will be exported when we require our book model to perform crud operations

	findAll: function(req, res) {
		db.Student.find({}).then((dbStudent) => res.json(dbStudent)).catch((err) => res.status(422).json(err));
	},

	//   findById: function(req, res) {
	//     db.User
	//       .findById(req.params.id)
	//       .then(dbModel => res.json(dbModel))
	//       .catch(err => res.status(422).json(err));
	//   }

	//updating the student attendance status in DB after the submission from teacher(user)
	update: function(req, res) {
		console.log('updating attendance');
		console.log(req.body);
		db.Student
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},

	getChild: function(req, res) {
		db.Student
		// .findAll({ parent: req.params.parentusername }, req.body)
		.findById({ _id: req.params.id }, req.body)
		.then((dbModel) => res.json(dbModel))
		.catch((err) => res.status(422).json(err));
	}
};
