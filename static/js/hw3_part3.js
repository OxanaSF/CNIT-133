function celsiusToFahrenheit() {
  var number, fahrenheit;

  number = document.getElementById("number").value;


  number = parseFloat(number);


  fahrenheit = Math.trunc((9/5 * number) + 32);

  if (Number.isNaN(number)) {

    document.forms["myform"].elements["result"].value = ("You should enter a number!");

  } else {
    document.forms["myform"].elements["result"].value = ("It is " + fahrenheit + " degree Fahrenheit");
  }
}



function fahrenheitToCelsius() {
  var number, celsius;

  number = document.getElementById("number").value;


  number = parseFloat(number);

  celsius = Math.trunc(5/9 * (number - 32));

  if (Number.isNaN(number)) {

    document.forms["myform"].elements["result"].value = ("You should enter a number!");

  } else {
    document.forms["myform"].elements["result"].value = ("It is " + celsius + " degree Celsius");

  }
}


