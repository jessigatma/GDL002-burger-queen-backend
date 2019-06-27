const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const OrderSchema = new mongoose.Schema({
  food: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Product',
  },
  price:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Product',
  },
  status: {
    type: String,
    required: true,
    data: ['send', 'canceled']
  },
});

OrderSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Order', OrderSchema);


