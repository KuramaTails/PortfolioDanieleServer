let requestBgImage = require('../controllers/find/bgImage/bgImage.js');

module.exports = function (app) {
  app.get("/requestBgImage", requestBgImage);
};
