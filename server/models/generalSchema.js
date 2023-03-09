const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reqString = {
  type: String,
  required: true,
};

const GeneralSchema = new Schema({
  _id: reqString,
  image: reqString,
  name: reqString,
});

module.exports = mongoose.model("Image", GeneralSchema);
