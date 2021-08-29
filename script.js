const stock = document.querySelector(".stock");
const quantity = document.querySelector(".quantity");
const today = document.querySelector(".today_stock");
const buy = document.querySelector(".submit");
const check = document.querySelector(".check");
const display = document.querySelector(".p");

let quanty = 0;
buy.addEventListener("click", () => {
  if (stock.valueAsNumber && quantity.valueAsNumber) {
    quanty = stock.valueAsNumber * quantity.valueAsNumber;
    display.innerHTML = `you bought ${quantity.valueAsNumber} shares  through ${quanty}rs`;
  } else if (stock.valueAsNumber) {
    display.innerHTML = `please enter quantity to buy`;
  } else if (quantity.valueAsNumber) {
    display.innerHTML = `please enter stock price to buy`;
  } else if (!quantity.valueAsNumber && !stock.valueAsNumber) {
    display.innerHTML = `please enter stock price and quantity`;
  }
});
let p, k;
check.addEventListener("click", () => {
  if (stock.valueAsNumber && today.valueAsNumber && quantity.valueAsNumber) {
    let profit =
      (today.valueAsNumber - stock.valueAsNumber) / stock.valueAsNumber;
    p = profit * 100;
    display.innerHTML = `your ${
      stock.valueAsNumber < today.valueAsNumber
        ? `profit is ${p}%  📈😁`
        : `loss is ${(k = Math.abs(p))}%  📉😥`
    } `;
  } else if (stock.valueAsNumber == today.valueAsNumber) {
    display.innerHTML = `Today no loss or profit for you 😐`;
  } else if (stock.valueAsNumber && quantity.valueAsNumber) {
    display.innerHTML = `please enter today's stock price`;
  } else if (today.valueAsNumber && quantity.valueAsNumber) {
    display.innerHTML = `please enter stock price`;
  } else if (stock.valueAsNumber && today.valueAsNumber) {
    display.innerHTML = `please enter quantity`;
  } else if (
    !stock.valueAsNumber &&
    !today.valueAsNumber &&
    !quantity.valueAsNumber
  ) {
    display.innerHTML = `please enter stock price and quantity and today stock price`;
  } else if (stock.valueAsNumber) {
    display.innerHTML = `please enter quantity and today's stock price`;
  } else if (today.valueAsNumber) {
    display.innerHTML = `please enter stock price and quantity`;
  } else if (quantity) {
    display.innerHTML = `please enter stock price and today's stock price`;
  }
  if (k >= 50) {
    document.body.style.backgroundColor = "orangered";
  } else {
    document.body.style.backgroundColor = "#eee";
  }
});
