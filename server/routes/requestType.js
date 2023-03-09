let requestType = require('../controllers/find/type/type.js');

module.exports = function (app) {
  app.get("/requestType", requestType);
};
