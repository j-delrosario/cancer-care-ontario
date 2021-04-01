const mongoose = require('mongoose');
const fs = require('fs');

const SDCFormModel = require('../../models/SDCForm');
const diagnosticProcedureModel = require('../../models/DiagnosticProcedureID');
const UploadSDCForm = require("../services/UploadSDCForm");
const SDCSection = require('../../models/SDCSection');



const saveSDCForm =  async (req, res) => {

    try {
        fs.readFile(req.files.file.path, 'utf8', async (err, contents) => {
            await UploadSDCForm(contents.toString());
        });
        res.status(200).send();
    } catch (err) {
      res.status(500).send(err);
    }
  }

async function findAllSDCFormsByDeprecationStatus(deprecationStatus) {
    const diagnosticProcedures = await diagnosticProcedureModel.find({"deprecated": deprecationStatus});
    let SDCForms = await Promise.all(diagnosticProcedures.map(async (dp) => {
        return await SDCFormModel.findOne({diagnosticProcedure: dp._id})
    }));
    return SDCForms;
} 

const findAllSDCForms = async (req, res) => {
    try {
        let SDCForms = []
        if (req.query && req.query.deprecated) {
            SDCForms = await findAllSDCFormsByDeprecationStatus(true)
        } else {
            SDCForms = await findAllSDCFormsByDeprecationStatus(false)
        }
        let a = await SDCSection.find({"title": "IMPRESSIONS"});
        //console.log(SDCForms);
        res.send(SDCForms);
    } catch (err) {
        res.status(500).send(err);
    }
}

const findSDCFormByDPID = async (req, res) => {
    try {
        const diagnosticProcedure = await diagnosticProcedureModel.findOne({"id": req.params.id, "deprecated": false});
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