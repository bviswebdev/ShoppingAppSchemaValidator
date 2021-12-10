const mongoose = require("mongoose");
const connectDatabase = require("./Database/DbConnect");
const { userController } = require("./Controller/UserController");
const Schema = mongoose.Schema;
const url = "mongodb://localhost:27017/shoppingtestapp";

connectDatabase(url);

const loadTestData = async () => {
  console.log("Load Test");
  try {
    const insertUsers = await userController.updateByUserId();
    console.log(insertUsers);
    process.exit(0);
  } catch (e) {
    console.log("Error error error");
    console.log(e);
    process.exit(1);
  }
};

loadTestData();

//console.log("This is schema valdiator");
