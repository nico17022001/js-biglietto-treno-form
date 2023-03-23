// t0 => tempo in cui carica il browser

// data
const inputName = document.querySelector('#userName');
const InputKm = document.querySelector('#km');
const inputAge = document.querySelector('#age');
const buttonGenera = document.querySelector('#genera');
const buttonAnnulla = document.querySelector('#annulla')
let ticketContainer = document.querySelector('#ndcontainer')


// logic
// t1 => parte quando l'utente clicca sul pulsante GENERA
buttonGenera.addEventListener('click', function() {
  
  // data
  const name = inputName.value;
  const km = InputKm.value;
  const age = inputAge.value;
  let price = 0.21 * km;
  
  ticketContainer.classList = '';

  // logic
  if (age == 'minorenne') {
    price = price * 0.8;
  }

  if (age == 'anziano') {
    price = price * 0.6;
  }




  // output
  document.querySelector('#name').innerText = name
  document.querySelector('#userAge').innerText = 'Biglietto' + ' ' + age
  document.querySelector('#tiketPrice').innerText = price + ' ' + 'euro'

});


buttonAnnulla.addEventListener('click', function() {

  ticketContainer.classList = 'd-none';
})