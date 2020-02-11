function countNegatPositZeros() {
  var number1, number2, number3, number4, number5, n1, n2, n3, n4, n5, nums, x;

  number1 = document.getElementById("num1").value;
  number2 = document.getElementById("num2").value;
  number3 = document.getElementById("num3").value;
  number4 = document.getElementById("num4").value;
  number5 = document.getElementById("num5").value;

  n1 = parseInt(number1);
  n2 = parseInt(number2);
  n3 = parseInt(number3);
  n4 = parseInt(number4);
  n5 = parseInt(number5);

  nums = [n1, n2, n3, n4, n5]

  countNegativs = 0
  countPositives = 0
  countZeros = 0
  
  for (x of nums) {
    if (x > 0) {
      countPositives += 1

    } else if (x < 0) {
      countNegativs += 1

    } else {
      countZeros += 1
    }
  }

  





  if (Number.isNaN(n1) || Number.isNaN(n2) || Number.isNaN(n3)) {

    document.forms["myform"].elements["result"].value = ("You should enter five numbers!\nTo try again click on RESET");

  } else {
    document.forms["myform"].elements["result"].value = ("You have entered:\n\n" + countPositives + " positive numbers,\n" + countNegativs + " negative numbers,\n" + countZeros + " zeros.");
  }


}
