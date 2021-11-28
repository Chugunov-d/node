const { readContent } = require('./readContent.js');


function listOfProduct() {
   const product = readContent();
   product.forEach((data) => console.log(`${data.id}. ${data.product}`));
   console.log('\n');
 }

 module.exports = listOfProduct;