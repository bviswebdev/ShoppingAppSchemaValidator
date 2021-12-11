const userTempId = "61b35b1ca467b05fa80fa405";
const productTempId = "61b35b1ca467b05fa80fa405";

const cartData = {
  userId: userTempId,
  grandTotal: 102.0,
  cartItems: [
    {
      itemTotal: 30.0,
      productId: productTempId,
      productCount: 1,
      buyingPrice: 30.0,
      isAvaliable: true,
      cartItemProduct: {
          productCode:"PRDABC123DEFX",
          productImageUrl = "",
          productName="Paracetamol",
          productBrand = "Cipla",
          productDescription="An antipyretic medicine used for fever.",
          productPrice = "20.0",
          productQtyAvailable = "50"
      },
    },
    {
      
      itemTotal: 54.0,
      productId: productTempId,
      productCount: 1,
      buyingPrice: 54.0,
      isAvaliable: true,
      cartItemProduct: {
        productCode:"PRDDEF123GHIX",
        productImageUrl = "",
        productName="Combiflame",
        productBrand = "Cipla",
        productDescription="An antipyretic medicine used for fever.",
        productPrice = "22.0",
        productQtyAvailable = "49"
    },
    },
    {
      itemTotal: 18.0,
      productId: productTempId,
      productCount: 1,
      buyingPrice: 18.0,
      isAvaliable: true,
      cartItemProduct: {
        productCode:"PRDDEF123DEFX",
        productImageUrl = "",
        productName="Diclofenac",
        productBrand = "Intas",
        productDescription="An pain killer medicine.",
        productPrice = "30.0",
        productQtyAvailable = "20"
    },
    },
  ],
};

const cartDataUpdate = {
    userId: userTempId,
    grandTotal: 102.0,
    cartItems: [
      {
        itemTotal: 30.0,
        productId: productTempId,
        productCount: 1,
        buyingPrice: 30.0,
        isAvaliable: true,
        cartItemProduct: {
            productCode:"PRDABC123DEFX",
            productImageUrl = "",
            productName="Paracetamol",
            productBrand = "Cipla",
            productDescription="An antipyretic medicine used for fever.",
            productPrice = "20.0",
            productQtyAvailable = "50"
        },
      },
      {
        
        itemTotal: 54.0,
        productId: productTempId,
        productCount: 1,
        buyingPrice: 54.0,
        isAvaliable: true,
        cartItemProduct: {
          productCode:"PRDDEF123GHIX",
          productImageUrl = "",
          productName="Combiflame",
          productBrand = "Cipla",
          productDescription="An antipyretic medicine used for fever.",
          productPrice = "22.0",
          productQtyAvailable = "49"
      },
      },
      {
        itemTotal: 18.0,
        productId: productTempId,
        productCount: 1,
        buyingPrice: 18.0,
        isAvaliable: true,
        cartItemProduct: {
          productCode:"PRDDEF123DEFX",
          productImageUrl = "",
          productName="Diclofenac",
          productBrand = "Intas",
          productDescription="An pain killer medicine.",
          productPrice = "30.0",
          productQtyAvailable = "20"
      },
      },
    ],
  };

module.exports = { cartData,cartDataUpdate };
