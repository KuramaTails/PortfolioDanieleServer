const dbconnect = require("../../../database/dbconnect");
const dbdisconnect = require("../../../database/dbdisconnect");
const modelSchema = require("../../../models/modelSchema");

module.exports = async function (req, res) {
  let { category, modelId } = req.body;
  await dbconnect();
  try {
    await modelSchema.findOneAndUpdate(
      { type: category },
      { $pull: { models: { _id: modelId } } },
      { new: true }
    );
    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(201).send();
  }
  await dbdisconnect();
};
