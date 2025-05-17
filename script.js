document.addEventListener("DOMContentLoaded", () => {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");
  let isColorChanging = false; // Pour éviter de redémarrer plusieurs fois

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  changeColorBtn.addEventListener("click", () => {
    if (!isColorChanging) {
      isColorChanging = true;
      setInterval(() => {
        const newColor = getRandomColor();
        colorBox.style.backgroundColor = newColor;
      }, 1000); // Change toutes les 1000 ms (1 seconde)
    }
  });
});
