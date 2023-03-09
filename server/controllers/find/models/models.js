const dbconnect = require("../../../database/dbconnect");
const dbdisconnect = require("../../../database/dbdisconnect");
const modelSchema = require("../../../models/modelSchema");
const { GridFSBucket } = require("mongodb");

module.exports = async function (req, res) {
  await dbconnect();
  try {
    let data = await modelSchema.find({});
    console.log(data);
    if (data.length < 1) {
      res.status(201).send();
    } else {
      res.status(200).send(JSON.stringify(data));
    }
  } catch (error) {
    console.log(error);
  }
  await dbdisconnect();
};
