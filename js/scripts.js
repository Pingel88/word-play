const space = " "

function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator)
  const newArray = []
  arrayOfStrings.forEach(function(word) {
    if (word.length >= 3) {
      newArray.push(word);
    }
    newArray.reverse();

  });
  alert(newArray.join(" "))
}


$(document).ready(function() {
  $("form#word-play").submit(function(event) {
    splitString($("input#sentence").val(), space);
    event.preventDefault();
  });
});