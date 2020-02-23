var number1, number2, multiply, answer;




function generateQuestion() {
  number1 = Math.floor(Math.random() * 10);
  number2 = Math.floor(Math.random() * 10);

  multiply = number1 * number2;

  document.forms["myform"].elements["result"].value = ("How much is " + number1 + " times " + number2 + "?");

  
  document.forms["myform"].elements["result2"].value = "";
  document.forms["myform"].elements["result3"].value = "";
  document.forms["myform"].elements["answer"].value = (""); 
  

}


function newGame() {
  generateQuestion();
}



function getAnswer() {

  answer = document.getElementById("answer").value;
  
  


  if (Number.isNaN(parseInt(answer))) {
    document.forms["myform"].elements["result2"].value = ("You should enter a number!\nTo try again click on START");

  } else if (parseInt(answer) === parseInt(multiply)) {
    document.forms["myform"].elements["result2"].value = ("Very good!");  

    document.forms["myform"].elements["result3"].value = ("Would you like to continue?");

  }else{
    document.forms["myform"].elements["result2"].value = ("Not a correct answer. Please try again. Enter new answer and click on SUBMIT"); 

    document.forms["myform"].elements["result"].value = ("How much is " + number1 + " times " + number2 + "?");
    document.forms["myform"].elements["answer"].value = (""); 
    
  }

}



