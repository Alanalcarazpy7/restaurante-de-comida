import { useContext } from 'react'
import PorqueElejirnos from '../componets/Elejirnos/porqueElejirnos'
import ImgElejirnos from '../componets/Elejirnos/imgElejirnos'
import { PiHamburgerLight,PiCookieBold,PiWineLight   } from "react-icons/pi";
import ImgFood1 from '../assets/images/ElejirnosImg/food1.jpg'
import ImgFood2 from '../assets/images/ElejirnosImg/food2.jpg'
import { UserContext } from '../context/UserProvider';

const Elejirnos = () => {
  const windowSize=useContext(UserContext)

  return (
    <div className={`flex justify-between items-center w-10/12 m-auto mt-10 `}>
      <div className={`${windowSize && windowSize < 800 ? 'hidden' : 'mr-10'}`}>
        <div className='flex '>
          <img className=' max-w-62 max-h-52' src={ImgFood1} alt="" />
          <div className='flex flex-col-reverse ml-5'>
            <img className='max-w-36 max-h-32' src={ImgFood2} alt="" />
          </div>
        </div>
        <div className='flex mt-5'>
          <img className='max-w-36  mr-5' src={ImgFood1} alt="" />
          <img className='max-w-36 mr-5 max-h-36' src={ImgFood2} alt="" />
          <div className='flex flex-col'>
            <img className='max-w-32 max-h-32 mb-5' src={ImgFood1} alt="" />
            <img className='max-w-32 max-h-32' src={ImgFood2} alt="" />
          </div>
        </div>
      </div>

      <div className={`${windowSize && windowSize < 800 ? 'flex flex-col text-center items-center' : ''}`}>
        <PorqueElejirnos/>
        <div className={`flex flex-wrap  ${windowSize && windowSize < 800 ? 'justify-center' : ''}`}>
          <ImgElejirnos
          icon={<PiHamburgerLight />}
          label='Comida rápida'
          />
          <ImgElejirnos
          icon={<PiCookieBold />}
          label='Almuerzo'
          />
          <ImgElejirnos
          icon={<PiWineLight />}
          label='Cena'
          />
        </div>
        <div className={`flex bg-white rounded border-l-8 border-primaryColor items-center justify-center pt-2 pb-2 ${windowSize && windowSize < 800 ? 'w-64' : ' max-w-72'}`}>
          <h2 className=' text-primaryColor text-4xl mr-5'> <b>30+</b></h2>
          <h4 className='flex flex-col text-black text-2xl'>Años de <b>Experiencia</b></h4>
        </div>
      </div>
    </div>
  )
}

export default Elejirnos
