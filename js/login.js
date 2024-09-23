console.log("hi this is minhaj");
// bujar jonn
// step - 1: set even handeler
// document
//   .getElementById("login-btn")
//   .addEventListener("click", function (event) {
//     // console.log("login button clicked");
//     // step - 2:prevent default behaviour
//     event.preventDefault();
//     // step - 3: get the phone number and pin number
//     const phoneNum = document.getElementById("phone-num"); //.value
//     // console.log(phoneNum.value);
//     const btnPin = document.getElementById("btn-pin"); //.value
//     // console.log(btnPin.value);
//     // this is temporary use
//     // step - 4...............:validate phone and pin
//     if (phoneNum.value === "5" && btnPin.value === "1234") {
//       console.log("login page");
//       // step - 5: allow user to use website
//     } else {
//       console.log("wrong nummber or pin");
//     }
//   });
//
//
// new System
document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    // console.log("log in");
    event.preventDefault();
    const phoneNum = document.getElementById("phone-num").value;

    const btnPin = document.getElementById("btn-pin").value;
    console.log(phoneNum, btnPin);

    if (phoneNum === "5" && btnPin === "1234") {
      console.log("login page");
      window.location.href = "./home.html";
    } else {
      alert("wrong nummber or pin");
    }
  });
