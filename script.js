// Toggle light/dark mode
document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  
  // Flip cards on click (optional for visual effect)
  const cards = document.querySelectorAll(".topic-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
  