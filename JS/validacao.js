function valida(){

    var nome = document.getElementById("nome");
    var cpf = document.getElementById("cpf");
    var logradouro = document.getElementById("logradouro");
    var numero = document.getElementById("numero");
    var celular = document.getElementById("celular");

    if(nome.value == ""){
        alert("Favor informar seu nome");
        nome.focus();
        return false;
    };

    if(cpf.value == ""){
        alert("Favor informar seu CPF");
        cpf.focus();
        return false;
    };

    if(logradouro.value == ""){
        alert("Favor informar seu logradouro");
        logradouro.focus();
        return false;
    };

    if(numero.value == ""){
        alert("Favor informar o número");
        numero.focus();
        return false;
    };

    if(celular.value == ""){
        alert("Favor informar seu celular");
        celular.focus();
        return false;
    } else {
        alert("Formulário enviado com sucesso!")
        return true;
    }
    
}
