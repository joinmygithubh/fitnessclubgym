const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide an image title'],
      trim: true
    },
    imageUrl: {
      type: String,
      required: [true, 'Please provide an image URL']
    },
    category: {
      type: String,
      default: 'Gym Facilities',
      trim: true
    },
    publicId: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Gallery', gallerySchema);
