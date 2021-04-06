const SDCFormResponse = require("../../models/FormResponses/SDCFormResponse");

// helpers/middlewares
const { mongoChecker, isMongoError } = require("../services/mongo_helpers");
const ValidateResponseForm = require("../services/ValidateResponseForm");

const getResponses = async (req, res) => {
  //Gets all responses if no parameter's are entered.
  //Can search by SDCForm, patientID, diagnosticProcedureID, or timestamp(timestamp_lt for lower limit, timestamp_gt for upper limit).

  //Can't search by formFiller
  // ObjectID = require("mongodb").ObjectID;

  try {
    if (req.query.timestamp_gt || req.query.timestamp_lt) {
      req.query.timestamp = {};
    }
    if (req.query.timestamp_gt) {
      req.query.timestamp.$gte = new Date(req.query.timestamp_gt);
      delete req.query.timestamp_gt;
    }
    if (req.query.timestamp_lt) {
      req.query.timestamp.$lte = new Date(req.query.timestamp_lt);
      delete req.query.timestamp_lt;
    }

    const responses = await SDCFormResponse.find(req.query);
    res.send(responses);
  } catch (err) {
    console.log(err);
    if (isMongoError(err)) {
      // check for if mongo server suddenly disconnected before this request.
      res.status(500).send("Internal server error");
    } else {
      res.status(400).send("Bad Request");
    }
  }
};

const getResponseById = async (req, res) => {
  const id = req.params.id;

  // Good practise: Validate id immediately.
  // if (!ObjectID.isValid(id)) {
  //   res.status(400).send(); // if invalid id, definitely can't find resource, 404.
  //   return; // so that we don't run the rest of the handler.
  // }
  try {
    const response = await SDCFormResponse.findOne({ _id: req.params.id });
    if (!response) {
      res.status(404).send("Response not found"); // could not find this patient
    } else {
      res.send(response);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
};

const getResponsesByUserId = async (req, res) => {
  const id = req.params.id;

  // Good practise: Validate id immediately.
  // if (!ObjectID.isValid(id)) {
  //   res.status(400).send(); // if invalid id, definitely can't find resource, 404.
  //   return; // so that we don't run the rest of the handler.
  // }

  try {
    const responses = await SDCFormResponse.find({
      "patient._id": id,
    });
    if (!responses) {
      res.status(404).send("Responses not found"); // could not find this patient
    } else {
      res.send(responses);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error"); // server error
  }
};

const createResponse = async (req, res) => {
  try {
    // Create a new SDCFormResponse
    const response = new SDCFormResponse({
      diagnosticProcedure: req.body.SDCForm.diagnosticProcedure,
      patient: req.body.patient,
      patientID: req.body.patient._id,
      SDCForm: req.body.SDCForm,
      formFiller: req.body.formFiller,
      formFillerID: req.body.formFiller._id,
      timestamp: Date.now(),
    });

    /// Save the response
    const newResponse = await response.save();
    res.send(newResponse);
  } catch (err) {
    if (isMongoError(err)) {
      // check for if mongo server suddenly disconnected before this request.
      res.status(500).send("Internal server error");
    } else {
      console.log(err);
      res.status(400).send("Bad Request");
    }
  }
};

const updateResponse = async (req, res) => {
  const id = req.params.id;

  // if (!ObjectID.isValid(id)) {
  //   res.status(404).send("Resource not found");
  //   return; // so that we don't run the rest of the handler.
  // }
  try {
    const oldResponse = await SDCFormResponse.findOne({ _id: req.params.id });
    const newResponse = {
      diagnosticProcedure: req.body.SDCForm.diagnosticProcedure,
      patient: req.body.patient,
      patientID: req.body.patient._id,
      SDCForm: req.body.SDCForm,
      formFiller: req.body.formFiller,
      formFillerID: req.body.formFiller._id,
      timestamp: oldResponse.timestamp,
    };
    const response = await SDCFormResponse.findOneAndReplace(
      { _id: id },
      newResponse,
      {
        new: true,
      }
    );
    if (!response) {
      res.status(404).send();
    } else {
      res.send(response);
    }
  } catch (err) {
    console.log(err); // console.log server error to the console, not to the client.
    if (isMongoError(err)) {
      // check for if mongo server suddenly disconnected before this request.
      res.status(500).send("Internal server error");
    } else {
      res.status(400).send("Bad Request");
    }
  }
};

const deleteResponse = async (req, res) => {
  const id = req.params.id;

  // Good practise: Validate id immediately.
  // if (!ObjectID.isValid(id)) {
  //   res.status(404).send(); // if invalid id, definitely can't find resource, 404.
  //   return; // so that we don't run the rest of the handler.
  // }

  try {
    const response = await SDCFormResponse.deleteOne({ _id: id });
    if (!response) {
      res.status(404).send("Response not found"); // could not find this patient
    } else {
      res.send("response deleted");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error"); // server error
  }
};

const validateResponse = async (req, res) => {
  try {
    const validResponseForm = await ValidateResponseForm(req.body);
    console.log("Invalid Responses for Questions:")
    console.log(validResponseForm)
    res.send(validResponseForm);
  } catch (err) {
    console.log(error); // console.log server error to the console, not to the client.
    if (isMongoError(error)) {
      // check for if mongo server suddenly disconnected before this request.
      res.status(500).send("Internal server error");
    } else {
      res.status(400).send("Bad Request");
    }
  }
};


module.exports = {
  getResponses,
  getResponseById,
  getResponsesByUserId,
  createResponse,
  updateResponse,
  deleteResponse,
  validateResponse,
};
