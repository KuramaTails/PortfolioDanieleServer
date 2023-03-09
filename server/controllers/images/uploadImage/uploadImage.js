const { Types } = require("mongoose");
const dbconnect = require("../../../database/dbconnect");
const dbdisconnect = require("../../../database/dbdisconnect");
const generalSchema = require("../../../models/generalSchema");
const photoSchema = require("../../../models/photoSchema");
const uuid = require("uuid");

module.exports = async function (req, res) {
  if (!req.body.image) return;
  let image = req.body.image;
  let imageInfo = req.body.imageInfo;
  let type = req.body.type;
  await dbconnect();
  try {
    switch (true) {
      case type === "General":
        await generalSchema.findOneAndUpdate(
          { _id: uuid.v4() },
          { image: image, name: imageInfo.name },
          { upsert: true, new: true }
        );
        break;
      case type === "Photos":
        await photoSchema.findOneAndUpdate(
          { _id: uuid.v4() },
          { image: image, imageInfo: imageInfo },
          { upsert: true, new: true }
        );
        break;
      case type === "Models":
        break;
      default:
        break;
    }

    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(201).send();
  }

  await dbdisconnect();
};
