import React from 'react';

function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className="imagen-soldador"
        src={require('../imagenes/4.jpeg')}
        alt='foto de soldador'
        />
        <h1>JU.RO.S</h1>
      <div>
        <nav>
          <a href="Inicio.html">Inicio</a>
          <a href="Mision.html">Mision</a>
          <a href="Vision.html">Vision</a>
          <a href="Servicios.html">Servicios</a>
          <a href="Noticias.html">Noticias</a>
          <a href="Contacto.html">Contacto</a>
          <div class="animation start-home"></div>
        </nav>
      </div>
      <div>
        <p className="p-parrafo1">
          Ornamentador a domicilio en Bogotá
        </p>
        <p>
          Soldador a domicilio Bogotá, carpintería metálica Bogotá, estructuras metálicas, ventanas, rejas, puertas, ornamentación, emergencias por hurtos a viviendas contamos con ornamentadores especialistas en reparaciones de emergencia en conjuntos, oficinas y empresas.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, qui iste beatae laudantium ratione rem? Tempora neque, quo exercitationem pariatur vel similique modi error natus tempore repellendus nemo aliquam facere.
        </p>
      </div>
    </div>
  );
}
export default Testimonio;