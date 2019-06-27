const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    food: {
        type: String,
        required: true,
        trim: true,
      },
    statusKitchen: {
        type: String,
        required:true,
        data:['Ok','In process','Ready'],
    },
});

module.exports = mongoose.model('Order', OrderSchema);