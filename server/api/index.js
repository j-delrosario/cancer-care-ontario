const express = require('express');
const patientModel = require('../models/PatientID');
const models = require("../models");
const UploadSDCForm = require("../services/UploadSDCForm");
const xmlStr = require('../xml/Adrenal.Bx.Res.129_3.003.001.REL_sdcFDF')

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

	// DIAGNOSTIC PROCEDURE
	app.get('/getDiagnosticProcedure', async (req, res) => {
		try {
		  const diagnostic = await diagnosticModel.findOne({"id": req.id}, {})
		  res.send(diagnostic)
		} catch (err) {
		  res.status(500).send(err);
		}
	  });

	app.post('/saveDiagnosticProcedure', async (req, res) => { 
		const diagnostic = new diagnosticModel(req.body);
		try {
		  await diagnostic.save();
		  res.send(diagnostic);
		} catch (err) {
		  res.status(500).send(err);
		}
	  });

	// SDC FORM
	app.get('/getSDCForm', async (req, res) => {
		try {
		  const sdc = await SDCFormModel.findOne({"id": req.query.id}, {})
        //   res.status(200).send({
        //     id: sdc.id,
        //     diagnosticProcedure: sdc.diagnosticProcedure,
		// 	sections: sdc.sections,
		// 	questions: sdc.questions
        //   })
		  res.send(sdc)
		  res.status(200)
		} catch (err) {
		  res.status(500).send(err);
		}
	  });

	// If you want to actually upload an example to DB swap the comment on UploadSDCForm
	app.post('/saveSDCForm', async (req, res) => {
		try {
			//await UploadSDCForm(xmlStr);
			await UploadSDCForm(req.body);
			res.status(200).send();
		} catch (err) {
		  res.status(500).send(err);
		}
	  });


	return app
}
