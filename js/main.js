function login(){
    const login_correto = 'ana'; 
    const senha_correta = 'senha123'; 

    let login_informado = document.getElementById('username').value;
    let senha_informada = document.getElementById('password').value;

    if(login_informado == login_correto && senha_informada == senha_correta){
        window.location.href = 'index.html'
    } else {
        alert('Login ou senha incorretos!');
    }
}

function register()
{
    let username = document.getElementById("username").value;   
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    const user = {
        username: username,
        password: password,
        email: email
    };

    alert(user.username + ", seu cadastro foi realizado com sucesso.");
    window.location.href = "index.html";
}