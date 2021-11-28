const fs = require("fs");
const rl = require('./readLine.js');
const {getInput} = require('./getInput.js');
const { readContent } = require("./readContent.js");
const {dirPath} = require('./readContent');
const {filePath} = require('./readContent');

async function deleteProduct() {
   let content = readContent();
 
   console.log('Введите id продукта, который хотите удалить');
   let answer = await getInput(rl);
   const findIndex = content.findIndex((data) => data.id == answer);
   if (findIndex === -1) {
     console.log('Такого id нет, попробуйте снова', '\n');
     return;
   } else {
     console.log(
       'Вы действительно хотите удалить этот продукт - ',
       content[findIndex],
       '\n',
       'Введите "да" или "нет"'
     );
   }
   answer = await getInput(rl);
   if (answer.toLowerCase() == 'да') {
     content.splice(findIndex, 1);
   } else {
     console.log('Товар не был удален', '\n');
   }
 
   let jsonContent = JSON.stringify(content, null, 2);
   fs.mkdirSync(dirPath, {recursive: true});
   fs.writeFileSync(filePath, jsonContent);
 
   console.log('Товар удален', content, '\n');
 }

 module.exports = deleteProduct;