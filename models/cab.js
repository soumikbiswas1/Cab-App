const mongoose = require("mongoose");

const cabSchema=new mongoose.Schema({
    registration: {
        type: String,
        reqired:true,
        unique : true
      },
      model: {
        type: String,
        reqired:true,
        unique : true
      },
      color: {
        type: String,
        reqired:true,
        unique : true
      },
      driver:{
        type: mongoose.Schema.ObjectId,
        ref: "Driver",
      }
})

const Cab = new mongoose.model(
    "Cab",
    cabSchema
  );
  module.exports = Cab;