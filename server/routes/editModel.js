let editModel = require('../controllers/models/editModel/editModel.js');

module.exports = function (app) {
  app.post("/editModel", editModel);
};
