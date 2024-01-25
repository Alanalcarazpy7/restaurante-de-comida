import React, { ReactNode, useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface TypesProp {
  num: number;
  description: string;
  estrella: number;
  name: string;
  label: string;
  foto: string;
}

const TestimonioComponents: React.FC<TypesProp> = ({ num, description, estrella, name, label, foto }) => {
  const maxStars = 5; // Cantidad máxima de estrellas

  const [starArray, setStarArray] = useState(Array(maxStars).fill(null));

  // Coloca estrellas grises según la diferencia entre la cantidad máxima y la actual
  for (let i = estrella; i < maxStars; i++) {
    starArray[i] = 'gray';
  }

  return (
    <div className='max-w-2xl w-7/12 m-auto relative'>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <img className='rounded-full' src={foto} alt='' />
        </div>
      </div>
      <div className='bg-white text-center pt-20'>
        <div className='text-primaryColor text-3xl'>{num}</div>
        <div className='text-black'>{description}</div>
        <div className='flex justify-center mt-5'>
          {starArray.map((color, index) => (
            <div key={index} className='text-primaryColor'>
              <FaStar style={{ color: color }} />
            </div>
          ))}
        </div>
        <div className='text-black text-2xl mt-3'>
          <b>{name}</b>
        </div>
        <div className='text-black mt-2 pb-5'>{label}</div>
      </div>
    </div>
  );
};

export default TestimonioComponents;
