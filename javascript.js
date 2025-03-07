document.addEventListener("DOMContentLoaded", () => {
  const frases = [
    "Your sense of humour",
    "You always listen to me",
    "How comfortable, calm... you make me feel",
    "Your princess treatment",
    "How you make me laugh with your nonsense",
    "How much you love what you do",
    "The beautiful way you make me feel",
    "You really want to fight for us",
    "The security you make me feel",
    "Despite everything, you have remained by my side",
    "Your great and enormous way of being",
    "You always suport me", 
    "You always follow my jokes and never get offended",    
    "The BIG details you have with me",   
    "How generous you are (I'm not talking about money)",
    "With you I can talk about everything, without fear of being judged",
    "The way you care for the people you love",
    "The genuine love we feel",
    "Even if you don't believe it cause of your work, you pay a lot of attention to me",
    "You have always respected me, in every aspect",
    "Your funny jokes, funny for you... Jooke❤️",
    "The aspirations you have, you are not a conformist",
    "How fluid our relationship is",
    "All what you want to do with me as a couple",
    "The connection we have",
    "To sum up, Just the way you are, PERFECT",
  ];

  let indice = 0;
  const totalClicks = frases.length; 
  const gameContainer = document.getElementById("game-container");

  function obtenerPosicionAleatoria() {
      const anchoVentana = window.innerWidth;
      const altoVentana = window.innerHeight;

      const posX = Math.random() * (anchoVentana - 200); // Evita que se salga por la derecha
      const posY = Math.random() * (altoVentana - 50); // Evita que se salga por abajo

      return { x: posX, y: posY };
  }

  function mostrarTexto() {
      if (indice >= totalClicks) {
          window.location.href = "final.html"; // Cambia a la última página
          return;
      }

      // Eliminar textos anteriores
      const textosExistentes = document.querySelectorAll(".texto");
      textosExistentes.forEach(texto => texto.remove());

      // Crear nuevo texto
      const texto = document.createElement("div");
      texto.classList.add("texto");
      texto.innerText = frases[indice];

      // Generar posición aleatoria
      const { x, y } = obtenerPosicionAleatoria();
      texto.style.left = `${x}px`;
      texto.style.top = `${y}px`;

      // Evento para hacer clic y mostrar el siguiente texto
      texto.addEventListener("click", () => {
          texto.remove();
          indice++;
          mostrarTexto();
      });

      gameContainer.appendChild(texto);
  }

  // Muestra el primer texto al cargar
  mostrarTexto();
});

