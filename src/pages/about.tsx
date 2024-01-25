import React, { useContext } from 'react'
import InfoAbout from '../componets/about/infoAbout'
import { UserContext } from '../context/UserProvider'
import ImgAbout1 from '../assets/images/imgAbout1.jpg';
import ImgAbout2 from '../assets/images/imgAbout2.jpg';
import ImgAbout3 from '../assets/images/imgAbout3.jpg';
import Check from '../assets/svg/check';

const About = () => {
  const windowSize=useContext(UserContext)

  return (
    
    <div className=' w-10/12 m-auto'>
      <div className={`flex mt-5 h-full ${windowSize && windowSize  < 750 ? 'flex-col ' : 'justify-between'}`}>
        <InfoAbout/>
        <div className={`grid grid-rows-2 gap-5 ${windowSize && windowSize  < 750 ?"":""}`}>
          <div className=''>
            <img className={`mx-auto object-cover w-full h-full`} src={ImgAbout1} alt='imagenFood' />
          </div>
          <div className='grid gap-4 grid-cols-2'>
            <div className={` ${windowSize && windowSize  < 750 ?"":""}`}>
              <img className={`mx-auto object-cover w-full h-full`} src={ImgAbout2} alt='imagenFood' />
            </div>
            <div className={`${windowSize && windowSize  < 750 ?"":""}`}>
              <img className={`mx-auto object-cover w-full h-full`} src={ImgAbout3} alt='imagenFood' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
