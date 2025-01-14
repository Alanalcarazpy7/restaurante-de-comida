import { useContext } from 'react'
import { UserContext } from '../../context/UserProvider'

const PorqueElejirnos = () => {
  const windowSize=useContext(UserContext)

  return (
    <div className=''>
      <div className={`${windowSize && windowSize < 750 ? 'mx-auto' : ''}`}>
        <h3 className={`font-great-vibes text-primaryColor text-3xl ${windowSize && windowSize < 750 ? 'text-center ' : ''}`}>Porque Elejirnos</h3>
        <h1 className={`text-3xl  ${windowSize && windowSize < 750 ? 'text-center ' : ''}`}><span className='text-primaryColor text-3xl'>Sa</span>bor extraordinario y experimentado</h1>
        <h5 className={`text-1xl mt-6  ${windowSize && windowSize < 750 ? 'text-center ' : ''}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ut adipisci quibusdam illo dignissimos exercitationem? Quis vitae repellat itaque autem aut qui dignissimos, nemo sint nulla non impedit quos. Nesciunt.</h5>
      </div>
    </div>
  )
}

export default PorqueElejirnos
