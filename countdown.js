var eventDate = new Date("Dec 21, 2024 17:00:00").getTime();

var countdownFunction = setInterval(function () {
  var now = new Date().getTime();
  var distance = eventDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML =
      "<div class='event-started'>¡El evento ha comenzado!</div>";
  }
}, 1000);

const audioPlayer = document.getElementById("audioPlayer");

function togglePlay() {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}

window.onload = function () {
  audioPlayer.play();
};
