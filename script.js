function calculate() {
  const initial = document.querySelector("#initial").value;
  let initialValue = Number(initial);

  const discount = document.querySelector("#discount").value;
  let discountValue = Number(discount);

  let beforeDiscount = (initialValue * discountValue) / 100;
  let afterDiscount = initialValue - beforeDiscount;

  afterDiscount = afterDiscount.toLocaleString();
  beforeDiscount = beforeDiscount.toLocaleString();

  document.querySelector("#after-discount").value = afterDiscount;
  document.querySelector(
    ".result-text"
  ).innerHTML = `Your price after discount is ${afterDiscount}. You saved ${beforeDiscount}.`;
}
