// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var dtnascimento = sessionStorage.DTNASCIMENTO_USUARIO;


    
    var b_usuario = document.getElementById("b_usuario");
    var b_data_nascimento = document.getElementById("b_data_nascimento");

    

    if ((email != null && nome != null)) {
        b_usuario.innerHTML = nome.substring(0, 1).toUpperCase() + nome.substring(1, nome.length);
        b_data_nascimento.innerHTML = dtnascimento.substring(0, 10);
        

    } else {
        alert('Usuário não identificado! Redirecionando para página de Login...')
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

