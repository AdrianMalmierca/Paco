

document.addEventListener("DOMContentLoaded", () => {
  const frases = [
    "1. You always listen to me",
    "2. Your sense of humour",
    "7. How comfortable, calm... you make me feel",
    "8. You really want to fight for us",
    "9. Your princess treatment",
    "10. The security you make me feel",
    "11. As you have always respected me",
    "3. How you make me laugh with your nonsense",
    "4. Despite everything, you have remained by my side",
    "12. The way you care for the people you love",
    "5. You always suport me",
    "6. How much you love what you do",
    "14. How generous you are (I'm not talking about money)",
    "15. With you I can talk about anything, without fear of being judged",
    "16. The details you have with me",
    "17. The genuine love we feel",
    "18. Even if you don't believe it, you pay a lot of attention to me",
    "19. You have always respected me, in every aspect",
    "20. ",
    "21. ",
    "22. ",
    "23. ",
    "24. ",
    "25. ",
    "26. ",
    "13. Your great and enormous way of being",
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

