import React, { useContext } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { MenuMovilContext } from '../botones/menuMovil';
import imagenFondoMenu from '../../assets/images/imgHeader.jpg';

interface TypesProps{
  menuItems:{
    id:number;
    label:string;
  }[];
  onClic:(sectionId: string) => void
}

const MenuMovilLink: React.FC<TypesProps> = ({ menuItems,onClic }) => {
  const { menuActivo, toggleMenu } = useContext(MenuMovilContext);

  const handleClic = (() => {
    toggleMenu();
    console.log('toggleMenu', menuActivo);
  })

  const desplazarse=((e:React.MouseEvent,itemId:number)=>{
    e.preventDefault()
    console.log(itemId)
    toggleMenu();

    setTimeout(() => {
      onClic(itemId.toString());
    }, 50); // Puedes ajustar el tiempo según tus necesidades
  })

  return (
    <div className=''>
      <div className='h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url(${imagenFondoMenu})` }}>
        <div className='bg-black h-full opacity-65'>
          <div className='flex items-center justify-center h-full'>
            <ul className='flex flex-col'>
              {
                menuItems.map((item) =>
                  <a
                    href=""
                    className='hover:text-primaryColor text-center text-2xl mb-6 text-white'
                    onClick={(e)=>desplazarse(e,item.id)} 
                    key={item.id}
                    data-name={item.label}
                  >
                    <li className='my-3'>{item.label}</li>
                  </a>
                )
              }
            </ul>
          </div>
        </div>
      </div>

      <div className='fixed bottom-4 left-4 text-5xl text-white bg-primaryColor rounded-full cursor-pointer' onClick={handleClic}>
        <IoCloseSharp />
      </div>
    </div>
  );
}

export default MenuMovilLink;

