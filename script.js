let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let ButtonArr = Array.from(buttons);
console.log(ButtonArr);

let string = "";
input.onchange = () => {
  string = input.value;
  
};

ButtonArr.forEach((button) => {
  button.addEventListener("click", (e) => {
    let BtnHtml = e.target.innerHTML;
    if (BtnHtml == "AC") {
      ClearAll();
    } else if (BtnHtml == "DEL") {
      DelOne();
    } else if (BtnHtml == "=") {
      Calculate();
    } else {
      string += BtnHtml;
      input.value = string;
    }
  });
});

const ClearAll = () => {
  string = "";
  input.value = string;
};
const DelOne = () => {
  if (typeof (string != NaN)) {
    while (string) {
      // console.log(string);
      string = Math.floor(string / 10);
      input.value = string;

      return;
    }
    string = "";
  } else {
    string = string.substring(0, string.length - 1);
    console.log(string);
    input.value = string;
  }
};

const Calculate = () => {
  string = eval(string);

  input.value = string;
};
