const mongoose = require('mongoose');

const ProductbrSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Productbr', ProductbrSchema);

// const mongoose = require('mongoose');
// const mongoosePaginate = require('mongoose-paginate');

// const ProductSchema = new mongoose.Schema({
//     image: String,
//     food: String,
//     price: {type:Number, default:0},
//     description: String
//   });

//   module.exports = mongoose.model('Product', ProductSchema)
