const targetDate = new Date("2024-12-31T23:59:59").getTime();

// Actualizar el contador cada segundo
const countdownFunction = setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Cálculo de días, horas, minutos y segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar el resultado en los elementos correspondientes
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Si la cuenta regresiva ha terminado, mostrar un mensaje
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "¡Tiempo Agotado!";
  }
}, 1000);

document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;

// Si la cuenta regresiva ha terminado
if (distance < 0) {
  clearInterval(countdownFunction);
  document.getElementById("countdown").innerHTML =
    "<div class='event-started'>¡El evento ha comenzado!</div>";
}

// Función para iniciar la cuenta regresiva
function startCountdown() {
  countdownFunction = setInterval(updateCountdown, 1000);
}

// Función para alternar el estado de reproducción del audio
function togglePlay() {
  const audioPlayer = document.getElementById("audioPlayer");
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}

// Escuchar el evento click en el botón de reproducción
document.getElementById("playButton").addEventListener("click", togglePlay);

// Iniciar la cuenta regresiva al cargar la página
window.onload = startCountdown;

// Función para mover la carátula (esto parece no estar relacionado, pero lo dejo aquí)
function moveCover() {
  const cover = document.getElementById("viny_image");
  cover.classList.toggle("cover-move");
}
