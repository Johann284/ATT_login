var login = false; //define por padrão inpossível a troca de tela.


function adquirirDados(){ //adquirindo dados digitados
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;
}



// identificando valores de login
function Usuario(nome, senha) { 
    this.nome =  nome,
    this.senha = senha
}

const usuario1 = new Usuario("johann","senha123");

var Usuarios = [usuario1];

function checkPassword(senha){
    for (let i = 0; i < Usuario.length; i++) {
        if (senha = Usuarios[i].senha) {
            return true;
        } 
    }
    return false;
}

function checkUsuario(nome){
    for (let i = 0; i < Usuario.length; i++) {
        if (senha = Usuarios[i].nome) {
            return true;
        } 
    }
    return false;
}


// caso o usuario for real ele permite a troca de tela
function entrar(){
    adquirirDados();
    if (checkPassword(senha) == false) {
        return false;
    }
    if (checkUsuario(nome) == false) {
        return false;
    }
    window.location.href = "tela_oi.html";
}