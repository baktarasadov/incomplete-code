// Get greeting dom element
const greeting = document.getElementById("greeting");

// Task 1: Change the color of the greeting text
document.getElementById("colorButton").addEventListener("click", function () {
  // TODO: Complete the function to change the 'greeting' element's color to a random color
  greeting.style.color = getRandomColor();
});

// Task 2: Change the text content of the greeting
document.getElementById("textButton").addEventListener("click", function () {
  // TODO: Complete the function to change the text of the 'greeting' element to "Hello, JavaScript!"
  greeting.innerText = getRandomText();
});

// Helper function for generating a random color (Complete for the applicant)
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Helper function for generating a random character (Complete for the applicant)
function getRandomText() {
  let result = "";
  const length = 10;
  const minLength = 65;
  const maxLength = 122;
  for (var i = 0; i < length; i++) {
    result += String.fromCharCode(
      Math.floor(Math.random() * (maxLength - minLength + 1) + minLength)
    );
  }
  return result;
}
