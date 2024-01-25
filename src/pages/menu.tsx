import React, { useContext } from 'react'
import MenuComponents from '../componets/menu/menuComponents'
import imgMenu1 from '../assets/images/Menu/imgMenu.png'
import imgMenu2 from '../assets/images/Menu/imgMenu2.png'
import fresh_bread from '../assets/images/Menu/fresh_bread.jpg'
import fresh_breakfast from '../assets/images/Menu/fresh_breakfast.jpg'
import glow_cheese from '../assets/images/Menu/glow_cheese.jpg'
import italian_pizza from '../assets/images/Menu/italian_pizza.jpg'
import lettuce_leaf from '../assets/images/Menu/lettuce_leaf.jpg'
import mild_butter from '../assets/images/Menu/mild_butter.jpg'
import mushaom_pizza from '../assets/images/Menu/mushaom_pizza.jpg'
import sllice_beef from '../assets/images/Menu/sllice_beef.jpg'
import { UserContext } from '../context/UserProvider'

const Menu = () => {
  const windowSize=useContext(UserContext)

  return (
    <div>
      <h3 className={`font-great-vibes text-primaryColor text-2xl text-center`}>Elije el alimento</h3>
      <h2 className={`text-5xl  text-center`}><span className='text-primaryColor text-5xl'>Nu</span>estro menú
</h2>
      <div className={`grid gap-4 mx-auto w-10/12 mt-5 ${windowSize && windowSize < 850 ? 'flex justify-center' : 'grid-cols-3'}`}>
        <div className='bg-cover bg-no-repeat bg-center max-h-96 min-h-96 rounded' style={{ backgroundImage: `url(${imgMenu2})`}}>
          <img src={imgMenu1} alt="" className='w-full h-full'/>
        </div>
        <div>
          <MenuComponents
            name='Lettuce Leaf'
            description='Lacus nisi, et ac dapibus velit in consequat.'
            price='12.5$'
            img={lettuce_leaf}
          />
          <MenuComponents
            name='Fresh Breakfast'
            description='Lacus nisi, et ac dapibus velit in consequat.'
            price='12.5$'
            img={fresh_breakfast}
          />
          <MenuComponents
            name='Mild Butter'
            description='Lacus nisi, et ac dapibus velit in consequat.'
            price='14.5$'
            img={mild_butter}
          />
          
          <MenuComponents
            name='Fresh Bread'
            description='Lacus nisi, et ac dapibus velit in consequat.'
            price='12.5$'
            img={fresh_bread}
          />
        </div>
        <div>
          <MenuComponents
            name='Glow Cheese'
            description='Lacus nisi, et ac dapibus velit in consequat.'
            price='12.5$'
            img={glow_cheese}
          />
          <MenuComponents
            name='Italian Pizza'
            description='Lacus nisi, et ac dapibus velit in consequat.'
            price='14.5$'
            img={italian_pizza}
          />
          <MenuComponents
            name='Sllice Beef'
            description='Lacus nisi, et ac dapibus velit in consequat.'
            price='14.5$'
            img={sllice_beef}
          />
          <MenuComponents
            name='Mushaom Pizza'
            description='Lacus nisi, et ac dapibus velit in consequat.'
            price='14.5$'
            img={mushaom_pizza}
          />
        </div>
          
      </div>
    </div>
  )
}

export default Menu
