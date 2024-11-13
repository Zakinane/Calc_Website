// Touches

let touches = document.querySelectorAll("[id=touche]");
/*  
    7   8   9
    4   5   6   +
    1   2   3   -
    .   0   /   *
*/
let toucheDel = document.getElementById("touchedel");
let toucheReset = document.getElementById("touche1");
let toucheEqual = document.getElementById("touche2");

let ecran = document.getElementById("screen");
ecran.textContent = "";

// Actions

//affichage dans ecran

function afficher(txt) {
  if (ecran.textContent.includes(".") && txt == ".") return;
  if (ecran.textContent.includes("+") && txt == "+") return;
  if (ecran.textContent.includes("-") && txt == "-") return;
  if (ecran.textContent.includes("/") && txt == "/") return;
  if (ecran.textContent.includes("x") && txt == "x") return;
  

  if (ecran.textContent == "" && txt == ".") {
    ecran.textContent += "0.";
    return;
  }
  if (startWithZero()) {
    if (txt == ".") ecran.textContent += ".";
    else ecran.textContent = txt;
  } else ecran.textContent += txt;
}

function calcAndDisplay(){
    ecran.textContent = "";//result
}

function reset() {
  ecran.textContent = "";
}

function deleteOnce() {
  ecran.textContent = ecran.textContent.substring(
    0,
    ecran.textContent.length - 1
  );
}

//after click

touches.forEach(function (touche) {
  touche.addEventListener("click", function (event) {
    afficher(touche.textContent);
  });
});

toucheDel.addEventListener("click", function (event) {
  deleteOnce();
});

toucheEqual.addEventListener("click", function (event) {
    calcAndDisplay();
});

toucheReset.addEventListener("click", function (event) {
  reset();
});

// logic

function startWithZero() {
  if (ecran.textContent == "0") {
    return true;
  }
  return false;
}

function validPoint() {
  return (ecran.textContent.match(/\./g) || []).length <=
    (ecran.textContent.match(/[+\-x/]/g) || []).length + 1
    ? true
    : false;
}