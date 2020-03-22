function getSquare() {
  var number;

  number = document.getElementById("number").value;
  n = parseInt(number);

  if (Number.isNaN(n) || n > 10 || n < 2) {

    document.forms["myform"].elements["result2"].value = ("You should enter a digit between 2 and 10 inclusive!\nTo try again click on RESET");

  } else {
 

  for (var i = 0; i < n; i++) {
    
      for (var j = 0; j < n; j++) {
  
      document.forms["myform"].elements["result1"].value += ("*");
  }
    document.forms["myform"].elements["result1"].value += ("\n");

  }
    document.forms["myform"].elements["result2"].value = ("Good Job!");
}
}
