import React, { useContext } from 'react';
import Navbar from '../componets/header/navbar';
import Search from '../componets/buscador/search';
import SectionHeader from '../componets/header/sectionHeader';
import imagenFondoHeader from '../assets/images/imgHeader.jpg';
import imagenFood from '../assets/images/imgFood.jpg';
import { UserContext } from '../context/UserProvider';
import { BotonMenu } from '../componets/botones/menuMovil';

interface TypesProp{
  onClic:(sectionId: string) => void
  menuItems:string[];
}

const Header:React.FC<TypesProp> = ({onClic,menuItems}) => {
  const windowSize=useContext(UserContext)

  console.log("header: ",windowSize)
  return (
    <div
      className='w-full bg-cover bg-no-repeat bg-center'
      style={{ backgroundImage: `url(${imagenFondoHeader})`, height: '100vh' }}
    >
      <div className='bg-black bg-opacity-80 h-full pt-3'>
        <div className='m-7'>
          <h3 className='flex items-center justify-center text-lg'>
            <span className='text-primaryColor'>Food</span>luck
          </h3>
          <div>
            {windowSize && windowSize < 750 && (
            <BotonMenu/>
          )}
          </div>

          <div
            className={`justify-between items-center ${windowSize && windowSize < 750 ? `hidden` : 'flex'}`}
          >
            <Navbar 
              onClic={onClic}
              menuItems={menuItems.map((item, index) => ({ id: index, label: item }))} 
            />
            <Search />
          </div>
          <div className={`mt-5 items-center justify-center h-full ${windowSize && windowSize  < 750 ? 'flex flex-col' : 'flex justify-between'}`}>
            <SectionHeader/>
            <img className={`w-6/12  ${windowSize && windowSize  < 750 ?"":"ml-20"}`} src={imagenFood} alt='imagenFood' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
