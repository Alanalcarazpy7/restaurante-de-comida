import React from 'react'
import { BiLike } from "react-icons/bi";
import { RiMessage2Line } from "react-icons/ri";
import { FiShare2 } from "react-icons/fi";
import food1 from '../../assets/images/BlogPostImg/food1.jpg'

interface TypesProps{
  imagen:string;
  fecha:string;
  descripcion:string;
}

const BlogPostComponents:React.FC<TypesProps> = ({imagen,fecha,descripcion}) => {
  return (
    <div className='max-w-xs border-2'>
      <div className=''>
        <img src={imagen} alt="" className='w-full' />
        <div className='p-5'>
          <h5 className='mb-3 text-primaryColor text-xs'>{fecha}</h5>
          <h3 className='mb-4'><b>{descripcion}</b></h3>
          <div className='flex justify-between '>
            <h5 className=' text-sm'>Leer Mas</h5>
            <div className='flex'>
              <div className='mr-2'><BiLike /></div>
              <div className='mr-2 text-primaryColor'><RiMessage2Line /></div>
              <div className='mr-2'><FiShare2 /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPostComponents
