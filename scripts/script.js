document.addEventListener("DOMContentLoaded", function () {
  // Код для пузырьков
  const container = document.getElementById("bubbles-container");
  const bubbleCount = 15;

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    const size = Math.random() * 30 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.top = `${Math.random() * 100}%`;

    bubble.style.animationDelay = `${Math.random() * 6}s`;

    container.appendChild(bubble);
  }

  const buttons = document.querySelectorAll(".nomera_pogination");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.dataset.target;

      const targetContainer = document.getElementById(targetId);
      if (!targetContainer) return;

      document
        .querySelectorAll(".card-section-wrapper")
        .forEach((container) => {
          container.classList.remove("activ");
        });

      targetContainer.classList.add("activ");

      buttons.forEach((btn) => btn.classList.remove("active"));

      this.classList.add("active");

      targetContainer.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
});
