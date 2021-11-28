const addProduct = require('./addProduct.js');
const changeProduct = require('./changeProduct.js');
const deleteProduct = require('./deleteProduct.js');
const listOfProduct = require('./listOfProduct.js');
const printMenu = require('./printMenu.js');
const rl = require('./readLine.js');

startMenu();

async function startMenu(){
   
   let isActive = true;
   
   while (isActive) {
      let answer = await printMenu();
      switch (answer) {
         case '1':
            listOfProduct();
            break;
            case '2':
               await addProduct();
               break;
            case '3':   
               await changeProduct();
               break;
            case '4':
               await deleteProduct();
               break;
            case '5':
            console.log('Выход');
            isActive = false;
            break;
            default:
               console.log('Error')
               break;
            }
         }
         rl.close();
      }
