
let email = document.getElementById('recSenhaEmail');
let formulario = document.getElementById('recSenhaFormulario');

// Linha do código para mensagens e validação do campo enquanto e não engatilhar o botão de enviar até de fato ser enviado.

formulario.addEventListener("submit", (e) => {
    if (email.value == "") {
        alert("Você precisa preencher o campo de e-mail!");

    } else if (validaEmail(email.value) === true) {
        console.log(email.value);
        alert("Foi enviado com sucesso a mensagem! Verifique seu e-mail.");
    }
    else {
       alert("Ensira um e-mail válido.");

    }
    e.preventDefault();
});

//Linha do código para aparecer o quadrado vermelho enquanto não obedecem as condições de validação

email.addEventListener("keyup", () => {
    if (validaEmail(email.value) !== true) {
        email.style.cssText = 'border-bottom-color: #f44040';
    }
    else {
        email.style.cssText = 'border-bottom-color: #4070f4';
    }
});

//Validação do e-mail

function validaEmail(email) {
    let emailUsuario = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailUsuario.test(email);
};