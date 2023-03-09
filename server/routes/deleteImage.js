let deleteImage = require('../controllers/images/deleteImage/deleteImage.js');

module.exports = function (app) {
  app.post("/deleteImage", deleteImage);
};
