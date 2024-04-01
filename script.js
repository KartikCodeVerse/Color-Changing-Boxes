// document.addEventListener("DOMContentLoaded", function () {
//   var boxes = document.getElementsByClassName("box");
//   var colors = ["red", "blue", "green", "yellow", "orange"]; // Example colors

//   // Function to change background color
//   function changeBackgroundColor() {
//     for (var i = 0; i < boxes.length; i++) {
//       var randomColorIndex = Math.floor(Math.random() * colors.length);
//       boxes[i].style.backgroundColor = colors[randomColorIndex];
//     }
//   }

//   // Call the function initially
//   changeBackgroundColor();

//   // Set interval to change background color every 2 seconds (2000 milliseconds)
//   setInterval(changeBackgroundColor, 300);
// });

document.addEventListener("DOMContentLoaded", function () {
  var boxes = document.getElementsByClassName("box");

  function getRandomColor() {
    let val1 = Math.floor(Math.random() * 255);
    let val2 = Math.floor(Math.random() * 255);
    let val3 = Math.floor(Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
  }

  // Function to change background color
  function changeBackgroundColor() {
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].style.backgroundColor = getRandomColor();
      boxes[i].style.color = getRandomColor();
    }
  }
  // Call the function initially
  changeBackgroundColor();

  // Set interval to change background color every 2 seconds (2000 milliseconds)
  setInterval(changeBackgroundColor, 1000);
});
