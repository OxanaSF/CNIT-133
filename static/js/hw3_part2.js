function salesEarnings() {
  var item1, item2, item3, item4, item1total, item2total, item3total, item4total, totalSold, totalEarnings;

  item1 = document.getElementById("item1").value;
  item2 = document.getElementById("item2").value;
  item3 = document.getElementById("item3").value;
  item4 = document.getElementById("item4").value;

  item1 = parseFloat(item1)
  item2 = parseFloat(item2)
  item3 = parseFloat(item3)
  item4 = parseFloat(item4)



  if (Number.isNaN(item1) || Number.isNaN(item2) || Number.isNaN(item3) || Number.isNaN(item4)) {

    
    document.forms["myform"].elements["result"].value = ("You should enter four numbers! "+ "To try again click on RESET");

  } else if (item1 < 0 || item2 < 0 || item3 < 0 || item4 < 0) {

    
    document.forms["myform"].elements["result"].value = ("You should enter positive numbers! "+ "To try again click on RESET");

  } else {



    item1total = parseFloat(Math.round(item1 * 239.99).toFixed(2));
    item2total = parseFloat(Math.round(item2 * 129.75).toFixed(2));
    item3total = parseFloat(Math.round(item3 * 99.95).toFixed(2));
    item4total = parseFloat(Math.round(item4 * 350.89).toFixed(2));


    totalSold = item1total + item2total + item3total + item4total

    totalEarnings = (totalSold * 0.09) + 200


    document.forms["myform"].elements["item1_sold"].value = (item1);
    document.forms["myform"].elements["item2_sold"].value = (item2);
    document.forms["myform"].elements["item3_sold"].value = (item3);
    document.forms["myform"].elements["item4_sold"].value = (item4);

    document.forms["myform"].elements["item1_total"].value = (item1total);
    document.forms["myform"].elements["item2_total"].value = (item2total);
    document.forms["myform"].elements["item3_total"].value = (item3total);
    document.forms["myform"].elements["item4_total"].value = (item4total);

    document.forms["myform"].elements["total_sold"].value = (totalSold);

    document.forms["myform"].elements["total_earnings"].value = (totalEarnings);

  }

}