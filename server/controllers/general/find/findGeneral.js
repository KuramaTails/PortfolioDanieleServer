const dbconnect = require("../../../database/dbconnect");
const dbdisconnect = require("../../../database/dbdisconnect");
const generalSchema = require("../../../models/generalSchema");
const configSchema = require("../../../models/configSchema");

module.exports = async function (req, res) {
  await dbconnect();
  try {
    let config = await configSchema.find({});
    let images = await generalSchema.find({});
    res.status(200).send(
      JSON.stringify({
        images: images,
        currentImages: config[0].categories,
      })
    );
  } catch (error) {
    console.log(error);
  }
  await dbdisconnect();
};
