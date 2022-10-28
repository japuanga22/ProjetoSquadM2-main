let email = document.getElementById('loginEmail');
let password = document.getElementById('loginSenha');
let formulario = document.getElementById('loginFormulario');

formulario.addEventListener("submit", (e) => {
    if (email.value == "" && password.value == "") {
        alert("Você precisa preencher todos os campos!")
    } else if (validaEmail(email.value) === true &&
        validaSenha(password.value) === true) {
        console.log(email.value);
        console.log(password.value);
       
    }
    else {
        alert("E-mail e/ou senha inválidos. Verifique se há uma conta ao tentar cadastrar o e-mail. Caso esqueceu a senha, clique no botão abaixo.");

    }
    e.preventDefault();
});

//Variavél para a manipulação do campo em vermelho e texto de alerta
// Será utilizado essa parte para fazer o campo ficar vermelho até que seja colocado um valor compatível.
email.addEventListener("keyup", () => {
    if (validaEmail(email.value) !== true) {
        email.style.cssText = 'border-bottom-color: #f44040';
    }
    else {
        email.style.cssText = 'border-bottom-color: #4070f4';
    }
})

//Variavél para a manipulação do campo em vermelho e texto de alerta


password.addEventListener("keyup", () => {
    if (validaSenha(password.value) !== true) {
        password.style.cssText = 'border-bottom-color:#f44040';
    }
    else {
        password.style.cssText = 'border-bottom-color:#4070f4';
    }
})




//Validando email
function validaEmail(email) {
    let emailUsuario = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailUsuario.test(email);
}

//Validando senha
//Senha precisa ter no mínimo 6 caracteres e entre eles ter número e letra e no máximo 16 caracteres.
function validaSenha(password) {
    let senhaUsuario = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return senhaUsuario.test(password);
}
