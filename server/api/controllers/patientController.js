const PatientID = require("../../models/PatientID");

const getPatients = async (req, res) => {
  try {
    const patients = await PatientID.find({});
    res.send(patients);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getPatientById = async (req, res) => {
  try {
    const patient = await PatientID.findOne({ _id: req.params.id });
    res.send(patient);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createPatient = async (req, res) => {
  try {
    // Create a new patient
    const patient = new PatientID({
      name: req.body.name,
      OHIPNumber: req.body.OHIPNumber,
      responses: [],
    });

    // Save the patient
    const newPatient = await patient.save();
    res.send(newPatient);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updatePatient = async (req, res) => {
  try {
    const patient = await PatientID.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    if (!patient) {
      res.status(404).send();
    } else {
      res.send(patient);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const deletePatient = async (req, res) => {
  try {
    const patient = await PatientID.deleteOne({ _id: req.params.id });
    res.send("patient deleted");
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
};
