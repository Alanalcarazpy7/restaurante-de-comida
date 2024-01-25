import React, { createContext,useEffect,useState } from 'react'

export const UserContext= createContext<number | null>(null);

interface TypesProps{
  children:React.ReactNode;
}

const UserProvider:React.FC<TypesProps> = ({children}) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
      console.log(window)
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

  return (
    <UserContext.Provider value={windowSize}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
