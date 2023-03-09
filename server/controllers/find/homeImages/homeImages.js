const dbconnect = require("../../../database/dbconnect");
const dbdisconnect = require("../../../database/dbdisconnect");
const generalSchema = require("../../../models/generalSchema");
const configSchema = require("../../../models/configSchema");

module.exports = async function (req, res) {
  await dbconnect();
  try {
    let config = await configSchema.find({});
    let images = await generalSchema.find({});

    let data = Object.keys(config[0].categories).map((category) => {
      let image = images.find((image) => {
        if (image._id === config[0].categories[category]) return image;
      });
      return image;
    });
    if (!data[0]) return;
    res.send(data);
  } catch (error) {
    console.log(error);
  } finally {
    await dbdisconnect();
  }
};
