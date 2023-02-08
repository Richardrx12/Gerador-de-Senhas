let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#";
let novaSenha = "";


// alterando simultaneamente o valor dos caracteres da senha
sizePassword.innerHTML = sliderElement.value;

// this.value pega o valor atual do input range
slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}
// --------

function generatePassword(){
        let pass = '';

        for (let i=0, n = charset.length; i < sliderElement.value; i++){
            pass += charset.charAt(Math.floor(Math.random() * n ));
        }

    // removendo a classe hide para que o conteudo container-password seja exibido
       containerPassword.classList.remove("hide"); 
       password.innerHTML = pass;
       novaSenha = pass;
}

    // copiando a senha quando o botão é clicado
function copyPassword(){
    alert(" Senha copiada com sucesso! ");
    navigator.clipboard.writeText(novaSenha);
}
