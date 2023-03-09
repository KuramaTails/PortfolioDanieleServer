const { Types } = require("mongoose");
const dbconnect = require("../../../database/dbconnect");
const dbdisconnect = require("../../../database/dbdisconnect");
const generalSchema = require("../../../models/generalSchema");
const photoSchema = require("../../../models/photoSchema");

module.exports = async function (req, res) {
  if (!req.query.cat || !req.body) return;
  let category = String(req.query.cat);
  let currentImage = req.body;
  await dbconnect();

  try {
    switch (true) {
      case category === "General":
        await generalSchema.findOneAndUpdate(
          { _id: currentImage._id },
          {
            $set: { name: currentImage.name },
          },
          {
            upsert: true,
            new: true,
            arrayFilters: [{ _id: currentImage._id }],
          }
        );
        break;
      case category === "Photo":
        await photoSchema.findOneAndUpdate(
          { _id: currentImage._id },
          {
            $set: { imageInfo: currentImage.imageInfo },
          },
          {
            upsert: true,
            new: true,
            arrayFilters: [{ _id: currentImage._id }],
          }
        );
        break;
      case category === "Model":
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
