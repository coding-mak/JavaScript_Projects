let count = 0;
let saveEl = document.getElementById("save-el");

// increment value
function increment() {
  count += 1;
  document.getElementById("count-el").innerText = count;
}

// decrement value
function decrement() {
  if (count > 0) {
    count -= 1;
    document.getElementById("count-el").innerText = count;
  } else {
    count = 0;
  }
}

// reset
function reset() {
  document.getElementById("count-el").innerText = 0;
  count = 0;
}

// save
function save() {
  if (count > 0) {
    let countStr = count + " - ";
    saveEl.innerText += countStr;
  }
  document.getElementById("count-el").innerText = 0;
  count = 0;
}
