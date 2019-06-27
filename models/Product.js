const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    image: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
    food: {
        type: String,
        required: true,
        trim: true
      },
    price: {
        type: Number,
        required: true,
        default: 0
      },
    status: {
        type: String,
        data:['send','canceled']
    },
    meals:{
      type: String,
      data:['breakfast','lunch']
    },
});

module.exports = mongoose.model('Product', ProductSchema);

// const mongoose = require('mongoose');
// const mongoosePaginate = require('mongoose-paginate');

// const ProductSchema = new mongoose.Schema({
//     image: String,
//     food: String,
//     price: {type:Number, default:0},
//     description: String
//   });

//   module.exports = mongoose.model('Product', ProductSchema)