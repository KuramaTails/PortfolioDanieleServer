const uploadImage = require("../controllers/images/uploadImage/uploadImage.js");

module.exports = function (app) {
  app.post("/uploadImage", uploadImage);
};
