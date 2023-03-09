let findGeneral = require('../controllers/general/find/findGeneral.js');

module.exports = function (app) {
  app.get("/findGeneral", findGeneral);
};
