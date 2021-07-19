let habilidades=document.querySelector('#habilidades');
    skill=document.querySelector('#skills');
    perfil=document.querySelector('#perfil');
    info=document.querySelector('#info');
    contacto=document.querySelector('#contacto');
    contact=document.querySelector('#contact');
    proyectos=document.querySelector('#proyectos');
    projects=document.querySelector('#projects');

skill.addEventListener('click',function () {
    habilidades.scrollIntoView();
});

info.addEventListener('click',function () {
    perfil.scrollIntoView();
});
contact.addEventListener('click',function () {
    contacto.scrollIntoView();
});

projects.addEventListener('click',function () {
    proyectos.scrollIntoView();
});


const mostrarDiv=(div)=>{
    let detalles=div.children[3];
    detalles.classList.remove('emergente');
    detalles.classList.add('mostrar');
}

const deleteClass=(div)=>{
    let detalles=div.children[3];
    detalles.classList.remove('mostrar');
    detalles.classList.add('emergente');
}

