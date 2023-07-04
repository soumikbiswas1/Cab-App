const mongoose = require("mongoose");

const driverSchema=new mongoose.Schema({
    name: {
        type: String,
        reqired:true,
        unique : true
      },
      Id: {
        type: String,
        reqired:true,
        unique : true
      },
      email: {
        type: String,
        reqired:true,
        unique : true
      },
      phone: {
        type: Number,
        reqired:true,
        unique : true
      },
      cab:{
        type: mongoose.Schema.ObjectId,
        ref: "Cab",
      }
})

const Driver = new mongoose.model(
    "Driver",
    driverSchema
  );
  module.exports = Driver;