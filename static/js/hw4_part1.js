function getProductSum5To21(){
var product, sum;

product = 1;
sum = 0;


for (var number = 5; number <= 21; number += 4) {

  product *= number;
  sum += number;

}

  document.forms["myform1"].elements["result1"].value = ("The product of every fourth integer from 5 to 21 inclusive is " + product.toLocaleString() + " \n\nThe sum of every fourth integer from 5 to 21 inclusive is " + sum.toLocaleString());

}


function getProductSum3To21(){
var x, product, sum;

x = 3;
product = 1;
sum = 0;

while (x <= 21) {

sum += x;
product *= x;
x += 3;

}

  document.forms["myform2"].elements["result2"].value = ("The product of every third integer from 3 through 21 inclusive is " + product.toLocaleString() + " \n\nThe sum of of every third integer from 3 through 21 inclusive is " + sum.toLocaleString());


}




