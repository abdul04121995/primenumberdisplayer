const numberEl = document.querySelector("#numbering");
const finderEl = document.querySelector(".finder");
const bottomEl = document.querySelector(".bottom");
let final;
let i;
finderEl.addEventListener("click", function () {
  validator(+numberEl.value);
});
function validator(a) {
  if (a) {
    primeFinder(a);
  } else {
    console.log("sorry you are not doing well");
  }
}
function primeFinder(x) {
  let primeArray = [];
  for (i = 1; i <= x / 2; i++) {
    if (x % i == 0) {
      primeArray.push(i);
    }
  }
  primeArray.push(x);
  displayer(primeArray);
}

function displayer(a) {
  bottomEl.textContent = "";
  a.forEach((elem) => {
    let divEl = document.createElement("div");
    divEl.classList.add("box");
    divEl.textContent = `${elem}`;
    bottomEl.appendChild(divEl);
  });
}
