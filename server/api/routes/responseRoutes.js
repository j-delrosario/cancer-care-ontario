const express = require("express");

const SDCFormResponseController = require("../controllers/SDCFormResponseController");

const router = express.Router();

router.post("/responses", SDCFormResponseController.createResponse);
router.put("/responses/:id", SDCFormResponseController.updateResponse);
router.delete("/responses/:id", SDCFormResponseController.deleteResponse);
router.get("/responses/:id", SDCFormResponseController.getResponseById);
router.get(
  "/responses/user/:id",
  SDCFormResponseController.getResponsesByUserId
);
router.get("/responses", SDCFormResponseController.getResponses);
router.get("/responses-search/", SDCFormResponseController.searchResponses);//response.write(JSON.stringify(anObject));
//Query for SDCFormResponse by patient and/or DiagnosticProcedureID, and/or date/time
module.exports = router;
