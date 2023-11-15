var ol = 0;
var isPlaying = false;
var circleInterval;
var el = document.getElementById("hello");
var sc = 1;

function circleAnimation(time) {
    ol++;
    sc++;

    if (sc <= 500) {
        el.style.fontSize = sc + "px";
    }
    el.style.left = ol + "px";
    circleInterval = requestAnimationFrame(circleAnimation);

}
function mouseClicked() {
    if (isPlaying) {
        isPlaying = false;
        document.getElementById("hello").style.color = "red";
        cancelAnimationFrame(circleInterval);
    }
    else{
        isPlaying = true;
        document.getElementById("hello").style.color = "blue";
        circleInterval = requestAnimationFrame(circleAnimation);

    }
}
document.getElementById("hello").addEventListener("click",mouseClicked);
document.getElementById("hello").style.color = "green";



