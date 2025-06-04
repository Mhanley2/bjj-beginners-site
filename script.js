const techniques = [
    "Hip Escape (Shrimping)",
    "Bridge and Roll Escape",
    "Closed Guard",
    "Scissor Sweep",
    "Rear Naked Choke",
  ];
  
  document.getElementById("techButton").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * techniques.length);
    const technique = techniques[randomIndex];
    document.getElementById("techniqueDisplay").textContent = `Try: ${technique}`;
  });
  