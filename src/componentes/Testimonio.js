import React from 'react';

function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require('../imagenes/1.jpg')}
        alt='foto de junior'/>
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>JUAN ROLDAN en bogota</p>
          <p className='cargo-testimonio'>Ingenieria de software en WINDOWS</p>
          <p className='texto-testimonio'>¡Hola a todos! Esperamos que les guste el nuevo curso. En la descripción pueden encontrar un enlace al código de los proyectos en GitHub y a freeCodeCamp en Español. Los invitamos a compartir sus comentarios. 👍 ¿Listos para aprender React?</p>
        </div>
    </div>
  );
}
export default Testimonio;