module.exports = async (objectList, model, name="list item") => {
    objectList.map(async (object) => {
        console.log("Deleting " + name + ": " + object._id);
        await model.deleteOne({_id: object._id});
    });
}