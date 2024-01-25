import React, { useContext } from 'react'
import ClientsComponets from '../componets/clientsSection/clientsComponets'
import { SiCodechef } from "react-icons/si";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import { LiaPizzaSliceSolid } from "react-icons/lia";
import image from "../assets/images/ClientsImg/imgfood.jpg"
import { UserContext } from '../context/UserProvider';

const Clients = () => {
  const windowSize=useContext(UserContext)

  return (
    <div className='w-full bg-cover bg-no-repeat bg-center mt-10 mb-10'
    style={{ backgroundImage: `url(${image})`}}>
      <div className='bg-black bg-opacity-80 h-full pt-3 flex justify-center'>
        <div className={`flex flex-wrap justify-center items-center text-center `}>
          <ClientsComponets
          icon={<SiCodechef />}
          label={'Professional Chefs'}
          num={"420"}
          />
          <ClientsComponets
          icon={<IoFastFoodOutline />}
          label={'Articulos de Comida'}
          num={"320"}
          />
          <ClientsComponets
          icon={<GiKnifeFork />}
          label={'Años de Experiencia'}
          num={"30+"}
          />
          <ClientsComponets
          icon={<LiaPizzaSliceSolid />}
          label={'Clientes Felices'}
          num={"220"}
          />
        </div>
      </div>
    </div>
  )
}

export default Clients
