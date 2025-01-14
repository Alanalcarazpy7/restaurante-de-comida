import { FaArrowAltCircleUp } from "react-icons/fa";

const BotonSubida = () => {
  const handleclic=(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })

  return (
    <div>
      <div className='fixed bottom-4 right-4 text-5xl text-white bg-primaryColor rounded-full cursor-pointer' onClick={handleclic}>
        <FaArrowAltCircleUp />
      </div>
    </div>
  )
}

export default BotonSubida
