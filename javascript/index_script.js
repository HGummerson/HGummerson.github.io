

// Further contact button
document.getElementById("contact").innerHTML = "Would you like to contact me further?";

function updateContact(message) {
    document.getElementById("contact").innerHTML = message;
}

function hide(button) {
    var div = document.getElementById(button);
    div.style.display = 'none';
}

// TODO, fade as you scroll, hover stuff for projects, scroll for resume, other