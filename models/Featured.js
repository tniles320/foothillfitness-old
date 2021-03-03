const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const featuredSchema = new Schema({
  headline: {
    type: String,
    trim: true,
    required: "Name is required",
  },
  desciption: {
    type: String,
    trim: true,
  },
  images: [
    {
      type: Schema.Types.ObjectId,
      ref: "Image",
    },
  ],
  link: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Featured = mongoose.model("Featured", featuredSchema);

module.exports = Featured;
