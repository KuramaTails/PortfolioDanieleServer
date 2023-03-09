let editProject = require('../controllers/project/editProject/editProject.js');

module.exports = function (app) {
  app.post("/editProject", editProject);
};
