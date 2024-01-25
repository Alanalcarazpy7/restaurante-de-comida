import React from 'react'

interface TypesProps{
  icon:React.ReactNode;
  label:string;
  num:string;
}

const ClientsComponets:React.FC<TypesProps> = ({icon,label,num}) => {
  return (
    <div className='flex flex-col m-12'>
      <div className='flex h-20 justify-center items-center text-primaryColor text-7xl rounded'>
        {icon}
      </div>
      <h4 className='text-center mt-2'>{label}</h4>
      <h3 className=' text-2xl'><b>{num}</b></h3>
    </div>
  )
}

export default ClientsComponets
