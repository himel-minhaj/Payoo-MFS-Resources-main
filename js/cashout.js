document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const removeMoneyInput = document.getElementById("cash-out-money").value;
    console.log(removeMoneyInput);
    const pinNum = document.getElementById("cash-out-pin").value;
    console.log(pinNum);
    if (pinNum === "112233") {
      console.log("login");
      const accountBalance =
        document.getElementById("account-balance").innerText;
      console.log(accountBalance);
      const currentBalanceNumber = parseFloat(accountBalance);
      console.log(typeof currentBalanceNumber);
      const removeMoneyInputNumber = parseFloat(removeMoneyInput);
      console.log(typeof removeMoneyInputNumber);
      const newBalance = currentBalanceNumber - removeMoneyInputNumber;
      console.log(newBalance);
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("wrong number or pin");
    }
  });
