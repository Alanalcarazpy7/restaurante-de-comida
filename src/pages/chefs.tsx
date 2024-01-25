import React from 'react'
import ChefComponents from '../componets/chef/chefComponents'
import Chief_chef from '../assets/images/Chefs/Chief_chef.jpg'
import Assistant_chef from '../assets/images/Chefs/Assistant_chef.jpg'
import Advertising_chef from '../assets/images/Chefs/Advertising_chef.jpg'
import Chef from '../assets/images/Chefs/Chef.jpg'
import Boton from '../componets/botones/boton'


const Chefs = () => {
  return (
    <div className='flex flex-col justify-center items-center m-10'>
      <h3 className={`font-great-vibes text-primaryColor text-2xl text-center`}>Chefs</h3>
      <h2 className={`text-5xl mb-5  text-center`}><span className='text-primaryColor text-5xl'>Con</span>ozca a nuestro chef</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        <ChefComponents
          img={Chief_chef}
          nombre='D.Estwood'
          titulo='Chief Chef'
        />
        <ChefComponents
          img={Assistant_chef}
          nombre='D.Scoriesh'
          titulo='Assistant Chef'
        />
        <ChefComponents
          img={Advertising_chef}
          nombre='M.William'
          titulo='Advertising Chef'
        />
        <ChefComponents
          img={Chef}
          nombre='W.Readfroad'
          titulo='Chef'
        />
      </div>
      <div className='m-10 border-2 border-primaryColor w-20 flex justify-center rounded-3xl p-3 w-32'>
        <button type="button">See More</button>
      </div>
    </div>
  )
}

export default Chefs
