// express
const express = require("express");
const router = express.Router(); // Express Router

// import the Patient mongoose model
const { SDCFormResponse } = require("../models/SDCFormResponse");

// to validate object IDs
const { ObjectID } = require("mongodb");

// helpers/middlewares
const { mongoChecker, isMongoError } = require("./helpers/mongo_helpers");

// a GET route to get all responses
router.get("/api/responses", async (req, res) => {
  // Get the responses
  try {
    const responses = await SDCFormResponse.find();
    res.send(responses);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// a GET route to get response by id
router.get("/api/responses/:id", mongoChecker, async (req, res) => {
  const id = req.params.id;

  // Good practise: Validate id immediately.
  if (!ObjectID.isValid(id)) {
    res.status(404).send(); // if invalid id, definitely can't find resource, 404.
    return; // so that we don't run the rest of the handler.
  }

  // If id valid, findById
  try {
    const response = await SDCFormResponse.findOne({ _id: id });
    if (!response) {
      res.status(404).send("Response not found"); // could not find this patient
    } else {
      res.send(response);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error"); // server error
  }
});

// a GET route to get all response by user id
router.get("/api/responses/user/:id", mongoChecker, async (req, res) => {
  const id = req.params.id;

  // Good practise: Validate id immediately.
  if (!ObjectID.isValid(id)) {
    res.status(404).send(); // if invalid id, definitely can't find resource, 404.
    return; // so that we don't run the rest of the handler.
  }

  // If id valid, findById
  try {
    const responses = await SDCFormResponse.find({ "patient._id": id });
    if (!responses) {
      res.status(404).send("Response not found"); // could not find this patient
    } else {
      res.send(responses);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error"); // server error
  }
});

// Create a SDCResponse
router.post("/api/responses", async (req, res) => {
  // Create a new SDCFormResponse
  const response = new SDCFormResponse({
    patient: req.body.patient,
    form: req.body.form,
    formTitle: req.body.formTitle,
  });

  try {
    // Save the user
    const newResponse = await response.save();
    res.send(newResponse);
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

router.put("/api/responses/:id", async (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(404).send("Resource not found");
    return; // so that we don't run the rest of the handler.
  }

  // Replace the response by their id using req.body
  try {
    const response = await SDCFormResponse.findOneAndReplace(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    if (!response) {
      res.status(404).send();
    } else {
      res.send(response);
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

// a DELETE route to remove a response by id
router.delete("/api/responses/:id", mongoChecker, async (req, res) => {
  const id = req.params.id;

  // Good practise: Validate id immediately.
  if (!ObjectID.isValid(id)) {
    res.status(404).send(); // if invalid id, definitely can't find resource, 404.
    return; // so that we don't run the rest of the handler.
  }

  // If id valid, findById
  try {
    const response = await SDCFormResponse.deleteOne({ _id: id });
    if (!response) {
      res.status(404).send("Response not found"); // could not find this patient
    } else {
      res.send("deleted");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error"); // server error
  }
});

module.exports = router;
