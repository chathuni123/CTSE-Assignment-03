const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    Name:{type:String,required:true,trim:true},
    Price:{type:String,required:true,trim:true},
    Count:{type:String,required:true,trim:true},
    Description:{type:String,required:true,trim:true}
});

const Order = mongoose.model('Orders',OrderSchema);
module.exports = Order;