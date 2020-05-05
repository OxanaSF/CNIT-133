SearchForChar = () => {
  let i, count, sentence, character, charLength, notFoundText, errWindow;

  count = 0;

  sentence = myform.sentence.value;
  sentenceToLower = sentence.toLowerCase();

  character = myform.character.value;

  charResToLower = character.toLowerCase();
  charLength = character.length;

  for (i = 0; i < sentenceToLower.length; i++) {
    if (sentenceToLower.charAt(i) == charResToLower) {
      count++;
    }
  }

  if (sentence === "" || character === "") {
    document.forms["myform"].elements["result"].value = "";

    document.forms["myform"].elements["error-result"].value =
      "You should fill in both fields!";
  } else if (charLength > 1) {
    document.forms["myform"].elements["result"].value = "";

    document.forms["myform"].elements["error-result"].value =
      "You should enter just one letter";
  } else if (charResToLower.search(/[^0-9]/) === -1) {
    document.forms["myform"].elements["result"].value = "";

    document.forms["myform"].elements["error-result"].value =
      "No digit allowed!";
  } else if (count === 0) {
    document.forms["myform"].elements["result"].value = ""
    notFoundText = `<title>Info about character ${character}</title>\n`;
    notFoundText +=
      `<body style='color: white; background-color: deepskyblue; font-size: 20px; font-family: Arial, Helvetica, sans-serif; text-align: center; letter-spacing: 1px;'>\n`;
    notFoundText += `<div>\n`;
    notFoundText +=
      `The letter "${character}"<p>is not found in the text string!</p>\n`;
    notFoundText += `</div>\n`;
    notFoundText += `</body>\n`;

    errWindow = window.open("about:blank", "hello", "width=300,height=100");

    errWindow.focus();

    errWindow.document.write(notFoundText);
    errWindow.document.close();
  } else {
    document.forms["myform"].elements["error-result"].value = "";

    document.forms["myform"].elements["result"].value =
      "The number of occurrences of letter " +
      '"' +
      character +
      '"' +
      " is " +
      count;
  }
}
