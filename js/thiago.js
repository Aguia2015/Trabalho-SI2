document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeBtn = document.getElementById("toggleTheme");
  const body = document.body;

  // Carregar tema salvo
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    toggleThemeBtn.textContent = "Modo Escuro";
  } else {
    toggleThemeBtn.textContent = "Modo Claro";
  }

  // Alternar tema ao clicar
  toggleThemeBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
      toggleThemeBtn.textContent = "Modo Escuro";
      localStorage.setItem("theme", "light");
    } else {
      toggleThemeBtn.textContent = "Modo Claro";
      localStorage.setItem("theme", "dark");
    }
  });
});