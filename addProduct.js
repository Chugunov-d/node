const fs = require("fs");
const rl = require('./readLine.js');
const {getInput} = require('./getInput.js');
const {dirPath} = require('./readContent');
const {filePath} = require('./readContent');
const { readContent } = require("./readContent.js");

async function addProduct() {
   let content = readContent();
   let newProduct = {};
 
   console.log('Введите id');
   let answer = await getInput(rl);
   newProduct.id = answer;
   console.log('Введите продукт: ');
   answer = await getInput(rl);
   newProduct.product = answer;
   content.push(newProduct);
 
   let jsonContent = JSON.stringify(content, null, 2);
   fs.mkdirSync(dirPath, {recursive: true});
    fs.writeFileSync(filePath, jsonContent);
 
   console.log('Товар добавлен', content, '\n');
 }

 module.exports = addProduct;