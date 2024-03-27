const numero_homens = document.getElementById('numero_homens');
const numero_mulheres = document.getElementById('numero_mulheres');
const numero_criancas = document.getElementById('numero_criancas');
const numero_adultos = document.getElementById('numero_adultos');

let contador_homens = 0;
let contador_mulheres = 0;
let contador_criancas = 0;
let contador_adultos = 0;

numero_homens.innerHTML = contador_homens;
numero_mulheres.innerHTML = contador_mulheres;
numero_criancas.innerHTML = contador_criancas;
numero_adultos.innerHTML = contador_adultos;


function iterar(id){
    
    if(id === 'numero_homens'){
    
        contador_homens++;

        numero_homens.innerHTML = contador_homens;
    
       } else if(id === 'numero_mulheres') {

        contador_mulheres++;

        numero_mulheres.innerHTML = contador_mulheres;
       } else if(id === 'numero_criancas') {

        contador_criancas++;

        numero_criancas.innerHTML = contador_criancas;
       } else if(id === 'numero_adultos') {

        contador_adultos++;

        numero_adultos.innerHTML = contador_adultos;
       }
    
}

function desiterar(id){
    
   if(id === 'numero_homens'){
    
    if(contador_homens >= 1){
        contador_homens--;
        numero_homens.innerHTML = contador_homens;
    };

   } else if (id === 'numero_mulheres'){
    if(contador_mulheres >= 1){
        contador_mulheres--;
        numero_mulheres.innerHTML = contador_mulheres;
    }
   } else if (id === 'numero_criancas'){
    if(contador_criancas >= 1){
        contador_criancas--;
        numero_criancas.innerHTML = contador_criancas;
    }
   } else if (id === 'numero_adultos'){
    if(contador_adultos >= 1){
        contador_adultos--;
        numero_adultos.innerHTML = contador_adultos;
    }
   }

    
}


