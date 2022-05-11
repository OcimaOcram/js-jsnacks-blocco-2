// let array = [];

// for (let i = 0; i <10; i++) {
//     randomNumber = Math.floor(Math.random()*100 +1);
//     array.push(randomNumber);
    

// }

// console.log(array);


//  const myArray = [];
// while (myArray.length <10) {
//     let randomNumber = Math.floor(Math.random()*100 +1);
//     let trovato = myArray.includes(randomNumber);
//     if (trovato) {
//         console.log();
//         myArray.push(randomNumber);
//     }
// }
// console.log(myArray);

const myArray = [];
let somma = 0;
while (somma < 50) {
    let numero =parseInt(prompt ("inserisci un numero"));
    myArray.push(numero);
    somma += numero;
} ;

console.log(somma);