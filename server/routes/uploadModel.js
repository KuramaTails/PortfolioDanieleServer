let uploadModel = require('../controllers/models/uploadModel/uploadModel.js');

module.exports = function (app) {
  app.post("/uploadModel", uploadModel);
};
