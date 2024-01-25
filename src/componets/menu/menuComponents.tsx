import React from 'react'

interface TypesProps{
  name:string;
  description:string;
  price:string;
  img:string
}

const MenuComponents:React.FC<TypesProps>= ({name,description,price,img}) => {
  return (
    <div className='flex m-5'>
      <div className='mr-5'>
        <img src={img} alt={img} />
      </div>
      <div>
        <h4 className=' text-lg'><b>{name}</b></h4>
        <h5 className=' text-sm'>{description}</h5>
        <h4 className=' text-primaryColor'><b>{price}</b></h4>
      </div>
    </div>
  )
}

export default MenuComponents
