
//const detalles=document.querySelector('.detalles');


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