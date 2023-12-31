function mostrarSenha() {
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('btn-senha')
    if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye-slash', 'bi-eye')
    }
    else {
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye', 'bi-eye-slash')
    }
}



function mostrarSelecao() {
    var dropDown = document.getElementById('drop')

    dropDown.classList.replace('d-none', 'd-on')
    dropDown.setAttribute('type', 'text')

    if (dropDown.type === 'text') {
        dropDown.classList.replace('d-on', 'd-none')
        dropDown.setAttribute('type', 'off')
    }
}
