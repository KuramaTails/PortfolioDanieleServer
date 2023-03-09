let editImage = require('../controllers/images/editImage/editImage.js');

module.exports = function (app) {
  app.post("/editImage", editImage);
};
