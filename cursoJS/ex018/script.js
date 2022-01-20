
var num = document.getElementById('num')
var list = document.getElementById('lista')
var res = document.getElementById("res")
var arq = []
var maior = 0
var menor = 0
var soma = 0

function isNumero(n){

    if (Number(n) >= 1 && Number(n) <= 100) {
    return true
} else{
    return false
}
}

function inLista(n, l){
if(l.indexOf(Number(n)) != -1){
return true
} else{
    return false
}
}
function add(){
    if(isNumero(num.value) && !inLista(num.value, arq)){
        var n = Number(num.value)
        arq.push(n) // ou arq.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `O numero ${n} foi adicionado`
        list.appendChild(item)

        if (maior < n){
         maior = n 
     }
     if (menor == 0 ||menor > n) {
     menor = n
     }
    soma = soma+n

    } else{
        window.alert('Valor inválido ou já encontrado na lista.')
    
 
}  
num.value = ''
num.focus()
}

function fim(){
if (arq.length != 0) {
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${arq.length} números cadastrados.</p>`
    res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>A soma dos valores = ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores = ${soma/arq.length}.</p>`
    
}else{
window.alert('Adicione números para finalizar')
}
}