const dbconnect = require("../../../database/dbconnect");
const dbdisconnect = require("../../../database/dbdisconnect");
const generalSchema = require("../../../models/generalSchema");
const photoSchema = require("../../../models/photoSchema");

module.exports = async function (req, res) {
  if (!req.query.type) return;
  let type = req.query.type;
  let schema = type === "General" ? generalSchema : photoSchema;
  await dbconnect();
  try {
    let data = await schema.find({});
    if (data.length<1) {
      res.status(201).send();
    } else {
      res.status(200).send(JSON.stringify(data));
    }
  } catch (error) {
    console.log(error);
  }
  await dbdisconnect();
};
