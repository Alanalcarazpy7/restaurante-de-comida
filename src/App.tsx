import { useContext } from 'react';
import Header from './pages/header';
import UserProvider from './context/UserProvider';
import About from './pages/about';
import Category from './pages/category';
import Elejirnos from './pages/Elejirnos';
import Clients from './pages/clients';
import Menu from './pages/menu';
import Chefs from './pages/chefs';
import Testimonio from './pages/testimonio';
import ProcesoDocumentacion from './pages/procesoDocumentacion';
import BlogPost from './pages/blogPost';
import Footer from './pages/footer';
import BotonSubida from './componets/botones/botonSubida';
import { MenuMovilContext } from './componets/botones/menuMovil';
import MenuMovilLink from './componets/menuMovil/menu';

function App() {
  const menuItems = ['Home','Sobre Nosotros','Categoria de Comidas','Porque Elejirnos' ,'Menu', 'Chefs', 'Testimonios', 'Blogs', 'Contacto'];

  const handleClick = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  const {menuActivo} = useContext(MenuMovilContext);

  return (
    <UserProvider>
      {menuActivo && (
        <div>
          <MenuMovilLink
            onClic={handleClick}
            menuItems={menuItems.map((item, index) => ({ id: index, label: item }))}
          />
        </div>
      )}
      {!menuActivo && (
        <>
          <div id='0'>
            <Header onClic={handleClick} menuItems={menuItems}/>
          </div>
          <div id='1'>
            <About />
          </div>
          <div id='2'>
            <Category />
          </div>
          <div id='3'>
            <Elejirnos />
          </div>
          <div>
            <Clients />
          </div>
          <div id='4'>
            <Menu />
          </div>
          <div id='5'>
            <Chefs />
          </div>
          <div id='6'>
            <Testimonio />
          </div>
          <div>
            <ProcesoDocumentacion />
          </div>
          <div id='7'>
            <BlogPost />
          </div>
          <div id='8'>
            <Footer />
          </div>
          <BotonSubida />
        </>
      )}
    </UserProvider>
  );
}

export default App;
