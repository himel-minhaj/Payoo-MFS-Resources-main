// step:1 add even handeler with prevent page reload
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // console.log("money add btn clicked");
    event.preventDefault();
    // step 2: get money jaita ami type korbo
    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);
    // step 3: pin varify korbo
    const pinNum = document.getElementById("pin-num").value;
    console.log(pinNum);
    // this is not right way
    if (pinNum === "1234") {
      // console.log('add money');
      // step 4: current balance koto ace
      //
      const balance = document.getElementById("account-balance").innerText;
      console.log(balance); // balanceTk input fild nah tai .inner text
      //
      //step 5: ager tk + input taka // input tk ke parseInteger/ parseFloat kore number a convert korte hobe
      const addmoneyNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance);
      //  console.log(typeof balanceNumber);
      const newBalance = addmoneyNumber + balanceNumber;
      console.log(newBalance);
      // step 6 update balance 
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("rong number or pin");
    }
  });
