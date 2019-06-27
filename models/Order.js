const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  food: {
    type: String,
    required: true,
    trim: true
  },
  price:{
    type:Number,
    required:true,
    default: 0
  },
  status: {
    type: String,
    required: true,
    data: ['send', 'canceled']
  },
});

module.exports = mongoose.model('Order', OrderSchema);
