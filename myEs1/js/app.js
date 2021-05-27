// esercizio1

function esercizio1() {
  var input = document.getElementById('input').value;
  var paragraph = document.getElementById('p_tabelline');
  paragraph.innerHTML = "";

  for (var i = 0; i < 10; i++) {
    if (input > 0) {

      var factor = i + 1;
      var result = factor * input;

      paragraph.innerHTML += '<p>' + input + ' x ' + factor + ' = ' + result + '</p>';
    } else {

      i = 10;
    }
  }
}
// COMPLETATO

// esercizio2
function esercizio2 () {
  var inp = document.getElementById('inp_es2');
  var text = inp.value;
  let div = document.getElementById('div_es2');
  div.innerHTML = text;
  var btn = document.getElementById('btn_es2');
}

function invert() {
  var inp = document.getElementById('inp_es2').value;
  var reverse = inp.split("").reverse().join("");
  let div = document.getElementById('div_es2');
  div.innerHTML = reverse;
  document.getElementById('inp_es2').value = reverse;
}
//  COMPLETATO

// esercizio3
var start;
function esercizio3(status) {
  if (status == 'scorri') {
    let val = document.getElementById('inp_es3').value;
    start = setInterval(() =>{
      document.getElementById('es3').innerHTML = val;
      var primo = val[0];
      val = val.substring(1) + primo;
    },150);
  }else {
    clearInterval(start);
  }
}

// COMPLETATO

// esercizio 4
var arr = [];
function table() {
  console.time();
  var table="";
  arr = [];
  table = '<table border=1 cellpadding=6>';
  for (var i = 0; i < 10; i++) {

    table += '<tr>';
    for (var j = 0; j < 10; j++) {

      table += `<td>${rndNum()}</td>`;
    }
    table += '</tr>';
  }
  table += '</table>';
  document.getElementById('tabella').innerHTML = table;
  console.timeEnd();
}

function rndNum() {
  while(arr.length < 100) {
    var rnd = Math.floor(Math.random() * 100) + 1;
    if (!arr.includes(rnd)) {
      arr.push(rnd);
      return rnd;
    }
  }
}

// esercizio 5

var arrColor = [];
function getRndColor () {
var div = document.getElementById('colorBtn');

  while(arrColor.length < 215) {
    let color = getRandomColor();
    if (!arrColor.includes(color)) {
      arrColor.push(color);
    }
  }
  arrColor.sort(function (a,b) {
    var nameA = a;
    var nameB = b;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  for (var i = 0; i < arrColor.length; i++) {
    var elem = arrColor[i];
    div.innerHTML += `<button class="clr_btn" type="button" data-color="${elem}" name=button onclick="pippo()"> ${elem}</button>`;
  }
}

function getRandomColor() {
  var letters = ['00','33','66','99','CC','FF'];
  var color = '#';
  for (var i = 0; i < 3; i++) {
    color += letters[Math.floor(Math.random() * 6)];
  }
  return color;
}

function pippo () {
  var btn = document.getElementsByClassName('clr_btn');
  for (var i = 0; i < btn.length; i++) {
    var elem = btn[i];
    elem.addEventListener("click", function(){
      console.log();
      var bg = this.dataset.color;
      document.body.style.backgroundColor = bg;
    });
  }
}

// COMPLETATO

// Esercizio 6

var countries = [];
function getAjax() {

  axios.get("http://www.restcountries.eu/rest/v2/currency/eur")
  .then(response => {
    const data = response.data;
    countries = data;
    console.log(countries);
    euroCount(countries);
  })
  .catch(errore => console.error("errore"));
  return countries;
}

function euroCount(arr) {

  var countriesEu = arr.length;
  console.log(arr.length, countriesEu)
  const div = document.getElementById('euro');
  div.innerHTML= "Gli stati che usano l'euro sono:" + countriesEu;
}

function searchCountry(arr) {
  const div = document.getElementById('euro');
  const paese = document.getElementById('paese').value;
  for (var i = 0; i < arr.length; i++) {
    var elem = arr[i].name;

    if (elem.toUpperCase() == paese.toUpperCase()) {
      div.innerHTML= "Lo stato " + paese + " ha l'euro";
      break;
    }else {
      div.innerHTML= "Lo stato " + paese + " non ha l'euro";
    }

  }
}

function clickSearch() {

  searchCountry(countries);
}



























// DA CHIARIRE
// document.addEventListener('DOMContentLoaded', esercizio1);
// document.addEventListener('DOMContentLoaded', esercizio2);
