import { useContext } from 'react'
import { FaFacebookF,FaTwitter,FaInstagram,FaYoutube,FaPinterest } from "react-icons/fa";
import { UserContext } from '../../context/UserProvider';

const CopyrightComponents = () => {
  const windowSize=useContext(UserContext)

  return (
    <div className='flex  justify-center'>
      <div className={`flex flex-wrap items-center w-10/12 ${windowSize && windowSize < 769 ? 'justify-center ' : 'justify-between'}`}>
        <h4>Copyright © 2022 by Ayeman. All Rights Reserved.</h4>
        <div className='flex '>
          <div className=' mr-4 mt-2 p-2 bg-white text-gray-700'><FaFacebookF /></div>
          <div className=' mr-4 mt-2 p-2 bg-white text-gray-700'><FaTwitter /></div>
          <div className=' mr-4 mt-2 p-2 bg-white text-gray-700'><FaInstagram /></div>
          <div className=' mr-4 mt-2 p-2 bg-white text-gray-700'><FaYoutube /></div>
          <div className=' mr-4 mt-2 p-2 bg-white text-gray-700'><FaPinterest /></div>
        </div>
      </div>
    </div>
  )
}

export default CopyrightComponents
