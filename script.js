document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("bubbles-container");
  const bubbleCount = 15;

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Случайные размеры
    const size = Math.random() * 30 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Случайное начальное положение
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.top = `${Math.random() * 100}%`;

    // Случайная задержка для анимации
    bubble.style.animationDelay = `${Math.random() * 6}s`;

    container.appendChild(bubble);
  }
});
