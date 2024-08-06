var i = 1; // Start from index 1 to skip the first character
var txt = 'Ahmed Abdullah_'; /* The text */
var speed = 100; /* The speed/duration of typing characters in milliseconds */
var eraseSpeed = 20; /* The speed/duration of erasing characters in milliseconds */
var delayBetween = 1000; /* Delay between typing and erasing in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } 
  
  else {
    setTimeout(eraseText, delayBetween);
  }
}

function eraseText() {
  if (i >= 1) { // Start erasing from the second character
    var str = txt.substring(0, i);
    document.getElementById("demo").innerHTML = str;
    i--;
    setTimeout(eraseText, eraseSpeed);
  } 
  else {
    i = 1; // Reset to skip the first character
    setTimeout(typeWriter, delayBetween);
  }
}

window.onload = function() {
    document.getElementById("demo").innerHTML = txt[0]; // Print the first character immediately
    typeWriter();
};


function toggleMode() {
  var dayMode = document.getElementById('day-mode');
  if (dayMode.getAttribute('href') === 'styles_d.css') {
      dayMode.setAttribute('href', 'styles_n.css');
  } else {
      dayMode.setAttribute('href', 'styles_d.css');
  }
  // Adding transition effect
  dayMode.onload = function() {
      dayMode.style.transition = "opacity 1s ease-in-out";
      dayMode.style.opacity = "0";
      setTimeout(function() {
          dayMode.style.opacity = "1";
      }, 100);
  };
}