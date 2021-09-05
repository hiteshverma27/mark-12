const areaInputs = document.querySelectorAll('.side-input');
const calculateBtn = document.querySelector('#calculate-btn');
const output = document.querySelector('#output-box');

function calculateBaseXHeight(b,h){
    const basexheight = b*h;
    return basexheight;
}

function calculateArea(){
    const basexheight = calculateBaseXHeight(Number(areaInputs[0].value), Number(areaInputs[1].value));
    const area = 0.5*basexheight;
    output.innerText = `The area of triangle for the given values of sides is ${area}`

}
calculateBtn.addEventListener('click', calculateArea);