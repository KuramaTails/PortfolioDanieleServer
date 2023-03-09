const dbconnect = require("../../../database/dbconnect");
const dbdisconnect = require("../../../database/dbdisconnect");
const configSchema = require("../../../models/configSchema");

module.exports = async function (req, res) {
  if (!req.query.cat || !req.body) return;
  let category = String(req.query.cat).toLowerCase();
  let image_id = req.body.currentImage;
  await dbconnect();
  try {
    await configSchema.findOneAndUpdate(
      {},
      {
        $set: { [`categories.${category}`]: image_id },
      },
      { upsert: true, new: true }
    );
  } catch (error) {
    console.log(error);
  }

  await dbdisconnect();
  res.status(200).send();
};
