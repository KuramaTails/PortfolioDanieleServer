const dbconnect = require("../../../database/dbconnect");
const dbdisconnect = require("../../../database/dbdisconnect");
const generalSchema = require("../../../models/generalSchema");
const configSchema = require("../../../models/configSchema");

module.exports = async function (req, res) {
  await dbconnect();
  try {
    let type = req.query.type;
    let config = await configSchema.find({});
    let bgImageId = config[0].categories[type]
    
    let bgImage = bgImageId && await generalSchema.find({ _id: bgImageId });
    if (!bgImage) return;
    res.status(200).send(
      JSON.stringify({
        image: bgImage,
      })
    );
  } catch (error) {
    console.log(error);
  }
  await dbdisconnect();
};
