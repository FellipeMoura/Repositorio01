//var video = document.querySelector('.divv');
//var nome = document.querySelector('.li');

//nome.addEventListener('click', function() {
 
function gerar(x){
    var video = document.getElementById(x);
    var div = document.getElementById('video')
    
    if(video.style.display === 'block'){
    video.style.display = 'none';
    div.style.display = 'none';
} else {
    div.style.display = 'block'
    video.style.display = 'block';
}
return x;
}

function fechar(){
    var x = document.getElementById('video')
    var y = document.getElementsByClassName('video')
    y.style.display = 'none';
    x.style.display = 'none';
}