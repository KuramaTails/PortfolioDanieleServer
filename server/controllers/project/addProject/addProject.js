const dbconnect = require("../../../database/dbconnect");
const dbdisconnect = require("../../../database/dbdisconnect");
const projectsSchema = require("../../../models/projectsSchema");

module.exports = async function (req, res) {
  if (!req.query.type || !req.body) return;
  let type = String(req.query.type).toLowerCase();
  let name = req.body.projectName;
  await dbconnect();
  try {
    await projectsSchema.findOneAndUpdate(
      { type: type },
      { $push: { ["projects"]: {name:name} } },
      { upsert: true, new: true }
    );
  } catch (error) {
    console.log(error);
  }
  await dbdisconnect();
  res.status(200).send();
};
