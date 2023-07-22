const debounceInput = document.querySelector(".debounce-input");
const normalInput = document.querySelector(".normal-input");
let result = document.querySelector(".result");
let display = function (e) {
  
  let textNode;
  let h3 = document.createElement("h3");
//here this takes the value of the element on which the input event is triggered
  textNode = document.createTextNode(`${this.value}`);

  h3.appendChild(textNode);
  /* This will do both:
    remove all existing children, and
    append all of the given new children, in one operation.*/

  //result.textContent = ''; alternative
  result.replaceChildren(h3);
  //result.insertAdjacentElement('beforeend',h3)
};

let debounce = function (fn, delay) {
  let timeout;
  return function () {
    console.log(arguments);
    
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        //binding this to function call & arguments array holds , the event object)
      fn.call(this, arguments);
    }, delay);
  };
};
/* calling debounce(display,1000) returns 
function () {
    console.log(arguments);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.call(this, arguments);
    }, delay);
  };
  So, debouncedDisplay holds the above function
  */
debouncedDisplay = debounce(display, 1000);

debounceInput.addEventListener("input", debouncedDisplay);
normalInput.addEventListener("input", display);
