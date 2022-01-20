function gerar() {
    var num = document.getElementById("num")
    var tab = document.getElementById('seltab')
    var c = 0
    var x = 0
    var n = Number(num.value)
    if (num.value.length == 0) {
        window.alert('Digite um número.')
    } else {
tab.innerHTML = ''

    while (c<10) {
        c= c+1
        x = (n*c)
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${x}`
        //item.value = 'tab${c}'
        tab.appendChild(item)

    }
    }    
}
