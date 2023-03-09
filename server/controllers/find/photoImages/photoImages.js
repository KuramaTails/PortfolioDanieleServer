const dbconnect = require("../../../database/dbconnect");
const dbdisconnect = require("../../../database/dbdisconnect");
const projectsSchema = require("../../../models/projectsSchema");
const photoSchema = require("../../../models/photoSchema");

module.exports = async function (req, res) {
  await dbconnect();
  try {
    let projects = await projectsSchema.find({ type: "photography" });
    let images = await photoSchema.find({});
    if (projects[0]) {
      let completeProjects = projects[0].projects.map((project, index) => {
        let imagesProject = project.images.map((projectImage) => {
          return images.find((image) => image._id === projectImage);
        });
        return imagesProject;
      });
      res.send({ projects: projects[0], completeProjects: completeProjects });
    }
  } catch (error) {
    console.log("error:" + error);
  }
  await dbdisconnect();
};