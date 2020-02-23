function countFinalAvgAndLetterGrade() {
  var hwAvg, midExam, finalExam, participation, finalAvg, letterGrade;

  hwAvg = document.getElementById("hwAvg").value;
  midExam = document.getElementById("midExam").value;
  finalExam = document.getElementById("finalExam").value;
  participation = document.getElementById("participation").value;


  hwAvg = parseInt(hwAvg);
  midExam = parseInt(midExam);
  finalExam = parseInt(finalExam);
  participation = parseInt(participation);


  finalAvg = (.5 * hwAvg) + (.2 * midExam) + (.2 * finalExam) + (.1 * participation);

  finalAvg = Math.round(finalAvg);

  if (finalAvg >= 90 && finalAvg <= 100) {
    letterGrade = "A"
  } else if (finalAvg >= 80 && finalAvg <= 89) {
    letterGrade = "B"
  } else if (finalAvg >= 70 && finalAvg <= 79) {
    letterGrade = "C"
  } else {
    letterGrade = "Student must retake the course"
  };

  

  

  if (Number.isNaN(hwAvg) || Number.isNaN(midExam) || Number.isNaN(finalExam) || Number.isNaN(participation)) {

    document.forms["myform"].elements["result"].value = ("You should enter four numbers!\nTo try again click on RESET");

  } else if (0 > hwAvg > 100 || 0 > midExam > 100 || 0 > finalExam > 100 || 0 > participation > 100){

    document.forms["myform"].elements["result"].value = ("You should enter numbers between 0-100!\nTo try again click on RESET");
  
  } else if (
    (hwAvg < 0 || hwAvg > 100) ||
    (midExam < 0 || midExam > 100) ||
    (finalExam < 0 || finalExam > 100) || (participation < 0 || participation > 100)) {

    document.forms["myform"].elements["result"].value = ("You should enter numbers between 0-100!\nTo try again click on RESET");

  } else {
    document.forms["myform"].elements["result"].value = ("Final average is: " + finalAvg + " \nLetter grade is: " + letterGrade);
  }


}