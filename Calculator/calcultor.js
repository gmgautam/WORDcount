const Displayinput = document.querySelector(".display");
const calculateBtn = document
  .querySelector(".Calculate")
  .addEventListener("click", (e) => {
    e.preventDefault();
    ShowResult();
  });

let string = "";

function append(value) {
  string = string + value;
  Displayinput.value = string;
}

function ShowResult() {
  if (string.length <= 0) {
    error();
  } else {
    let sum = eval(string);
    Displayinput.value = sum;
    // string=""
  }
}
function Clear() {
  Displayinput.value = "";
  string = "";
}

function CalculateAll(e) {
  ShowResult();
}

function error() {
  Clear();
}
