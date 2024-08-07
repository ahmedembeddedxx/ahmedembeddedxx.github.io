var nameText = 'Ahmed Abdullah_';
var roles = ['ㅤResearcher', 'ㅤML Engineer', 'ㅤData Scientist', 'ㅤOpen Source Contributor'];

var nameIndex = 1; // Start from index 1 to skip the first character for name
var roleIndex = 0; // Start from the first role
var roleCharIndex = 1; // Start from index 1 to skip the first character for role

var nameSpeed = 100; // Speed for typing name characters
var roleSpeed = 100; // Speed for typing role characters
var eraseSpeed = 20; // Speed for erasing characters
var delayBetween = 1000; // Delay between typing and erasing

function typeWriterName() {
  if (nameIndex < nameText.length) {
    document.getElementById("name").innerHTML += nameText.charAt(nameIndex);
    nameIndex++;
    setTimeout(typeWriterName, nameSpeed);
  } else {
    setTimeout(eraseRole, delayBetween);
  }
}

function typeWriterRole() {
  if (roleCharIndex < roles[roleIndex].length) {
    document.getElementById("role").innerHTML += roles[roleIndex].charAt(roleCharIndex);
    roleCharIndex++;
    setTimeout(typeWriterRole, roleSpeed);
  } else {
    setTimeout(eraseRole, delayBetween);
  }
}

function eraseRole() {
  if (roleCharIndex >= 1) {
    var str = roles[roleIndex].substring(0, roleCharIndex);
    document.getElementById("role").innerHTML = str;
    roleCharIndex--;
    setTimeout(eraseRole, eraseSpeed);
  } else {
    roleIndex = (roleIndex + 1) % roles.length; // Move to the next role
    roleCharIndex = 1; // Reset to skip the first character
    setTimeout(typeWriterRole, delayBetween);
  }
}

window.onload = function() {
    document.getElementById("name").innerHTML = nameText[0]; // Print the first character immediately
    document.getElementById("role").innerHTML = roles[roleIndex][0]; // Print the first character of the first role immediately
    typeWriterName();
};
