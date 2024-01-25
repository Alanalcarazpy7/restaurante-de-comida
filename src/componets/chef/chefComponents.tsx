import React from 'react'

interface TypesProp{
  img:string;
  nombre:string;
  titulo:string;
}

const ChefComponents:React.FC<TypesProp> = ({img,nombre,titulo}) => {
  return (
    <div>

    
    <div className='relative'>
      <img src={img} alt="" />
        <div className='absolute bottom-0 flex flex-col justify-end'>
          <div className='bg-white p-2 pr-14'>
            <h3 className='text-black text-lg'><b>{nombre}</b></h3>
            <h4 className='text-black'>{titulo}</h4>
          </div>
        </div>
    </div>
    </div>
  )
}

export default ChefComponents
