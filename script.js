function calculate() {
  const initial = document.querySelector("#initial").value;
  const initialValue = Number(initial);

  const discount = document.querySelector("#discount").value;
  const discountValue = Number(discount);

  const beforeDiscount = (initialValue * discountValue) / 100;
  let afterDiscount = initialValue - beforeDiscount;

  console.log(afterDiscount);

  document.querySelector("#after-discount").value = afterDiscount;
  document.querySelector(
    ".result-text"
  ).innerHTML = `Your price after discount is ${afterDiscount}. You saved ${beforeDiscount}.`;
}
