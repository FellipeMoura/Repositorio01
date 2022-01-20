function contar() {
var start = document.getElementById('start')
var exit = document.getElementById('exit')
var pass = document.getElementById('pass')
var res = document.getElementById('res')
let s = Number(start.value)
let e = Number(exit.value)
let p = Number(pass.value)
res.innerHTML = 'Contando: '
if (p==0){
p=1
}
if (start.value.length == 0|| exit.value.length == 0 || pass.value.length == 0) {
window.alert('Preencha todos os campos.')
} else{
if(s<e){ 
while (s <= e) {
   res.innerHTML +=  ` ${s} \u{1f449} `
    s = s+p
}
}
else{
    while(e<= s){
        res.innerHTML+= `${s} \u{1f449} `
        s = s-p
    }
}
res.innerHTML +=`\u{1f3c1}`

}
}