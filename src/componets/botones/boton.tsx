import React from 'react'

interface TypesProps{
  label:string
}

const Boton:React.FC<TypesProps>=({label}) => {
  return (
    <div className=' bg-primaryColor w-20 flex justify-center rounded-3xl p-3 w-32 '>
      <button type="button">{label}</button>
    </div>
  )
}

export default Boton
