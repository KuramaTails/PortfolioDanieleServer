const dbconnect = require("../../../database/dbconnect");
const dbdisconnect = require("../../../database/dbdisconnect");
const generalSchema = require("../../../models/generalSchema");
const photoSchema = require("../../../models/photoSchema");

module.exports = async function (req, res) {
  let { category, imageId } = req.body;
  let schemaType = category === "General" ? generalSchema : photoSchema;
  await dbconnect();
  try {
    await schemaType.findByIdAndDelete(imageId);
    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(201).send();
  }
  await dbdisconnect();
};
