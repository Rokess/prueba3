// para la imagen de la mosca
let mosca_juego = document.getElementById("mosca_juego");
let mosca_juego_grande = document.getElementById("mosca_juego_grande");
let mosca_juego_mediana = document.getElementById("mosca_juego_mediana");
let mosca_juego_peque = document.getElementById("mosca_juego_peque");
let fondo_juego = document.getElementById("fondo_juego");
let marcador = document.getElementById("marcador");
let jugar = document.getElementById("jugar");
let contadorcent = document.getElementById("contadorcent");
let contadorseg = document.getElementById("contadorseg");

let imagenes= document.querySelectorAll(".caja-moscas");
let fondos= document.querySelectorAll(".caja-fondos")

fondo_juego.setAttribute("position","relative")
mosca_juego.addEventListener("click",(event)=>{
    var x = Math.floor(Math.random() * fondo_juego.offsetWidth);
    var y = Math.floor(Math.random() * fondo_juego.offsetHeight);
    if( x > fondo_juego.offsetWidth-100) x-=100;
    if( y > (fondo_juego.offsetHeight-100)) y-=200;
    mosca_juego=document.getElementById("mosca_juego").style.left=x+"px";
    mosca_juego=document.getElementById("mosca_juego").style.top=y+"px";
})
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("click", (event)=>{
        mosca_juego.src = event.target.src;
        mosca_juego_grande.src=event.target.src;
        mosca_juego_mediana.src=event.target.src;
        mosca_juego_peque.src=event.target.src;
    });
}

for (let i = 0; i < fondos.length; i++) {
    fondos[i].addEventListener("click", (event)=>{
        fondo_juego.style.backgroundImage = "url("+event.target.src+")";
        console.log(fondo_juego.style.backgroundImage);
    });
}

mosca_juego_peque.addEventListener("click", (event)=>{
    if(event.target.tagName== "IMG"){
        mosca_juego.className = event.target.className;
    }
})
mosca_juego_mediana.addEventListener("click", (event)=>{
    if(event.target.tagName== "IMG"){
        mosca_juego.className = event.target.className;
    }
})
mosca_juego_grande.addEventListener("click", (event)=>{
    if(event.target.tagName== "IMG"){
        mosca_juego.className = event.target.className;
    }
})
//holaaaa
