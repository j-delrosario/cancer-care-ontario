const SDCFormResponse = require("../../models/FormResponses/SDCFormResponse");

const getResponses = async (req, res) => {
  try {
    const responses = await SDCFormResponse.find({});
    res.send(responses);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const getResponseById = async (req, res) => {
  try {
    const response = await SDCFormResponse.findOne({ _id: req.params.id });
    res.send(response);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const getResponsesByUserId = async (req, res) => {
  try {
    const responses = await SDCFormResponse.find({
      "patient._id": req.params.id,
    });
    res.send(responses);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const searchResponses = async (req, res) => {
  //This should perhaps replace getResponses and take its name.
  try {
    query = {};
    if (req.query.patientID) {
      query["patientID"] = ObjectID(req.query.patientID);
    }
    if (req.query.patientID) {
      query["diagnosticProcedureID"] = ObjectID(req.query.diagnosticProcedureID);
    }
    if (req.query.patientID) {
      query["timestamp"] = ObjectID(req.query.timestamp);
    }
    
    diagnosticProcedureID = ObjectID(req.query.diagnosticProcedureID);
    timestamp = Date(req.query.time);

    const responses = await SDCFormResponse.find(query);
    res.send(responses);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
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
      formTitle: req.body.formTitle,
      formFiller: req.body.formFiller,
      formFillerID: req.body.formFiller._id,
      timestamp: Date.now(),
    });

    /// Save the response
    const newResponse = await response.save();
    res.send(newResponse);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const updateResponse = async (req, res) => {
  try {
    const oldResponse = await SDCFormResponse.findOne({ _id: req.params.id });
    const newResponse = {
      diagnosticProcedure: req.body.SDCForm.diagnosticProcedure,
      patient: req.body.patient,
      patientID: req.body.patient._id,
      SDCForm: req.body.SDCForm,
      formTitle: req.body.formTitle,
      formFiller: req.body.formFiller,
      formFillerID: req.body.formFiller._id,
      timestamp: oldResponse.timestamp,
    };
    const response = await SDCFormResponse.findOneAndReplace(
      { _id: req.params.id },
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
    console.log(err);
    res.status(500).send(err);
  }
};

const deleteResponse = async (req, res) => {
  try {
    const response = await SDCFormResponse.deleteOne({ _id: req.params.id });
    res.send("response deleted");
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = {
  getResponses,
  getResponseById,
  getResponsesByUserId,
  createResponse,
  updateResponse,
  deleteResponse,
  searchResponses,
};
