const express = require('express');
const patientModel = require('../models/PatientID');

const routes = require("./routes");

module.exports = () => {
	const app = express.Router();

	app.get('/', (req, res) => {
		res.send('Server Running ;)');
	  });

	// PATIENT
	app.get('/getPatient', async (req, res) => {
		try {
		  const patient = await patientModel.findOne({"id": req.id}, {})
		  res.send(patient)
		} catch (err) {
		  res.status(500).send(err);
		}
	  });

	app.post('/savePatient', async (req, res) => {
		const patient = new patientModel(req.body);
		try {
		  await patient.save();
		  res.send(patient);
		} catch (err) {
		  res.status(500).send(err);
		}
	  });

	app.use('/SDCForm', routes.SDCFormRoutes);

	app.use('/diagnosticProcedure', routes.diagnosticProcedureRoutes);

	return app
}
