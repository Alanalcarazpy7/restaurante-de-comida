import React, { useContext } from 'react'
import imgFood1 from '../../assets/images/categoriaFood/imgCategory1.jpg'
import imgFood2 from '../../assets/images/categoriaFood/imgCategory2.jpg'
import imgFood3 from '../../assets/images/categoriaFood/imgCategory3.jpg'
import imgFood4 from '../../assets/images/categoriaFood/imgCategory4.jpg'
import { UserContext } from '../../context/UserProvider'

const CategoryFood = () => {
  const windowSize=useContext(UserContext)

  return (
    <div className='w-10/12 m-auto'>
      <div className={`flex flex-wrap justify-center ${windowSize && windowSize < 750 ? 'block' : ''}`}>
        <img className='w-1/6 min-w-36 m-5' src={imgFood1} alt="" />
        <img className='w-1/6 min-w-36 m-5' src={imgFood2} alt="" />
        <img className='w-1/6 min-w-36 m-5' src={imgFood3} alt="" />
        <img className='w-1/6 min-w-36 m-5' src={imgFood4} alt="" />
      </div>
    </div>
  )
}

export default CategoryFood
