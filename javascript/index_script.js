

// FURTHER CONTACT BUTTON
document.getElementById("contact").innerHTML = "Would you like to contact me further?";

function updateContact(message) {
    document.getElementById("contact").innerHTML = message;
}

function hide(button) {
    var div = document.getElementById(button);
    div.style.display = 'none';
}

// HOVER PLAY FUNCTIONALITY
function hoverPlay(videoId) {
    const video = document.getElementById(videoId);
    video.addEventListener("mouseover", function() {
        this.play();
    });

    video.addEventListener("mouseleave", function() {
        this.pause();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    hoverPlay("webvid");
    hoverPlay("appvid");
});

// TODO, fade as you scroll, hover stuff for projects, scroll for resume, other