const mongoose = require("mongoose");

const materialrecords = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  materialcode: {
    type: String,
    required: true,
  },
  unitprice: {
    type: String,
    required: true,
  },
  stocklevel: {
    type: String,
    required: true,
  },
});
