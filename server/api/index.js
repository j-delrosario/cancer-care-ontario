const express = require('express');
const patientModel = require('../models/PatientID');

const routes = require("./routes");

module.exports = () => {
  const app = express.Router();

  app.get("/", (req, res) => {
    res.send("Server Running ;)");
  });

  // PATIENT

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

  // If you want to actually upload an example to DB swap the comment on UploadSDCForm
  app.post("/saveSDCForm", async (req, res) => {
    try {
      //await UploadSDCForm(xmlStr);
      await UploadSDCForm(req.body);
      res.status(200).send();
    } catch (err) {
      res.status(500).send(err);
    }
  });

  return app;
};
