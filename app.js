const mongoose = require("mongoose");
const connectDatabase = require("./Database/DbConnect");
const Schema = mongoose.Schema;
const url = "mongodb://localhost:27017/shoppingtestapp";

mongoose.pluralize(null);

connectDatabase(url);

const loadTestData = async () => {
  console.log("Load Test");
};

loadTestData();

//console.log("This is schema valdiator");
