import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '/logo-icon.png';


const Inicio = () => {
  const images = [
    'https://jesusmanuelpadilla.s3.us-east-2.amazonaws.com/imageneslumina/Carrusel/1.jpg',
    'https://jesusmanuelpadilla.s3.us-east-2.amazonaws.com/imageneslumina/Carrusel/2.jpg',
    'https://jesusmanuelpadilla.s3.us-east-2.amazonaws.com/imageneslumina/Carrusel/3.jpg',
    'https://jesusmanuelpadilla.s3.us-east-2.amazonaws.com/imageneslumina/Carrusel/4.jpg',
    'https://jesusmanuelpadilla.s3.us-east-2.amazonaws.com/imageneslumina/Carrusel/5.jpg',
    'https://jesusmanuelpadilla.s3.us-east-2.amazonaws.com/imageneslumina/Carrusel/6.jpg',
    'https://jesusmanuelpadilla.s3.us-east-2.amazonaws.com/imageneslumina/Carrusel/7.jpg',
    'https://jesusmanuelpadilla.s3.us-east-2.amazonaws.com/imageneslumina/Carrusel/8.jpg',
    'https://jesusmanuelpadilla.s3.us-east-2.amazonaws.com/imageneslumina/Carrusel/9.jpg',
    'https://jesusmanuelpadilla.s3.us-east-2.amazonaws.com/imageneslumina/Carrusel/10.jpg',
    
  ];

  const settings = {
    dots: true, // Muestra los indicadores de puntos
    arrows: true, // Muestra los botones de "Anterior" y "Siguiente"
    infinite: true,
    speed: 500,
    slidesToShow:2,
    slidesToScroll: 1,
    
  };

  
  return (
    <div className='main'>
      <div className='Information'>
        <img src={logo} alt="" width={400} height={300}/>

        <p>En LUMINA PHOTOFILM, estamos dedicados a capturar momentos a través de la magia de la fotografia y videografia.
        Somos un equipo apasionado de personas dedicados a eventos sociales, asi como a la creación de retratos y fotografia dentro de nuestro estudio fotografico </p>
        <button class="btn btn-outline-light" >Agendar</button>
      </div>
      <h3>Trabajos recientes</h3>
        <div className="carousel-container">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
          
        </div>
     
    </div>
  );
};

export default Inicio;
