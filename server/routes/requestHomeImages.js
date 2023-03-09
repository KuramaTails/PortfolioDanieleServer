let requestHomeImages = require('../controllers/find/homeImages/homeImages.js');

module.exports = function (app) {
  app.get("/requestHomeImages", requestHomeImages);
};
