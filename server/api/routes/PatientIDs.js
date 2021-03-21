const express = require("express");

const PatientContoller = require("../controllers/patientController");

const router = express.Router();

router.post("/patients", PatientContoller.createPatient);
router.put("/patients/:id", PatientContoller.updatePatient);
router.delete("/patients/:id", PatientContoller.deletePatient);
router.get("/patients/:id", PatientContoller.getPatientById);
router.get("/patients", PatientContoller.getPatients);

module.exports = router;
