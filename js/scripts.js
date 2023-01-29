const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Verifica se o nome está vazio
    if(nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }
    // Verifica se o e-mail está preenchido e se é valido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu e-mail");
        return;
    }


    // verificar se a senha está preenchida
    if(!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ter no minimo 8 dígitos");
        return;
    }


    // Verificar se a situação de trabalho foi selecionada
    if(jobSelect.value === "") {
        alert("Por favor selecione sua situação de trabalho");
        return;
               
    }

    // Verifica se a mesnsagem está preenchida
    if(messageTextarea.value === ""){
    alert("Por favor escreva a sua mensagem");
    return;
    }
   
    // Se todos os cmapos estiverem corretamente preenchidos, envie o fomr
    form.submit();

});

// Função que valida e-mail
function isEmailValid(email) {

    // cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }

    return false;
}

// Função que valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        // Senha Válida
        return true;

    }

    // Senha inválida
    return false;
}