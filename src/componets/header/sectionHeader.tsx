import React, { useContext } from 'react'
import Boton from '../botones/boton'
import { UserContext } from '../../context/UserProvider'


const SectionHeader= () => {
  const windowSize=useContext(UserContext)

  return (
    <div className=''>
      <h3 className={`font-great-vibes text-primaryColor text-5xl ${windowSize && windowSize < 750 ? 'text-center ' : ''}`}>Es rápido y divertido!</h3>
      <h1 className={`text-5xl  ${windowSize && windowSize < 750 ? 'text-center ' : ''}`}><span className='text-primaryColor text-7xl'>El</span> arte de la Comida Rápida y de Calidad</h1>
      <h5 className={`text-1xl mt-6  ${windowSize && windowSize < 750 ? 'text-center ' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ex obcaecati quisquam rerum sunt deserunt soluta deleniti</h5>
      <div className={`m-5 ml-0 flex ${windowSize && windowSize < 750 ? 'justify-center' : ''}`}>
        <Boton
        label='Ver Menu'
        />
      </div>
      
    </div>
  )
}

export default SectionHeader
