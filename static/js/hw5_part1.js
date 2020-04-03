function validate_form() {
  valid = true;

  
  if (document.contact_form.contact_name.value == "") {
    alert("Please fill in the 'Your Name' box.");
    valid = false;
  }

  if ((document.contact_form.gender[0].checked == false) && (document.contact_form.gender[1].checked == false) &&
    (document.contact_form.gender[2].checked == false)) {
    alert("Please choose your Gender");
    valid = false;

    
  }

  if ((document.contact_form.gender[2].checked == valid) &&
    (document.contact_form.other_gender.value == "")) {
    alert("Please type your Gender");
    valid = false;
  }

  

  if (document.contact_form.age.selectedIndex == 0) {
    alert("Please select your Age.");
    valid = false;
  }

  if (document.contact_form.terms.checked == false) {
    alert("Please check the Terms & Conditions box.");
    valid = false;
  }


  return valid;
}


