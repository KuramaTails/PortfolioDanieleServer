const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reqString = {
  type: String,
  required: true,
};
const ProjectSchema = new Schema({
  _id: { type: mongoose.Types.ObjectId, auto: true },
  name: reqString,
  frontImage: reqString,
  images: [{ type: String }],
});
const ProjectsSchema = new Schema({
  type: reqString,
  projects: [ProjectSchema],
});

module.exports = mongoose.model("Projects", ProjectsSchema);
