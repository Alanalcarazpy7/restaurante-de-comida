import React from 'react'
import TestimonioComponents from '../componets/testimonio/testimonioComponents'
import cliente1 from '../assets/images/Testimonio/cliente1.jpg'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const testimoniosData = [
  {
    num: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
    estrella: 4,
    name: 'John Doe',
    label: 'Web Developer',
    foto: cliente1,
  },
  {
    num: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
    estrella: 5,
    name: 'Jane Smith',
    label: 'Graphic Designer',
    foto: cliente1,
  },
  {
    num: 3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
    estrella: 5,
    name: 'Alamin Hasan',
    label: 'Food Specialist',
    foto: cliente1,
  },
  // Agrega más testimonios según sea necesario
];


const buttonStyle={
  color: 'gray', // Cambia el color de las flechas aquí
  width: '30px', // Ajusta el ancho de las flechas
  background: 'none',
  border: '0px',
}

const properties = {
  prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill={buttonStyle.color}><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
  nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill={buttonStyle.color}><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>,
  duration: 3000
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover', 
  padding:'5rem 0'
};


const Testimonio = () => {
  return (
    <div>
      <h3 className={`font-great-vibes text-primaryColor text-2xl text-center`}>Testimonios</h3>
      <h2 className={`text-5xl mb-5  text-center`}><span className='text-primaryColor text-5xl'>Lo</span> que dicen nuestros clientes</h2>

      <div className="slide-container">
          <Slide >
          {testimoniosData.map((testimonio, index)=> (
            <div key={index}>
              <div style={{ ...divStyle}}>
                <TestimonioComponents
                  num={testimonio.num}
                  description={testimonio.description}
                  estrella={testimonio.estrella}
                  name={testimonio.name}
                  label={testimonio.label}
                  foto={testimonio.foto}
                />
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    </div>
  )
}

export default Testimonio