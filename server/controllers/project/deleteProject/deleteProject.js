const dbconnect = require("../../../database/dbconnect");
const dbdisconnect = require("../../../database/dbdisconnect");
const projectsSchema = require("../../../models/projectsSchema");

module.exports = async function (req, res) {
  if (!req.query.type || !req.body) return;
  let type = String(req.query.type).toLowerCase();
  let projectId = req.body.projectId;
  await dbconnect();
  try {
    await projectsSchema.findOneAndUpdate(
      { type: type },
      { $pull: { projects: { _id: projectId } } },
      { new: true }
    );
  } catch (error) {
    console.log(error);
  }
  await dbdisconnect();
  res.status(200).send();
};
