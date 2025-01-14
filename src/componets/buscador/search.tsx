import BuscadorSVG from '../../assets/svg/buscadorSVG';

const Search = () => {
  return (
    <div className='flex justify-center '>
      <div className='flex border border-primaryColor rounded-full w-52 h-10 items-center'>
        <input 
          type="text" 
          name="text" 
          placeholder='Search...'
          className='pl-3 py-1.5 text-sm rounded-lg bg-transparent focus:outline-none'
          />
        <BuscadorSVG/>
      </div>
    </div>
  )
}

export default Search
