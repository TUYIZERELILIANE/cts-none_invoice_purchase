const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({

itemName:String,

quantity:Number,

unitPrice:Number,

totalAmount:Number,

supplier:String,

department:String,

purchasedBy:String,

reason:String,

paymentMethod:String,

date:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("Purchase",purchaseSchema);