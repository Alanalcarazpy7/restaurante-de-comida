import React from 'react'

interface TypesProps{
  icon:React.ReactNode;
  label:string;
}

const ImgElejirnos:React.FC<TypesProps> = ({icon,label}) => {
  return (
    <div className=' w-20  flex flex-col m-3'>
      <div className='flex h-20 justify-center items-center bg-primaryColor text-6xl rounded'>
        {icon}
      </div>
      <h4 className='text-center mt-2'>{label}</h4>
    </div>
  )
}

export default ImgElejirnos
