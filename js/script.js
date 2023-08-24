verificarCampos(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(nome == "" || nome == null) {
        let small = document.getElementById("email");
        small.innerHTNL = "Campo obrigatório!";
        small.style.color = "red";
    }else if(!checkEmail(email)){
        small.innerHTML="E-mail inválido!"
        small.style.color = "red";
    }else{
        small.innerHTML = "Campos corretos!";
        small.style.color = "green";
    }

    if(password == "" || password == null){
        small.innerHTNL = "Campo obrigatório!";
        small.style.color = "red";
    }else{
        small.innerHTNL = "Campos corretos!";
        small.style.color = "green";
    }
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}