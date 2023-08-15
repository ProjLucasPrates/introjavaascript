var nome
var email
var num = 0;
saldo = 1000;
var saque = 0;

function sacar(saque){
    saldo = saldo - saque
    return saldo
}

function depositar(){
    
}

function escrever(quadro){
    info = "Usuário número " + (++num) + "\n";
    info += "Nome: " + nome + "\n";
    info += "Email: " + email + "\n";
    info += "Saldo: " + sacar(saque) + "\n \n";
    quadro.value += info;
}