var t = document.getElementById("todos")
var s = document.getElementById("semana")
var t1 = document.getElementById('table1')
var t2 = document.getElementById('table2')
var t3 = document.getElementById('table3')
var t4 = document.getElementById('table4')
var t5 = document.getElementById('table5')
var p = document.getElementById('proximo')
var a = document.getElementById('anterior')
var prox1 = 1

for(var c = 1;c<25;c++){  //escrever
    var count2 =('dados'+c)
    var day = document.getElementById("lista"+c)
    day.innerHTML = localStorage.getItem(count2)

}


function limpar(x){
    var day = document.getElementById("lista"+x)
    var temp = ('dados'+x)
    localStorage.setItem(temp,'')
    day.innerHTML = ''


}

function incluir(x){
    var Scan = document.getElementById("scan")
    var content = (Scan.value)
    var day = document.getElementById("lista"+x)
    var temp = ('dados'+x)
    var temp2 = (`${content}<br>`)
    day.innerHTML += temp2
    localStorage.setItem(temp,temp2)
    
Scan.value=''
Scan.innerHTML=''
}
function mostrar(){

if (t.style.display == "none"){
    t.style.display="inline"
    s.style.display="none"
    t2.style.display="none"
    t3.style.display="none"
    t4.style.display="none"
    t5.style.display="none"
}else {
        t.style.display ="none"
        s.style.display="inline"
        t1.style.display="inline"
        t2.style.display="inline"
        t3.style.display="inline"
        t4.style.display="inline"
        t5.style.display="inline"
    }
}
function proximo(){ 


  
}
