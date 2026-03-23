const form = document.getElementById("loginForm");

if (form) {
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");

  const emailError = document.getElementById("emailError");
  const senhaError = document.getElementById("senhaError");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // NÃO recarrega a página

    let valido = true;

    // limpa mensagens
    emailError.textContent = "";
    senhaError.textContent = "";

    // valida email
    if (email.value.trim() === "") {
      emailError.textContent = "O Campo de email é obrigatório";
      valido = false;
    }

    // valida senha
    if (senha.value.trim() === "") {
      senhaError.textContent = "O Campo de senha é obrigatório";
      valido = false;
    }

    // se tudo estiver ok
    if (valido) {
      window.location.href = "/index.html";
    }
  });

  // remove erro ao digitar
  email.addEventListener("input", () => {
    if (email.value.trim() !== "") {
      emailError.textContent = "";
    }
  });

  senha.addEventListener("input", () => {
    if (senha.value.trim() !== "") {
      senhaError.textContent = "";
    }
  });
}