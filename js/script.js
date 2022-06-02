let contador = 0;

const valor = document.querySelector('#valor');
const botones = document.querySelectorAll('.boton')

botones.forEach(boton => {
  boton.addEventListener('click', function(e) {

    const estilos = e.currentTarget.classList;

    if(estilos.contains('disminuir')) {
      contador--;
    }
    else if(estilos.contains('acrecentar')) {
      contador++;
    }
    else {
      contador = 0;
    }
      valor.textContent = contador;

      if(contador == 0) {
        valor.style.color = '#fff';
      }

      if(contador > 0) {
        valor.style.color = '#03bb85';
      }
      if(contador < 0) {
        valor.style.color = '#f80044';

      }
  })
})
