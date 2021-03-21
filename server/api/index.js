const express = require("express");
const patientModel = require("../models/PatientID");

const routes = require("./routes");

module.exports = () => {
  const app = express.Router();

  app.get("/", (req, res) => {
    res.send("Server Running ;)");
  });

  app.post("/savePatient", async (req, res) => {
    const patient = new patientModel(req.body);
    try {
      await patient.save();
      res.send(patient);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.use("/SDCForm", routes.SDCFormRoutes);

  app.use("/DiagnosticProcedure", routes.diagnosticProcedureRoutes);

  app.use("/PersistentLocator", routes.PFFLRoutes);

  app.use("/Patient", routes.patientRoutes);

  app.use("/SDCFormResponse", routes.responseRoutes);

  app.use("/FormFiller", routes.formFillerRoutes);

  return app;
};
