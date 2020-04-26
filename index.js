const subtit_cadastrar = document.getElementById('subtit_cadastrar')
const subtit_verificar = document.getElementById('subtit_verificar')

const nome = localStorage.getItem('nome')
if (subtit_cadastrar) {
    subtit_cadastrar.innerHTML = `Olá, ${nome}! Aqui você cadastrar suas depesas`
} else {
    subtit_verificar.innerHTML = `Olá, ${nome}! Aqui você verifica suas depesas`
}

const button_despesa = document.getElementsByClassName('button_despesa')[0]
button_despesa.addEventListener('click', pegarDados)

function pegarDados(e) {
    e.preventDefault()
    const nome_despesa = document.getElementsByClassName('nome_despesa')[0]
    const dia_despesa = document.getElementsByClassName('dia_despesa')[0]
    const mes_despesa = document.getElementsByClassName('mes_despesa')[0]
    const tipo_despesa = document.getElementsByClassName('tipo_despesa')[0]
    const valor_despesa = document.getElementsByClassName('valor_despesa')[0]

    formatToLocalStorage(nome_despesa.value, dia_despesa.value, mes_despesa.value, tipo_despesa.value, valor_despesa.value)

}

function formatToLocalStorage(nome, dia, mes, tipo, valor) {
    dia = Number(dia)
    mes = Number(mes)
    mes++
    tipo = Number(tipo)
    const tipos = ['Alimentação', 'Transporte', 'Saúde', 'Educação', 'Lazer', 'Contas']
    tipo = tipos[tipo]
    addLocalStorage(nome, dia, mes, tipo, valor)
}