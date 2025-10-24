// Seleciona os elementos principais da tela de login
const formLogin = document.querySelector('#form-login');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');
const btnMostrarSenha = document.querySelector('#mostrar-senha');
const chkLembrar = document.querySelector('#lembrar');

// ----------------------------------------------------------
// Função: Mostrar ou ocultar a senha
// ----------------------------------------------------------
if (btnMostrarSenha) {
  btnMostrarSenha.addEventListener('click', () => {
    const tipo = inputSenha.getAttribute('type');
    if (tipo === 'password') {
      inputSenha.setAttribute('type', 'text');
      btnMostrarSenha.textContent = 'Ocultar';
    } else {
      inputSenha.setAttribute('type', 'password');
      btnMostrarSenha.textContent = 'Mostrar';
    }
  });
}

// ----------------------------------------------------------
// Função: Carregar email salvo no localStorage (lembrar-me)
// ----------------------------------------------------------
if (chkLembrar && inputEmail) {
  const emailSalvo = localStorage.getItem('emailLembrado');
  if (emailSalvo) {
    inputEmail.value = emailSalvo;
    chkLembrar.checked = true;
  }
}

// ----------------------------------------------------------
// Função: Validação simples do formulário de login
// ----------------------------------------------------------
if (formLogin) {
  formLogin.addEventListener('submit', (evento) => {
    evento.preventDefault(); // impede o envio padrão do formulário

    const email = inputEmail.value.trim();
    const senha = inputSenha.value.trim();

    // Verifica os campos
    if (email === '' || senha === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Validação simples de formato de email
    if (!email.includes('@') || !email.includes('.')) {
      alert('Digite um email válido.');
      return;
    }

    // Simula o login
    if (email === 'usuario@teste.com' && senha === '123456') {
      // Se o usuário marcou "Lembrar-me"
      if (chkLembrar.checked) {
        localStorage.setItem('emailLembrado', email);
      } else {
        localStorage.removeItem('emailLembrado');
      }

      // Salva o estado de login e redireciona
      localStorage.setItem('usuarioLogado', email);
      window.location.href = 'home.html';
    } else {
      alert('Email ou senha incorretos!');
    }
  });
}

// ----------------------------------------------------------
// Função: Verificar login na página home
// ----------------------------------------------------------
if (window.location.pathname.includes('home.html')) {
  const usuario = localStorage.getItem('usuarioLogado');
  const saudacao = document.querySelector('#saudacao');
  const btnSair = document.querySelector('#btn-sair');

  // Se não estiver logado, volta para o login
  if (!usuario) {
    window.location.href = 'index.html';
  } else {
    if (saudacao) {
      saudacao.textContent = `Bem-vindo(a), ${usuario}!`;
    }
  }

  // --------------------------------------------------------
  // Função: Sair da conta
  // --------------------------------------------------------
  if (btnSair) {
    btnSair.addEventListener('click', () => {
      localStorage.removeItem('usuarioLogado');
      window.location.href = 'index.html';
    });
  }
}
