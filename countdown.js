document.addEventListener("DOMContentLoaded", function () {
  var countDownDate = new Date("Dec 23, 2024 00:00:00").getTime();

  var countdownFunction = setInterval(function () {
    var now = new Date().getTime();
    var remainingTime = countDownDate - now;

    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      "<div class='timer-section'><div class='number'>" +
      days +
      "</div><span>DÍAS</span></div>" +
      "<div class='timer-section'><div class='number'>" +
      hours +
      "</div><span>HORAS</span></div>" +
      "<div class='timer-section'><div class='number'>" +
      minutes +
      "</div><span>MINUTOS</span></div>" +
      "<div class='timer-section'><div class='number'>" +
      seconds +
      "</div><span>SEGUNDOS</span></div>";

    if (remainingTime < 0) {
      clearInterval(countdownFunction);
      document.getElementById("countdown").innerHTML =
        "¡El evento ha comenzado!";
    }
  }, 1000);
});
