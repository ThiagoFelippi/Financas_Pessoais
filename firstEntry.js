const first_entry = document.getElementById('firstEntry')

const id = localStorage.getItem('id')

if (!id) {
    first_entry.classList.add('d-block')
    const send_date = document.getElementById('send_date')
    send_date.addEventListener('click', firstEntry)
}

if (id >= 1) {
    first_entry.classList.add('d-none')
}

function firstEntry(e) {
    e.preventDefault()
    const first_name = document.getElementById('first_name')
    const last_name = document.getElementById('last_name')
    const email = document.getElementById('email')
    setarInfos(first_name.value, last_name.value, email.value)
}

function setarInfos(nome, sobrenome, email) {
    localStorage.setItem('nome', nome)
    localStorage.setItem('sobrenome', sobrenome)
    localStorage.setItem('email', email)
    const title_modal = document.getElementById('title_modal')
    const p_modal = document.getElementById('p_modal')
    const button_modal = document.getElementById('button_modal')


    if (nome && sobrenome && email) {
        first = localStorage.setItem('id', 1)

        title_modal.innerHTML = 'Cadastro realizado com sucesso'
        p_modal.innerHTML = 'Você preencheu todas as informações, agora basta utilizar nossos recursos'
        button_modal.innerHTML = 'Utilizar'

        window.location.reload()
    }
}