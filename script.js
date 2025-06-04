// Dark mode toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  
  // Card flip interaction
  const cards = document.querySelectorAll(".topic-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
  