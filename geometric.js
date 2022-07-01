// Patrón modular para mantener privado los datos
const myModule = (() => {
  "use strict";

  const valueResult = document.getElementById("result");
  const btnPerimSquare = document.querySelector("#btnPerimSquare");
  const btnAreaSquare = document.querySelector("#btnAreaSquare");
  const btnPerimTriangle = document.querySelector("#btnPerimTriangle");
  const btnAreaTriangle = document.querySelector("#btnAreaTriangle");
  const btnDiamCircle = document.querySelector("#btnDiamCircle");
  const btnPerimCircle = document.querySelector("#btnPerimCircle");
  const btnAreaCircle = document.querySelector("#btnAreaCircle");

  // Perímetro de un cuadrado
  const perimetroSquare = (side) => side * 4;

  btnPerimSquare.addEventListener("click", () => {
    let inputSide = document.getElementById("inputSide");
    let value = Number(inputSide.value);

    const result = `El perímetro del cuadrado es: ${perimetroSquare(
      value
    )} cm.`;
    valueResult.innerText = result;
  });

  // Área de un cuadrado
  const areaSquare = (side) => side * side;

  btnAreaSquare.addEventListener("click", () => {
    let inputSide = document.getElementById("inputSide");
    let value = Number(inputSide.value);

    const result = `El área del cuadrado es: ${areaSquare(value)} cm²`;
    valueResult.innerText = result;
  });

  // Perímetro de un triángulo
  const perimetroTriangle = (side1, side2, side3) => side1 + side2 + side3;

  btnPerimTriangle.addEventListener("click", () => {
    let side1 = document.getElementById("inputSide1");
    let side2 = document.getElementById("inputSide2");
    let side3 = document.getElementById("inputSide3");
    side1 = Number(side1.value);
    side2 = Number(side2.value);
    side3 = Number(side3.value);

    const result = `El perímetro del triángulo es: ${perimetroTriangle(
      side1,
      side2,
      side3
    )} cm.`;
    valueResult.innerText = result;
  });

  // Área de un triángulo
  const areaTriangle = (base, height) => (base * height) / 2;

  btnAreaTriangle.addEventListener("click", () => {
    let base = document.getElementById("inputBase");
    let height = document.getElementById("inputHeight");
    base = Number(base.value);
    height = Number(height.value);

    const result = `El área del triángulo es: ${areaTriangle(
      base,
      height
    )} cm²`;
    valueResult.innerText = result;
  });

  // Diámetro de un círculo
  const diameterCircle = (radio) => radio * 2;

  btnDiamCircle.addEventListener("click", () => {
    let inputRadio = document.getElementById("inputRadio");
    inputRadio = Number(inputRadio.value);

    const result = `El diámetro del círculo es: ${diameterCircle(
      inputRadio
    )} cm.`;
    valueResult.innerText = result;
  });

  // Perímetro de un círculo
  const perimeterCircle = (radio) => 2 * (Math.PI * radio);

  btnPerimCircle.addEventListener("click", () => {
    let inputRadio = document.getElementById("inputRadio");
    inputRadio = Number(inputRadio.value);

    const result = `El diámetro del círculo es: ${perimeterCircle(
      inputRadio
    )} cm.`;
    valueResult.innerText = result;
  });

  // Área de un círculo
  const areaCircle = (radio) => radio * radio * Math.PI;

  btnAreaCircle.addEventListener("click", () => {
    let inputRadio = document.getElementById("inputRadio");
    inputRadio = Number(inputRadio.value);

    const result = `El área del círculo es: ${areaCircle(inputRadio)} cm².`;
    valueResult.innerText = result;
  });

  /* return{
        cpq : calculatePerimeterSquare
  };*/
})();
