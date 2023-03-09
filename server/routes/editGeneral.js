let editGeneral = require('../controllers/general/edit/editGeneral.js');

module.exports = function (app) {
  app.post("/editGeneral", editGeneral);
};
