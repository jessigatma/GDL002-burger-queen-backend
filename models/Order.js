const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const OrderSchema = new mongoose.Schema({
  cashOrder: {
    type: Object,
  },
  table: {
    type: Number,
  },
  dated: {
    type: Date,
    default: Date.now,
  },
  // status: {
  //   type: String,
  //   required: true,
  //   data: ['send', 'canceled']
  // },
});

OrderSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Order', OrderSchema);


