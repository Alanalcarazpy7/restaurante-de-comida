import BlogPostComponents from '../componets/blogPost/blogPostComponents'
import food1 from '../assets/images/BlogPostImg/food1.jpg'
import food2 from '../assets/images/BlogPostImg/food2.jpg'
import food3 from '../assets/images/BlogPostImg/food3.jpg'
import { v4 as uuidv4 } from 'uuid';

const BlogPost = () => {
  const blogs=[
    {
      id:uuidv4(),
      imagen:food1,
      fecha:'10 February 2022',
      descripcion:'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis'
    },
    {
      id:uuidv4(),
      imagen:food2,
      fecha:'10 February 2022',
      descripcion:'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis'
    },
    {
      id:uuidv4(),
      imagen:food3,
      fecha:'10 February 2022',
      descripcion:'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis'
    },
]

  return (
    <div className='m-10'>
      <h3 className={`font-great-vibes text-primaryColor text-2xl text-center`}>Blog Post</h3>
      <h2 className={`text-5xl mb-5  text-center`}><span className='text-primaryColor text-5xl'>Últ</span>imas noticias y blogs</h2>
      <div className='flex flex-wrap justify-center'>
      {blogs.map(item=>
        <div className='m-5'>
          <BlogPostComponents 
            key={item.id}
            imagen={item.imagen}
            fecha={item.fecha}
            descripcion={item.descripcion}
          />
        </div>
      )}
      </div>
    </div>
  )
}

export default BlogPost
