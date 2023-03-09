let addProject = require('../controllers/project/addProject/addProject.js');

module.exports = function (app) {
  app.post("/addProject", addProject);
};
