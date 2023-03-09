let deleteProject = require('../controllers/project/deleteProject/deleteProject.js');

module.exports = function (app) {
  app.post("/deleteProject", deleteProject);
};
