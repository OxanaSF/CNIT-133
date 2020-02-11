function getSum() {
  var number1, number2, number3, n1, n2, n3, sum;

  number1 = document.getElementById("num1").value;
  number2 = document.getElementById("num2").value;
  number3 = document.getElementById("num3").value;

  n1 = parseInt(number1);
  n2 = parseInt(number2);
  n3 = parseInt(number3);

  sum = n1 + n2 + n3;

  if (Number.isNaN(n1) || Number.isNaN(n2) || Number.isNaN(n3)) {

    document.forms["myform"].elements["result"].value = ("You should enter three numbers!\nTo try again click on RESET");

  } else {
    document.forms["myform"].elements["result"].value = ("The sum of the integers is " + sum);
  }

  return False;

}

function getAverage() {
  var number1, number2, number3, n1, n2, n3, average;

  number1 = document.getElementById("num1").value;
  number2 = document.getElementById("num2").value;
  number3 = document.getElementById("num3").value;

  n1 = parseInt(number1);
  n2 = parseInt(number2);
  n3 = parseInt(number3);

  average = (n1 + n2 + n3) / 3;

  if (Number.isNaN(n1) || Number.isNaN(n2) || Number.isNaN(n3)) {
    
    document.forms["myform"].elements["result"].value = ("You should enter three numbers!\nTo try again click on RESET");

  } else {
  document.forms["myform"].elements["result"].value = ("The average of the integers is " + average);

}
}

function getProduct() {
  var number1, number2, number3, n1, n2, n3, product;

  number1 = document.getElementById("num1").value;
  number2 = document.getElementById("num2").value;
  number3 = document.getElementById("num3").value;

  n1 = parseInt(number1);
  n2 = parseInt(number2);
  n3 = parseInt(number3);

  product = n1 * n2 * n3;

  if (Number.isNaN(n1) || Number.isNaN(n2) || Number.isNaN(n3)) {

    document.forms["myform"].elements["result"].value = ("You should enter three numbers!\nTo try again click on RESET");

  } else {

  document.forms["myform"].elements["result"].value = ("The product of the integers is " + product);
  }
}


function getSmallest() {
  var number1, number2, number3, n1, n2, n3, smallest;

  number1 = document.getElementById("num1").value;
  number2 = document.getElementById("num2").value;
  number3 = document.getElementById("num3").value;

  n1 = parseInt(number1);
  n2 = parseInt(number2);
  n3 = parseInt(number3);

  smallest = Math.min(n1, n2, n3)

  if (Number.isNaN(n1) || Number.isNaN(n2) || Number.isNaN(n3)) {

    document.forms["myform"].elements["result"].value = ("You should enter three numbers!\nTo try again click on RESET");

  } else {

  document.forms["myform"].elements["result"].value = ("The smallest of the integers is " + smallest);
  }
}

function getLargest() {
  var number1, number2, number3, n1, n2, n3, largest;

  number1 = document.getElementById("num1").value;
  number2 = document.getElementById("num2").value;
  number3 = document.getElementById("num3").value;

  n1 = parseInt(number1);
  n2 = parseInt(number2);
  n3 = parseInt(number3);

  largest = Math.max(n1, n2, n3)

  if (Number.isNaN(n1) || Number.isNaN(n2) || Number.isNaN(n3)) {

    document.forms["myform"].elements["result"].value = ("You should enter three numbers!\nTo try again click on RESET");

  } else {

  document.forms["myform"].elements["result"].value = ("The largest of the integers is " + largest);
  }
}