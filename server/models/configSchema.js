const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConfigSchema = new Schema({
  categories: {
    main: { type: String, default: 0 },
    photo: { type: String, default: 0 },
    models: { type: String, default: 0 },
    profile: { type: String, default: 0 },
  },
});

module.exports = mongoose.model("config", ConfigSchema);
