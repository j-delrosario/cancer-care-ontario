const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const SDCFormModel = require('../../models/SDCForm');
const diagnosticProcedureModel = require('../../models/DiagnosticProcedureID');
const UploadSDCForm = require("../../services/UploadSDCForm");

const xmlStrAdrenal = require('../../xml/Adrenal.Bx.Res.129_3.003.001.REL_sdcFDF')
const xmlStrLung = require('../../xml/PKG_LDCT_LUNG_forStudents');

const saveSDCForm =  async (req, res) => {

    try {
        //Switch comments if you want to test Frontend
        await UploadSDCForm(xmlStrAdrenal);
        //await UploadSDCForm(xmlStrLung);
        //await UploadSDCForm(req.body);
        res.status(200).send();
    } catch (err) {
      res.status(500).send(err);
    }
  }

const findAllSDCForms = async (req, res) => {
    try {

        const SDCForms = await SDCFormModel.find({});

        res.send(SDCForms);
    } catch (err) {
        res.status(500).send(err);
    }
}

const findSDCFormByDPID = async (req, res) => {
    try {
        const diagnosticProcedure = await diagnosticProcedureModel.findOne({"id": req.params.id});
        let SDCForms = await SDCFormModel.findOne({"diagnosticProcedure": diagnosticProcedure._id});
        res.send(SDCForms);
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteSDCFormByDPID = async (req, res) => {
    try {
        const diagnosticProcedure = await diagnosticProcedureModel.findOne({id: req.params.id});
        await SDCFormModel.deleteOne({diagnosticProcedure: diagnosticProcedure._id});
        res.status(200).send();
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {
    saveSDCForm,
    findAllSDCForms,
    findSDCFormByDPID,
    deleteSDCFormByDPID,
}