document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);
    const pinNum = document.getElementById("pin-num").value;
    console.log(pinNum);
    if (pinNum === "112233") {
      console.log("login");
      const accountBalance =
        document.getElementById("account-balance").innerText;
      console.log(accountBalance);
      const currentBalanceNumber = parseFloat(accountBalance);
      console.log(typeof currentBalanceNumber);
      const addMoneyInputNumber = parseFloat(addMoneyInput);
      console.log(typeof addMoneyInputNumber);
      const newBalance = currentBalanceNumber + addMoneyInputNumber;
      console.log(newBalance);
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("wrong number or pin");
    }
  });
