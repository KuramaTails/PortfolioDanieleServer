const { Types } = require("mongoose");
const dbconnect = require("../../../database/dbconnect");
const dbdisconnect = require("../../../database/dbdisconnect");
const modelSchema = require("../../../models/modelSchema");

module.exports = async function (req, res) {
  if (!req.query.cat || !req.body) return;
  let category = String(req.query.cat);
  let currentModel = req.body;
  await dbconnect();
  try {
    await modelSchema.findOneAndUpdate(
      { type: category, "models._id": currentModel._id },
      {
        $set: { "models.$.modelInfo": currentModel.modelInfo },
      },
      {
        upsert: true,
        new: true,
        arrayFilters: [{ "models._id": currentModel._id }],
      }
    );
    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(201).send();
  }

  await dbdisconnect();
};
