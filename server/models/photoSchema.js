const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reqString = {
  type: String,
  required: true,
};

const PhotoSchema = new Schema({
  _id: reqString,
  image: reqString,
  imageInfo: { type: Object },
});

module.exports = mongoose.model("Photos", PhotoSchema);
