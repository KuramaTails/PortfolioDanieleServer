let auth = require('../controllers/auth/auth.js');

module.exports = function (app) {
  app.post("/auth", auth);
};
