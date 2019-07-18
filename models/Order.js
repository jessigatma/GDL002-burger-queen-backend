const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const OrderSchema = new mongoose.Schema({
  products: {
    type: Object,
  },
  table: {
    type: Number,
  },
  // date: {
  //   type: Date,
  //   default: Date.now,
  // },
  // status: {
  //   type: String,
  //   required: true,
  //   data: ['send', 'canceled']
  // },
});

OrderSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Order', OrderSchema);


