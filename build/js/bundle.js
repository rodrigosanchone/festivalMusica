function navegacionFija(){const e=document.querySelector(".header");new IntersectionObserver((function(t){t[0].isIntersecting?e.classList.remove("fijo"):e.classList.add("fijo")})).observe(document.querySelector(".video"))}function scrollNav(){const e=document.querySelectorAll(".navegacion-principal a");console.log(e),e.forEach((function(e){console.log(e),e.addEventListener("click",(function(e){e.preventDefault(),console.log(e.target.attributes.href.value);document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})}))}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("IMG");n.src=`build/img/thumb/${t}.webp`,n.onclick=mostrarImagen,n.dataset.imagenId=t;const o=document.createElement("LI");o.appendChild(n),e.appendChild(o)}}function mostrarImagen(e){console.log(e.target.dataset);const t=parseInt(e.target.dataset.imagenId),n=document.createElement("IMG");n.src=`build/img/grande/${t}.webp`,console.log(n);const o=document.createElement("Div");o.appendChild(n),o.classList.add("overlay");const c=document.createElement("P");c.textContent="X",c.classList.add("btn-cerrar"),o.appendChild(c);const a=document.querySelector("body");a.appendChild(o),a.classList.add("fijar-body"),c.onclick=function(){o.remove(),a.classList.remove("fijar-body")},o.onclick=function(){o.remove(),a.classList.remove("fijar-body")}}document.addEventListener("DOMContentLoaded",(function(){scrollNav(),navegacionFija()})),document.addEventListener("DOMContentLoaded",(function(){crearGaleria()}));
//# sourceMappingURL=bundle.js.map