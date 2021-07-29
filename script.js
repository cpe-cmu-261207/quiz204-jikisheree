const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here

const input = length.value

btn_toggle.onclick = () => {
  btn_toggle.innerHTML = "Display Author"
  let num = 630610765-input;
  author.innerHTML = num;
}

// if(btn_toggle.innerHTML === "Display Calculation"){
//   btn_toggle.innerHTML = "Display Author"
//   let num = 630610765-input;
//   author.innerHTML = num;
// }if(btn_toggle.innerHTML === "Display Author"){
//   btn_toggle.innerHTML = "Display Calculation"
//   author.innerHTML = "630610765 SUPARIDA SILPASITH"
// }

// more codes for Search and Reset buttons here
