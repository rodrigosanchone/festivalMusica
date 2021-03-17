document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
})


function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i=1; i<=12; i++){
        const imagen = document.createElement('IMG');
        imagen.src= `build/img/thumb/${i}.webp`;

        //Añadir función de mostrar imagenes
        imagen.onclick = mostrarImagen;
        imagen.dataset.imagenId= i;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }
}

function mostrarImagen(e){
    console.log(e.target.dataset);
    const id = parseInt(e.target.dataset.imagenId);

    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;

    console.log(imagen)

    const overlay = document.createElement('Div')
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    
  //boton cerra la imagen 
  const cerrarImagen = document.createElement('P')
  cerrarImagen.textContent = 'X';
  cerrarImagen.classList.add('btn-cerrar')
  overlay.appendChild(cerrarImagen);



      
   //mostrar en el html 
    const body= document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');


       //cuando se preciona, se cierra la imagen 
       cerrarImagen.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body');
     }
 
     overlay.onclick = function(){
         overlay.remove();
         body.classList.remove('fijar-body');
     }
}