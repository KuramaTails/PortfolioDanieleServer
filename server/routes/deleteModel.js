let deleteModel = require('../controllers/models/deleteModel/deleteModel.js');

module.exports = function (app) {
  app.post("/deleteModel", deleteModel);
};
