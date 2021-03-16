// express
const express = require("express");
const router = express.Router(); // Express Router

// import the Patient mongoose model
const { PatientID } = require("../models/PatientID");

// to validate object IDs
const { ObjectID } = require("mongodb");

// helpers/middlewares
const { mongoChecker, isMongoError } = require("./helpers/mongo_helpers");

// a GET route to get all patients
router.get("/api/patients", async (req, res) => {
  // Get the patients
  try {
    const patients = await PatientID.find();
    res.send(patients);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// a GET route to get patient by id
router.get("/api/patients/:id", mongoChecker, async (req, res) => {
  const id = req.params.id;

  // Good practise: Validate id immediately.
  if (!ObjectID.isValid(id)) {
    res.status(404).send(); // if invalid id, definitely can't find resource, 404.
    return; // so that we don't run the rest of the handler.
  }

  // If id valid, findById
  try {
    const patient = await PatientID.findOne({ _id: id });
    if (!patient) {
      res.status(404).send("Patient not found"); // could not find this patient
    } else {
      res.send(patient);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error"); // server error
  }
});

// Set up a POST route to create a user of your web app
router.post("/api/patients", async (req, res) => {
  // Create a new patient
  const patient = new PatientID({
    name: req.body.name,
    OHIPNumber: req.body.OHIPNumber,
    responses: [],
  });

  try {
    // Save the user
    const newPatient = await patient.save();
    res.send(newPatient);
  } catch (error) {
    if (isMongoError(error)) {
      // check for if mongo server suddenly disconnected before this request.
      res.status(500).send("Internal server error");
    } else {
      console.log(error);
      res.status(400).send("Bad Request");
    }
  }
});

router.put("/api/patients/:id", async (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(404).send("Resource not found");
    return; // so that we don't run the rest of the handler.
  }

  // Replace the patient by their id using req.body
  try {
    const patient = await PatientID.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    if (!user) {
      res.status(404).send();
    } else {
      res.send(patient);
    }
  } catch (error) {
    console.log(error); // console.log server error to the console, not to the client.
    if (isMongoError(error)) {
      // check for if mongo server suddenly disconnected before this request.
      res.status(500).send("Internal server error");
    } else {
      res.status(400).send("Bad Request");
    }
  }
});

module.exports = router;
