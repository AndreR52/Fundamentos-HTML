let email = document.querySelector('#email')
let nome = document.querySelector('#nome')
let mensagem = document.querySelector('#mensagem')

email.style.width = '95%'
nome.style.width = '95%'
mensagem.style.width = '95%'

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.com') == -1) {
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
    }
    else {
        txtEmail.innerHTML = ''
    }
}

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if(nome.value.length < 4) {
        txtNome.innerHTML = 'Nome deve ter 4 caractéres ou mais'
        txtNome.style.color = 'red'
    }
    else {
        txtNome.innerHTML = ''
    }
}

function enviar(){
    if(email.value == "" || nome.value == "" || mensagem.value == ""){
        alert("Todos os campos devem ser preenchidos!")
        return false
    }
    else{
        alert("Olá " + nome.value + "! Sua mensagem foi enviada com sucesso!")
    }
}
