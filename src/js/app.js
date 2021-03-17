document.addEventListener('DOMContentLoaded', function(){
   scrollNav();

   navegacionFija();
});

function navegacionFija(){
    
    const barra = document.querySelector('.header');

    //registrar el Intesection observer
    const obrsever = new IntersectionObserver(function(entries){
     //  console.log(entries[0]);
       if(entries[0].isIntersecting){
           //console.log('Elemento Visible')
           barra.classList.remove('fijo')
       }else{
       // console.log('Elemento  NO Visible')
        barra.classList.add('fijo')
       }
    });

    //elemento a observar
    obrsever.observe(document.querySelector('.video'));
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    console.log(enlaces);

    enlaces.forEach(function(enlace){
        console.log(enlace);
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            console.log(e.target.attributes.href.value);

            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
               behavior: 'smooth' //  behavior: 'smooth' hace un movimiento lento del scroll
            }); 
        })
    });
}