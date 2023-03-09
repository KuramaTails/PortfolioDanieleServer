const dbconnect = require("../../../database/dbconnect");
const dbdisconnect = require("../../../database/dbdisconnect");
const projectsSchema = require("../../../models/projectsSchema");

module.exports = async function (req, res) {
  if (!req.query.type) return
  await dbconnect();
  try {
    let type = String(req.query.type).toLowerCase();
    let data = await projectsSchema.find({ type: type });
    if (!data[0]) {
      res.status(201).send(JSON.stringify({ projects: null }));
    } else {
      res.status(200).send(JSON.stringify({ projects: data[0].projects }));
    }
  } catch (error) {
    console.log(error);
  }
  await dbdisconnect();
};
