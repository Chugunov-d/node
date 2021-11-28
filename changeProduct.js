const fs = require("fs");
const rl = require('./readLine.js');
const {getInput} = require('./getInput.js');
const { readContent } = require("./readContent.js");
const {dirPath} = require('./readContent');
const {filePath}= require('./readContent');

async function changeProduct() {
   let content = readContent();
   console.log('Введите id продукта, который хотите изменить');
   let answer = await getInput(rl);
   const findIndex = content.findIndex((data) => data.id == answer);
   const updateProduct = content[findIndex];
   if (findIndex === -1) {
     console.log('Такого id нет, попробуйте снова', '\n');
     return;
   } else {
     console.log('Введите название продукта, на которое хотите изменить');
   }
   answer = await getInput(rl);
   updateProduct.product = answer;
 
   let jsonContent = JSON.stringify(content, null, 2);
   fs.mkdirSync(dirPath, {recursive: true});
    fs.writeFileSync(filePath, jsonContent);
 
   console.log('Товар изменен', content, '\n');
 }

 module.exports = changeProduct;