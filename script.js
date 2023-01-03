function calculate() {
  const initial = document.querySelector("#initial").value;
  let initialValue = Number(initial);

  const discount = document.querySelector("#discount").value;
  let discountValue = Number(discount);

  let beforeDiscount = (initialValue * discountValue) / 100;
  let afterDiscount = initialValue - beforeDiscount;

  afterDiscount = afterDiscount.toLocaleString();
  beforeDiscount = beforeDiscount.toLocaleString();

  let errorMessage = "Enter valid number";

  document.querySelector("#after-discount").value = afterDiscount;

  if (isNaN(initialValue)) {
    document.querySelector(".result-text").innerHTML =
      "Please enter a valid number";
    document.querySelector("#after-discount").value = errorMessage;
  } else {
    document.querySelector(
      ".result-text"
    ).innerHTML = `Your price after ${discountValue}% discount is $${afterDiscount}. You saved $${beforeDiscount}.`;
  }
}
