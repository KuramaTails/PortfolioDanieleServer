let requestModels = require('../controllers/find/models/models.js');

module.exports = function (app) {
  app.get("/requestModels", requestModels);
};
