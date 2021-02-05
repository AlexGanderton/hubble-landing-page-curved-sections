const input = document.querySelector("input");
const form = document.querySelector("form");
const submitBtn = document.querySelector(".submit");
const errorText = document.querySelector(".error");

let emailRegex = /^[A-Za-z0-9]+@[A-Za-z]+[.]([A-Za-z]+$|[A-Za-z]+[.][A-Za-z]+$)/;

function validateForm() {
  if (emailRegex.test(input.value)) {
    errorText.classList.add("hide");
    input.style.border = "none";
    form.submit();
  } else {
    errorText.classList.remove("hide");
    input.style.border = "1px solid hsl(0, 100%, 63%)";
  }
}

submitBtn.addEventListener("click", validateForm);
