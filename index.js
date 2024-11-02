const greeting = document.getElementById("greeting");
greeting.style.textAlign = "center"
greeting.style.marginTop = "50px"
greeting.style.fontSize = "50px"
const username = window.prompt("What's your name?", "Jane");
greeting.innerHTML = "Welcome " + username + "!";

