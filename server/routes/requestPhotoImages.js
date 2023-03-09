let requestPhotoImages = require('../controllers/find/photoImages/photoImages.js');

module.exports = function (app) {
  app.get("/requestPhotoImages", requestPhotoImages);
};
