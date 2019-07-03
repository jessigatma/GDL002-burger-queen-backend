const mongoose = require('mongoose');

const ProductluSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
    trim: true
  },
  food: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  status: {
    type: String,
    data: ['send', 'canceled']
  },
  objectID: {
    type: Number,
    unique:true
  },
});

module.exports = mongoose.model('Productlu', ProductluSchema);