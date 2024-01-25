import React from 'react'
import { BsStopwatch } from "react-icons/bs";

const About = () => {
  return (
    <div className=''>
      <h3 className=' text-lg'><b>About Us.</b></h3>
      <h5 className='mt-3'>Corporate clients and leisure travelers has been relying on Groundlink for dependab safe, and professional chauffeured car service in major cities across World.</h5>
      <div className='flex mt-4'>
        <div className=' bg-primaryColor rounded text-4xl flex justify-center items-center w-20 h-20'>
          <BsStopwatch />
        </div>
        <div className='ml-4'>
          <h4>Horario de apertura</h4>
          <h5>Lun - Sáb(8.00 - 6.00)</h5>
          <h5>Domingo - Cerrado</h5>
        </div>
      </div>
    </div>
  )
}

export default About
