// show  the cash out form hide add money form
document
  .getElementById("show-cash-out-btn")
  .addEventListener("click", function () {
    document.getElementById("cash-out-form").classList.remove("hidden");
    document.getElementById("add-money-form").classList.add("hidden");
  });
// show the add money form hide casout form
document
  .getElementById("show-cashin-btn")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
  });
