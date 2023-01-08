/* sticky nav */
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/* fact generator */
var factList = [
  "Work on machines that are safe", 
  "Receive required safety equipment, such as gloves or a harness and lifeline for falls", 
  "Be protected from toxic chemicals", 
  "See results of tests taken to find workplace hazards", 
  "Report an injury or illness, and get copies of your medical records"
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}



var inputBtn = document.getElementById("submitBtn");

function message(){
  var textBox1 = document.getElementById("textInput1").value;
  var textBox2 = document.getElementById("textInput2").value;
  var textBox3 = document.getElementById("textInput3").value;
  var textBox4 = document.getElementById("textInput4").value;
  var output = document.getElementById("message");

  output.innerHTML = "On, " + textBox1 + "I was" + textBox2 + "I am complaining because" + textBox3 + "To resolve this problem I would like you to"+ textBox4;
}

inputBtn.addEventListener("click",message);