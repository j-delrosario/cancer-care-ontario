var mongoose = require("mongoose");
const SDCQuestionBody = require("./SDCQuestionBody");
var Schema = mongoose.Schema;

var IntQuestionBodySchema = new Schema(
    {
        unitSystem: String,
        units: String,
        max: Number,
        min: Number,
    },
    SDCQuestionBody.options
);

module.exports = SDCQuestionBody.discriminator("Int", IntQuestionBodySchema);