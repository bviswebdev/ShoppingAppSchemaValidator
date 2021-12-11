const { bufferFile, writeFile, readStats } = require("../Utilities/FileUtil");
const supplierTempId = "61b493cfc8e40e0ed9a242de";

const productData = {
  code: "PRDABC123DEFX",
  name: "Paracetamolupdate",
  brand: "Ciplaupdate",
  description: "An antipyretic medicine used for fever.",
  unitPrice: 20.0,
  quantity: 50,
  productImage: {
    fileName: "PRDABC123DEFX",
    fileType: "jpg",
    fileSize: readStats("../Public/PRDABC123DEFX.jpg").size,
    fileUrl: "assets/productimages/PRDABC123DEFX.jpg",
    fileSource: bufferFile("../Public/PRDABC123DEFX.jpg"),
  },
  isActive: true,
  category: {
    catName: "Antipyretics",
    catDesc: "This is for reducing fever or pyrexia or pyresis",
    catImgUrl: "CAT_1.png",
    catActive: true,
  },
  supplierId: supplierTempId,
  purchases: 0,
  views: 0,
};

const productsData = [
  {
    code: "PRDABC123DEFX",
    name: "Paracetamol",
    brand: "Cipla",
    description: "An antipyretic medicine used for fever.",
    unitPrice: 18.0,
    quantity: 49,
    productImage: {
      fileName: "PRDABC123DEFX",
      fileType: "jpg",
      fileSize: readStats("../Public/PRDABC123DEFX.jpg").size,
      fileUrl: "assets/productimages/PRDABC123DEFX.jpg",
      fileSource: bufferFile("../Public/PRDABC123DEFX.jpg"),
    },
    isActive: true,
    category: {
      catName: "Antipyretics",
      catDesc: "This is for reducing fever or pyrexia or pyresis",
      catImgUrl: "CAT_1.png",
      catActive: true,
    },
    supplierId: supplierTempId,
    purchases: 0,
    views: 0,
  },
  {
    code: "PRDDEF123GHIX",
    name: "Combiflame",
    brand: "Cipla",
    description: "An antipyretic medicine used for fever.",
    unitPrice: 22.0,
    quantity: 49,
    productImage: {
      fileName: "PRDDEF123GHIX",
      fileType: "jpg",
      fileSize: readStats("../Public/PRDDEF123GHIX.jpg").size,
      fileUrl: "assets/productimages/PRDDEF123GHIX.jpg",
      fileSource: bufferFile("../Public/PRDDEF123GHIX.jpg"),
    },
    isActive: true,
    category: {
      catName: "Antipyretics",
      catDesc: "This is for reducing fever or pyrexia or pyresis",
      catImgUrl: "CAT_1.png",
      catActive: true,
    },
    supplierId: supplierTempId,
    purchases: 4,
    views: 0,
  },
  {
    code: "PRDDEF123DEFX",
    name: "Diclofenac",
    brand: "Intas",
    description: "An pain killer medicine.",
    unitPrice: 30.0,
    quantity: 20,
    productImage: {
      fileName: "PRDDEF123DEFX",
      fileType: "jpg",
      fileSize: readStats("../Public/PRDDEF123DEFX.jpg").size,
      fileUrl: "assets/productimages/PRDDEF123DEFX.jpg",
      fileSource: bufferFile("../Public/PRDDEF123DEFX.jpg"),
    },
    isActive: true,
    category: {
      catName: "Analgesics",
      catDesc: "This is for reducing pain known as painkillers",
      catImgUrl: "CAT_2.png",
      catActive: true,
    },
    supplierId: supplierTempId,
    purchases: 1,
    views: 1,
  },
  {
    code: "PRDPQR123WGTX",
    name: "Aceclofenac",
    brand: "Cipla",
    description: "A muscle relaxant medicine.",
    unitPrice: 42.0,
    quantity: 80,
    productImage: {
      fileName: "PRDPQR123WGTX",
      fileType: "jpg",
      fileSize: readStats("../Public/PRDPQR123WGTX.jpg").size,
      fileUrl: "assets/productimages/PRDPQR123WGTX.jpg",
      fileSource: bufferFile("../Public/PRDPQR123WGTX.jpg"),
    },
    isActive: true,
    category: {
      catName: "Analgesics",
      catDesc: "This is for reducing pain known as painkillers",
      catImgUrl: "CAT_2.png",
      catActive: true,
    },
    supplierId: supplierTempId,
    purchases: 3,
    views: 3,
  },
  {
    code: "PRDMNO123PQRX",
    name: "Amoxicillin",
    brand: "Sun Pharma",
    description: "A commonly used antibiotic for bacterial infection.",
    unitPrice: 54.0,
    quantity: 65,
    productImage: {
      fileName: "PRDMNO123PQRX",
      fileType: "jpg",
      fileSize: readStats("../Public/PRDMNO123PQRX.jpg").size,
      fileUrl: "assets/productimages/PRDMNO123PQRX.jpg",
      fileSource: bufferFile("../Public/PRDMNO123PQRX.jpg"),
    },
    isActive: true,
    category: {
      catName: "Antibiotics",
      catDesc: "This is for inhibiting germ growth",
      catImgUrl: "CAT_3.png",
      catActive: true,
    },
    supplierId: supplierTempId,
    purchases: 3,
    views: 0,
  },
  {
    code: "PRDABCXYZDEFX",
    name: "Ciprofloxacin",
    brand: "Sun Pharma",
    description: "A commonly used antibiotic for bacterial infection.",
    unitPrice: 48.0,
    quantity: 45,
    productImage: {
      fileName: "PRDABCXYZDEFX",
      fileType: "jpg",
      fileSize: readStats("../Public/PRDABCXYZDEFX.jpg").size,
      fileUrl: "assets/productimages/PRDABCXYZDEFX.jpg",
      fileSource: bufferFile("../Public/PRDABCXYZDEFX.jpg"),
    },
    isActive: true,
    category: {
      catName: "Antibiotics",
      catDesc: "This is for inhibiting germ growth",
      catImgUrl: "CAT_3.png",
      catActive: true,
    },
    supplierId: supplierTempId,
    purchases: 0,
    views: 0,
  },
];

module.exports = { productData, productsData };
