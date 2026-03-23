import "./style.css";

const form = document.getElementById("loginForm");

if (form) {
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");

  const emailError = document.getElementById("emailError");
  const senhaError = document.getElementById("senhaError");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let valido = true;

    emailError.textContent = "";
    emailError.style.display = "none";
    email.classList.remove("input-error");

    senhaError.textContent = "";
    senhaError.style.display = "none";
    senha.classList.remove("input-error");

    if (email.value.trim() === "") {
      emailError.textContent = "O Campo de email é obrigatório";
      emailError.style.display = "block";
      email.classList.add("input-error");
      valido = false;
    }


    if (senha.value.trim() === "") {
      senhaError.textContent = "O Campo de senha é obrigatório";
      senhaError.style.display = "block";
      senha.classList.add("input-error");
      valido = false;
    }

    if (valido) {
      window.location.href = "./index.html";
    }
  });

  email.addEventListener("input", () => {
    if (email.value.trim() !== "") {
      emailError.textContent = "";
      emailError.style.display = "none";
      email.classList.remove("input-error");
    }
  });

  senha.addEventListener("input", () => {
    if (senha.value.trim() !== "") {
      senhaError.textContent = "";
      senhaError.style.display = "none";
      senha.classList.remove("input-error");
    }
  });
}
