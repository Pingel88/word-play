const space = " "

function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator)
  console.log('The array has ', arrayOfStrings.length, ' elements: ', arrayOfStrings.join(' / '))
}


$(document).ready(function() {
  $("form#word-play").submit(function(event) {
    splitString($("input#sentence").val(), space);
    event.preventDefault();
  });
});