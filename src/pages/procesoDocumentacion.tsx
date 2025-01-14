import { useContext } from 'react'
import ProcesoDocumentacionComponents from '../componets/procesoDocumentacion/procesoDocumentacionComponents'
import fondoImg from '../assets/images/ProcesoDocumentacionImg/food1.jpg'
import { UserContext } from '../context/UserProvider'

const ProcesoDocumentacion = () => {
  const windowSize=useContext(UserContext)

  return (
    <div style={{backgroundImage: `url(${fondoImg})`, height:'100%'}}>
      <div className={`bg-black bg-opacity-25 h-full pt-3 grid  ${windowSize && windowSize < 1024 ? 'grid grid-col-1 text-center bg-opacity-55' : 'grid-cols-2'}`}>
        <div></div>
        <ProcesoDocumentacionComponents/>
      </div>
    </div>
  )
}

export default ProcesoDocumentacion
