const express = require("express");

const FormFillerContoller = require("../controllers/formFillerController");

const router = express.Router();

router.post("/formFillers", FormFillerContoller.createFormFiller);
router.put("/formFillers/:id", FormFillerContoller.updateFormFiller);
router.delete("/formFillers/:id", FormFillerContoller.deleteFormFiller);
router.get("/formFillers/:id", FormFillerContoller.getFormFillerById);
router.get("/formFillers", FormFillerContoller.getFormFillers);

module.exports = router;
