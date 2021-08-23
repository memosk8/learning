function mostrar_scroll_tit(){
    var tit = document.getElementById('tit');
    
    let scrollTop = document.documentElement.scrollTop;
    let altura_tit = tit.offsetTop;
    if(altura_tit < scrollTop){
        tit.style.left = 0;
    }
}

function mostrar_scroll_img(){
    var img = document.getElementById('img');
    var tapa = document.getElementById('tapa_img');
    let scrollTop = document.documentElement.scrollTop;
    let altura_img = img.offsetTop;
    if(altura_img +150 < scrollTop){
        img.style.right = 0;
        tapa.style.right = '100%';
    }
}

function mostrar_scroll_parrafo(){
    var parrafo = document.getElementById('parrafo');
    let scrollTop = document.documentElement.scrollTop;
    let altura_parrafo = parrafo.offsetTop;
    if(altura_parrafo + 300 < scrollTop){
        parrafo.style.left = 0;
    }
}
/*Inicia uno*/
function mostrar_scroll_tit1(){
    var tit1 = document.getElementById('tit1');
    
    let scrollTop = document.documentElement.scrollTop;
    let altura_tit1 = tit.offsetTop;
    if(altura_tit1 + 400 < scrollTop){
        tit1.style.left = 0;
    }
}

function mostrar_scroll_img1(){
    var img1 = document.getElementById('img1');
    var tapa1 = document.getElementById('tapa_img1');
    let scrollTop = document.documentElement.scrollTop;
    let altura_img1 = img1.offsetTop;
    if(altura_img1 + 550 < scrollTop){
        img1.style.right = 0;
        tapa1.style.right = '100%';
    }
}

function mostrar_scroll_parrafo1(){
    var parrafo1 = document.getElementById('parrafo1');
    let scrollTop = document.documentElement.scrollTop;
    let altura_parrafo1 = parrafo1.offsetTop;
    if(altura_parrafo1 + 700 < scrollTop){
        parrafo1.style.left = 0;
    }
} 
/*Aquí termina uno*/

/*Inicia dos*/
function mostrar_scroll_tit2(){
    var tit2 = document.getElementById('tit2');
    
    let scrollTop = document.documentElement.scrollTop;
    let altura_tit2 = tit.offsetTop;
    if(altura_tit2 + 1200  < scrollTop){
        tit2.style.left = 0;
    }
}

function mostrar_scroll_img2(){
    var img2 = document.getElementById('img2');
    var tapa2 = document.getElementById('tapa_img2');
    let scrollTop = document.documentElement.scrollTop;
    let altura_img2 = img2.offsetTop;
    if(altura_img2 + 1350 < scrollTop){
        img2.style.right = 0;
        tapa2.style.right = '100%';
    }
}

function mostrar_scroll_parrafo2(){
    var parrafo2 = document.getElementById('parrafo2');
    let scrollTop = document.documentElement.scrollTop;
    let altura_parrafo2 = parrafo2.offsetTop;
    if(altura_parrafo2 + 1400 < scrollTop){
        parrafo2.style.left = 0;
    }
} 
/*Termina dos*/

window.addEventListener('scroll', mostrar_scroll_tit);
window.addEventListener('scroll', mostrar_scroll_img);
window.addEventListener('scroll', mostrar_scroll_parrafo);

window.addEventListener('scroll', mostrar_scroll_tit1);
window.addEventListener('scroll', mostrar_scroll_img1);
window.addEventListener('scroll', mostrar_scroll_parrafo1);

window.addEventListener('scroll', mostrar_scroll_tit2);
window.addEventListener('scroll', mostrar_scroll_img2);
window.addEventListener('scroll', mostrar_scroll_parrafo2);