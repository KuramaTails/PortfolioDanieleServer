let requestProjects = require('../controllers/find/projects/projects.js');

module.exports = function (app) {
  app.get("/requestProjects", requestProjects);
};
