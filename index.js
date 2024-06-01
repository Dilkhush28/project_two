const form = document.querySelector("form");
// this usecase is value of empty so you can use after event
// const height = document.querySelector('#height')

form.addEventListener("submit", function (chai) {
  chai.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  const result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `plase give the valid Height${height}`;
  }
  if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `plase give the valid Weight${weight}`;
  }
const ibm = (weight / ((height*height)/10000).toFixed(2))

  result.innerHTML = `<span>${ibm}</span>`

  let arr = ibm;
let range = arr <= 19 ? "under the weight" : arr=25 ? "normal range" : "over the weight"
// console.log(range); isme console me print hoga body me krne ke liye innrHTML ka use krte h
result.innerHTML = range;

});
  

    


