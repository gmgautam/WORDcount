const Displayinput = document.querySelector(".display");
const button = document.querySelectorAll(".button");

let string = "";
let opt = null;
let result;
Array.from(button).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const inputValue = e.target.innerHTML;
    string = string + inputValue;
    Displayinput.value = string;
    console.log(string)
  });
});

function cal(){
    calculate(string);
    checkError(string);
    Displayinput.value = result;
    string=result
  
}

function calculate(string) {
  let Operator = ["+", "-", "/", "*"];
  for (let i = 0; i <= string.length; i++) {
    if (Operator.includes(string[i])) {
      opt = string[i];
      break;
    }
  }
  const [val1, val2] = string.split(opt).map(parseFloat);

  switch (opt) {
    case "+":
      result = val1 + val2;
      // Clear();
      break;
    case "-":
      result = val1 - val2;
      // Clear();
      break;
    case "*":
      result = val1 * val2;
      // Clear();
      break;
    case "/":
      result = val1 / val2;
      break;
      // Clear();
    default:
      alert("please Enter ");
      break;
  }
  
}

function Clear() {
  string = "";
  Displayinput.value = string;
}
function checkError(str) {
  let strl = str.length;
  if (strl === 0) {
    string = "";
  }
}
