function validarUsuario () {

    
    var nome = formulario.usuario
    if(nome.value == "cloud" || nome.value == "kiki" || nome.value == "lx2018") {
        alert('Nome de usuario invalido');
        nome.focus();
    } else
        {alert('Usuario cadastrado com sucesso')}
}

