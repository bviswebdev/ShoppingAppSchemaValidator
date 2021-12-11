const mongoose = require("mongoose");
const connectDatabase = require("./Database/DbConnect");
const { userController } = require("./Controller/UserController");
const { productController } = require("./Controller/ProductController");
const { cartController } = require("./Controller/CartController");
const { orderController } = require("./Controller/OrderController");
const { bufferFile, writeFile, readStats } = require("./Utilities/FileUtil");
const Schema = mongoose.Schema;
const url = "mongodb://localhost:27017/shoppingtestapp";

connectDatabase(url);

const fileLoadTest = async () => {
  //const stats = fs.statSync("../Public/PRDABC123DEFX.jpg");
  const stats = readStats("../Public/PRDABC123DEFX.jpg");
  //let BUFFER = bufferFile("../Public/PRDABC123DEFX.jpg");

  console.log(stats);
  //writeFile("../Output/test.png", BUFFER);
  /*writeFile(
    `../Output/${fileName}.${fileType}`,
    insertProducts.productImage.fileSource
  );
  insertProducts.forEach((e) => {
    writeFile(
      `../Output/${e.productImage.fileName}.${e.productImage.fileType}`,
      e.productImage.fileSource
    );
  });*/
};

const loadTestData = async () => {
  console.log("Load Test");
  try {
    //const insertUsers = await userController.loadUsers();
    //const insertProducts = await productController.loadProducts();
    //const insertCart = await cartController.loadCart();
    //const insertOrder = await orderController.loadOrder();

    //console.log(insertOrder);
    process.exit(0);
  } catch (e) {
    console.log("Error error error");
    console.log(e);
    process.exit(1);
  }
};

loadTestData();

//console.log("This is schema valdiator");
