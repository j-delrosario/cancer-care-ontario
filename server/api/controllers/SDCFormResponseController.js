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
  //Can search by SDCForm, patientID, diagnosticProcedureID, or timestamp
  //Can't search by formFiller
  ObjectID = require('mongodb').ObjectID;

  try {
    query = {};
    //query["x"] = y should be equivalent to query["x"] = {$eq : y}
    if (req.query.SDCForm) {
      //This assumes that the SDCForm attribute is an _id, which is not yet the case.
      query["SDCForm"] = ObjectID(req.query.SDCForm);
    }
    if (req.query.patientID) {
      query["patientID"] = ObjectID(req.query.patientID);
    }
    if (req.query.diagnosticProcedureID) {
      query["diagnosticProcedureID"] = ObjectID(req.query.diagnosticProcedureID);
    }
    if (req.query.timestamp) {
      query["timestamp"] = Date(req.query.timestamp);
    }
    
    console.log(query);
    const responses = await SDCFormResponse.find(query);
    console.log(responses);
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
