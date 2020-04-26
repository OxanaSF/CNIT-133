function extractSequences() {
  var phoneNum, areaCode;

  phoneNum = document.getElementById("phone-number").value;

  if (phoneNum.length < 14) {
    document.forms["myform"].elements["result"].value = "";

    document.forms["myform"].elements["error-result"].value =
      "Please enter ten digits of the phone number!";
  } else {
    document.forms["myform"].elements["error-result"].value = "";
    areaCode = phoneNum.split(")")[0].slice(1, 4);
    firstThree = phoneNum.split(")")[1].slice(0, 4);
    lastFour = phoneNum.split("-")[1].slice(0, 4);

    document.forms["myform"].elements["result"].value = "";
    // inputRegExp = /^(\(d{3}))(\d{3})(-\d{4})$/;

    document.forms["myform"].elements["result"].value =
      "Area code: " +
      areaCode +
      "\nFirst Three: " +
      firstThree +
      "\nFirst Three: " +
      lastFour;
  }
}
