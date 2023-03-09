const dbconnect = require("../../../database/dbconnect");
const dbdisconnect = require("../../../database/dbdisconnect");
const projectsSchema = require("../../../models/projectsSchema");

module.exports = async function (req, res) {
  if (!req.query.type || !req.body) return;
  let type = String(req.query.type).toLowerCase();
  let project = req.body.project;
  await dbconnect();
  try {
    let document = await projectsSchema.findOne({ type: type });
    let projectIndex = document.projects.findIndex(p => p.name === project.name);
    if (projectIndex >= 0) {
        document.projects[projectIndex] = project;
    } else {
        document.projects.push(project);
    }
    await projectsSchema.findOneAndUpdate(
      { type: type },
      { $set: { projects: document.projects } },
      { upsert: true, new: true }
    );
  } catch (error) {
    console.log(error);
  }
  await dbdisconnect();
  res.status(200).send();
};
