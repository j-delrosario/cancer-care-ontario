const FormFillerID = require("../../models/FormFillerID");

const getFormFillers = async (req, res) => {
  try {
    const formFillers = await FormFillerID.find({});
    res.send(formFillers);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getFormFillerById = async (req, res) => {
  try {
    const formFiller = await FormFillerID.findOne({ _id: req.params.id });
    res.send(formFiller);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createFormFiller = async (req, res) => {
  try {
    // Create a new formFiller
    const formFiller = new FormFillerID({
      name: req.body.name,
    });

    // Save the formFiller
    const newFormFiller = await formFiller.save();
    res.send(newFormFiller);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateFormFiller = async (req, res) => {
  try {
    const formFiller = await FormFillerID.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    if (!formFiller) {
      res.status(404).send();
    } else {
      res.send(formFiller);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteFormFiller = async (req, res) => {
  try {
    const formFiller = await FormFillerID.deleteOne({ _id: req.params.id });
    res.send("formFiller deleted");
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getFormFillers,
  getFormFillerById,
  createFormFiller,
  updateFormFiller,
  deleteFormFiller,
};
