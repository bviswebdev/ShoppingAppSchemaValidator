const userTempId = "61b35b1ca467b05fa80fa405";
const shippingTempId = "61b35b1ca467b05fa80fa405";
const billingTempId = "61b35b1ca467b05fa80fa405";
const productTempId = "61b35b1ca467b05fa80fa405";
const productTempIdTwo = "61b35b1ca467b05fa80fa405";

const orderData = {
  userId: userTempId,
  orderTotal: 40.0,
  orderCount: 2,
  shippingId: shippingTempId,
  billingId: billingTempId,
  orderItems: [
    {
      total: 18.0,
      productId: productTempId,
      productCount: 1,
      buyingPrice: 18.0,
      productName: "Paracetemol",
    },
    {
      total: 22.0,
      productId: productTempIdTwo,
      productCount: 1,
      buyingPrice: 22.0,
      productName: "Combiflame",
    },
  ],
};

const orderDataUpdate = {
  userId: userTempId,
  orderTotal: 40.0,
  orderCount: 2,
  shippingId: shippingTempId,
  billingId: billingTempId,
  orderItems: [
    {
      total: 18.0,
      productId: productTempId,
      productCount: 1,
      buyingPrice: 18.0,
      productName: "Paracetemol",
    },
    {
      total: 22.0,
      productId: productTempIdTwo,
      productCount: 1,
      buyingPrice: 22.0,
      productName: "Combiflame",
    },
  ],
};

module.exports = { orderData, orderDataUpdate };
