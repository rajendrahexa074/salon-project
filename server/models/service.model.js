// models/service.model.js
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  originalName: { type: String, required: true },
  storedName:   { type: String, required: true },
  path:         { type: String, required: true }
}, { _id: false });

const serviceSchema = new mongoose.Schema({
  name:        { type: String,  required: true },
  description: { type: String,  required: true },
  price:       { type: Number,  required: true, min: 0 },
  images: {
    type: [imageSchema],
    required: [true, 'At least one image is required'],
    validate: {
      validator: arr => arr.length > 0,
      message:    'Please provide at least one image'
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Service', serviceSchema);
