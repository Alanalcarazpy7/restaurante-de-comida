import React, { ReactNode, createContext, useContext, useState } from 'react';
import { IoMenu } from 'react-icons/io5';

// Crear contexto para el menú móvil
export const MenuMovilContext = createContext<any>({ menuActivo: false, toggleMenu: () => {} });

const MenuMovilProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [menuActivo, setMenuActivo] = useState(false);

  const toggleMenu = () => {
    setMenuActivo((prevMenuActivo) => !prevMenuActivo);
  };

  return (
    <MenuMovilContext.Provider value={{ menuActivo, toggleMenu }}>
      {children}
    </MenuMovilContext.Provider>
  );
};

const BotonMenu = () => {
  const { toggleMenu } = useContext(MenuMovilContext);

  return (
    <div>
      <div style={{ zIndex: 1000 }} className='fixed bottom-4 left-4 text-5xl text-white bg-primaryColor rounded-full cursor-pointer' onClick={toggleMenu}>
        <IoMenu />
      </div>
    </div>
  );
};

export { MenuMovilProvider, BotonMenu };
