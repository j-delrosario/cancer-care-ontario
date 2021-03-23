const pFFLModel = require('../../models/PersistentFilledFormLocator');
const SDCFormResponseModel = require('../../models/FormResponses/SDCFormResponse');

const findURLForFormResponseByID = async (req, res) => {
    try {
        const SDCFormResponse = await SDCFormResponseModel.findOne({"id": req.params.id});
        PFFL = await pFFLModel.findOne({"_id": SDCFormResponse.persistentLocator});
        if (!PFFL) {
            // Create a new persistent locator
            const loc = new pFFLModel({
                filledform:  SDCFormResponse._id,
                url: SDCFormResponse._id.toString()
            });
            /// Save the locator
            const newLoc = await loc.save();
            res.send(newLoc);
            PFFL = loc;
        }
        res.send(PFFL.url)
    } catch (err) {
        res.status(500).send(err);
    }
}

const findSDCFormResponseByURL = async (req, res) => {
    try {
        const PFFL = await pFFLModel.findOne({"url": req.params.url});
        const SDCFormResponse = await SDCFormResponseModel.findOne({"_id": PFFL.filledform});
        res.send(SDCFormResponse);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {
    findURLForFormResponseByID,
    findSDCFormResponseByURL,
}