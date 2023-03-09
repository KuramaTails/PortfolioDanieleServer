const dbconnect = require("../../../database/dbconnect");
const dbdisconnect = require("../../../database/dbdisconnect");
const modelSchema = require("../../../models/modelSchema");
const uuid = require("uuid");
module.exports = async function (req, res) {
  if (!req.body.image) return;
  let model = req.body.image;
  let modelInfo = req.body.imageInfo;
  let type = req.body.type;
  await dbconnect();

  try {
    await modelSchema.findOneAndUpdate(
      { _id: uuid.v4() },
      { model: model, modelInfo: modelInfo },
      { upsert: true, new: true }
    );
    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(201).send();
  }

  await dbdisconnect();
};
