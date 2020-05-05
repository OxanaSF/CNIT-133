obtainMathFuncs = () => {
  let n, inputRegExp;

  const number = myform.number.value;

  inputRegExp = /^\d+\.\d{4,}$/;

  if (!inputRegExp.test(number)) {
    document.forms["myform"].elements["result"].value = "";

    document.forms["myform"].elements["error-result"].value =
      "You should enter a number with at least four decimal positions!";
  } else {
    n = parseFloat(number);
    numAfterDot = ("" + number).split(".")[1];

    nearestInteger = Math.round(n);

    squareRoot = Math.sqrt(n);
    squareRoot = Math.round(squareRoot);

    nearestTenths = n.toFixed(1);

    nearestHunderdths = n.toFixed(2);

    nearestThousandths = n.toFixed(3);

    document.forms["myform"].elements["error-result"].value = "";

    document.forms["myform"].elements["result"].value =
      `The original floating-point number: ${n} \nThe nearest integer: ${nearestInteger}\nThe square root of the number then rounded to an integer: ${squareRoot}\nThe number rounded to the nearest tenth: ${nearestTenths}\nThe number rounded to the nearest hundredth: ${nearestHunderdths}\nThe number rounded to the nearest thousandth: ${nearestThousandths}`;
  }
}
