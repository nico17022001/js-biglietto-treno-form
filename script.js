const kmToDo = prompt ("Quanti km devi percorrere ?");

const userName = prompt ("Come ti chiami");

const userAge = prompt ("Quanti anni hai ?");

let tiketPrice = (kmToDo * 0.21);

if (userAge = .minorenne){
  tiketPrice = (tiketPrice - tiketPrice * 0.2);
}

if (userAge = .anziano){
  tiketPrice = (tiketPrice - tiketPrice * 0.4);
}

console.log(kmToDo, userAge, userName,tiketPrice);