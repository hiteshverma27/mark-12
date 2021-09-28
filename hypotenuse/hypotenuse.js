const sides = document.querySelectorAll('.side-input');
const calculateBtn = document.querySelector('#calculate-btn');
const output = document.querySelector('#output-box');

console.log(sides[0].value)
function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a+b*b;
    return sumOfSquares;
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const hypotenuse = Math.sqrt(sumOfSquares).toFixed(2);
    output.innerText = `The length of hypotenuse for the given values of sides is ${hypotenuse}`}


calculateBtn.addEventListener('click', calculateHypotenuse);

