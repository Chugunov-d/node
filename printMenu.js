const rl = require('./readLine.js');
const {getInput} = require('./getInput.js');

async function printMenu(){
   
   const menu =        
   "1. Список товаров" + '\n' +
   "2. Добавить товар" + '\n' +
   "3. Изменить товар" + '\n' +
   "4. Удалить товар" + '\n' +
   "5. Выход" + '\n';
   
   console.log(menu);
   let answer = await getInput(rl);

   return answer;
}


module.exports = printMenu;