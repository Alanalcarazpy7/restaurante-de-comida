import React, { useContext } from 'react'
import { UserContext } from '../../context/UserProvider'

const EmailFooter = () => {
  const windowSize=useContext(UserContext)

  return (
    <div className='flex justify-center '>
      <div className={`flex w-10/12 items-center ${windowSize && windowSize  < 750 ?"flex-wrap text-center justify-center ":"justify-between"}`} >
        <div className={`${windowSize && windowSize  < 750 ?"text-center flex flex-col justify-center":""}`}>
          <h2 className={`text-3xl mb-5`}><span className='text-primaryColor text-3xl'>¿Aú</span>n necesitas nuestro apoyo?</h2>
          <h4 className='mb-4'>No espere, haga una cotización inteligente y lógica aquí. Es bastante fácil.</h4>
        </div>
        <div className='flex'>
          <input type="email" name="email" placeholder='Ingresa tu Email' className='p-3 bg-primaryColor placeholder:text-white rounded-l'/>
          <button className='p-3 bg-white text-primaryColor rounded-r'>Suscríbase ahora</button>
        </div>
      </div>
    </div>
  )
}

export default EmailFooter
