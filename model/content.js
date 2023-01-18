const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
  images: {
    type: Array,
    default: [],
  },
  social: {
    type: Array,
    default: [],
  },
  contactUs: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Content", ContentSchema);
