const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reqString = {
  type: String,
  required: true,
};

const ModelsSchema = new Schema({
  _id: reqString,
  model: reqString,
  modelInfo: { type: Object },
});

module.exports = mongoose.model("Models", ModelsSchema);
