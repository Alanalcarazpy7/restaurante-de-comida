import React from 'react'
import { CiPlay1 } from "react-icons/ci";

const ProcesoDocumentacionComponents = () => {
  return (
    <div>
      <div className='mt-10'>
        <h3 className={`font-great-vibes text-primaryColor text-2xl `}>Restaurant Active Process</h3>
        <h1 className={`text-5xl  `}><span className='text-primaryColor text-5xl '>We</span> Document Every Food Bean Process untile it is saved</h1>
        <h5 className={`text-1xl mt-6  `}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ex obcaecati quisquam rerum sunt deserunt soluta deleniti</h5>
        <div className='flex justify-center'>
          <div className='m-10  border-2 border-primaryColor w-20 flex justify-center rounded-3xl p-3 w-32'>
            <button type="button">See More</button>
          </div>
          <div className='flex items-center '>
            <div className=' bg-primaryColor p-2 rounded-full text-2xl cursor-pointer'>
              <CiPlay1 />
            </div>
            <h4 className='ml-2'>Play Video</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProcesoDocumentacionComponents
