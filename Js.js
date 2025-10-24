// --- LOGIN FUNCTIONALITY ---
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");
  const errorMsg = document.getElementById("errorMsg");
  const rememberMe = document.getElementById("rememberMe");
  const usernameInput = document.getElementById("username");

  // Check saved username
  if (localStorage.getItem("rememberedUser")) {
    usernameInput.value = localStorage.getItem("rememberedUser");
    rememberMe.checked = true;
  }

  // Toggle show/hide password
  if (togglePassword) {
    togglePassword.addEventListener("click", () => {
      const type = passwordInput.type === "password" ? "text" : "password";
      passwordInput.type = type;
      togglePassword.textContent = type === "password" ? "👁" : "🙈";
    });
  }

  // Handle login
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
      errorMsg.textContent = "";

      if (!username || !password) {
        errorMsg.textContent = "Please fill in all fields.";
        return;
      }

      // Save username if remember me checked
      if (rememberMe.checked) {
        localStorage.setItem("rememberedUser", username);
      } else {
        localStorage.removeItem("rememberedUser");
      }

      // Simulate login success
      localStorage.setItem("loggedUser", username);
      window.location.href = "home.html";
    });
  }

  // --- HOME PAGE LOGIC ---
  const userDisplay = document.getElementById("userName");
  const logoutBtn = document.getElementById("logoutBtn");

  if (userDisplay) {
    const loggedUser = localStorage.getItem("loggedUser");
    if (!loggedUser) {
      window.location.href = "index.html";
    } else {
      userDisplay.textContent = loggedUser;
    }
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("loggedUser");
      window.location.href = "index.html";
    });
  }
});

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

