import CategoryFood from '../componets/categoryFood/categoryFood'

const Category = () => {
  //const windowSize=useContext(UserContext)

  return (
    <div className='mt-10'>
      <h3 className={`font-great-vibes text-primaryColor text-2xl text-center`}>Categoria de Comidas</h3>
      <h2 className={`text-5xl  text-center`}><span className='text-primaryColor text-5xl'>El</span>ija el alimento</h2>
      <CategoryFood/>
    </div>
  )
}

export default Category
