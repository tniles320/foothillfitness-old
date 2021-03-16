const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const strengthSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required",
  },
  category: {
    type: String,
    trim: true,
    required: "Category is required",
  },
  subCategory: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
    required: "Image is required",
  },
  desciption: {
    type: String,
    trim: true,
  },
  brand: {
    type: String,
    trim: true,
  },
  price: {
    type: String,
    trim: true,
  },
  quantity: {
    type: Number,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Strength = mongoose.model("Strength", strengthSchema);

module.exports = Strength;
