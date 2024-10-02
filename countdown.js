const eventDate = new Date("Dec 21, 2024 17:00:00").getTime();
let countdownFunction;

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  const hours = String(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML =
      "<div class='event-started'>¡El evento ha comenzado!</div>";
  }
}

function startCountdown() {
  countdownFunction = setInterval(updateCountdown, 1000);
}

function togglePlay() {
  const audioPlayer = document.getElementById("audioPlayer");
  audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause();
}

document.getElementById("playButton").addEventListener("click", togglePlay);

window.onload = startCountdown;
