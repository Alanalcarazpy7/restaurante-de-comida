import React, { useContext } from 'react'
import { UserContext } from '../../context/UserProvider'

interface TypesProps{
  label:string,
  fecha:string,
  imagen:string
}

const PostRecientes:React.FC<TypesProps> = ({label,fecha,imagen}) => {
  const windowSize=useContext(UserContext)

  return (
    <div>
      <div className={`flex mb-4 ${windowSize && windowSize < 426 ? 'justify-center ' : ''}`}>
        <img src={imagen} alt="" className='w-20 h-20'/>
        <div className='ml-4'>
          <h5 className=' text-gray-400'>{fecha}</h5>
          <h4>{label}</h4>
        </div>
      </div>
    </div>
  )
}

export default PostRecientes
