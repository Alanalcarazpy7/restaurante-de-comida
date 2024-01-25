import React, { useContext } from 'react'
import Boton from '../../componets/botones/boton';
import { UserContext } from '../../context/UserProvider';
import Check from '../../assets/svg/check';

const InfoAbout= () => {
  const windowSize=useContext(UserContext)

  return (
    <div>
      <div className={`${windowSize && windowSize < 750 ? 'mx-auto' : 'mr-20'}`}>
        <h3 className={`font-great-vibes text-primaryColor text-5xl ${windowSize && windowSize < 750 ? 'text-center ' : ''}`}>Sobre Nosotros</h3>
        <h1 className={`text-5xl  ${windowSize && windowSize < 750 ? 'text-center ' : ''}`}><span className='text-primaryColor text-5xl'>Cre</span>amos el mejor producto alimenticio</h1>
        <h5 className={`text-1xl mt-6  ${windowSize && windowSize < 750 ? 'text-center ' : ''}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ut adipisci quibusdam illo dignissimos exercitationem? Quis vitae repellat itaque autem aut qui dignissimos, nemo sint nulla non impedit quos. Nesciunt.</h5>
        <ul className='mt-3'>
          <li className='flex'><Check/>Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
          <li className='flex'><Check/>Quisque diam pellentesque bibendum non dui volutpat fringilla</li>
          <li className='flex'><Check/>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        </ul>
        <div className={`m-5 ml-0 flex ${windowSize && windowSize < 750 ? 'justify-center' : ''}`}>
          <Boton
          label='Leer Mas'
          />
        </div>
      
      </div>
    </div>
  )
}

export default InfoAbout
