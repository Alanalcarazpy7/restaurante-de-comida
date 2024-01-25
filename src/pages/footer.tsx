import React, { useContext } from 'react'
import EmailFooter from '../componets/footer/email'
import About from '../componets/footer/about'
import LinksUtiles from '../componets/footer/linksUtiles'
import PostRecientes from '../componets/footer/postRecientes'
import food1 from '../assets/images/PostRecientesImg/food1.jpg'
import food2 from '../assets/images/PostRecientesImg/food2.jpg'
import food3 from '../assets/images/PostRecientesImg/food3.jpg'
import CopyrightComponents from '../componets/footer/copyrightComponents'
import { UserContext } from '../context/UserProvider'

const Footer = () => {
  const useful=['About','News','Partners','Team','Menu','Contacts']
  const help=['FAQ','Term & conditions','Reporting','Documentation','Support Policy','Privacy']
  const post=[
    {
      label:'Keep Your Business',
      fecha:'21 Feb 2022',
      imagen:food1
    },
    {
      label:'Keep Your Business',
      fecha:'22 Feb 2022',
      imagen:food2
    },
    {
      label:'Keep Your Business',
      fecha:'20 Feb 2022',
      imagen:food3
    },
  ]

  const windowSize=useContext(UserContext)

  return (
    <div>
      <EmailFooter/>
      <div className='flex justify-center'>
        <div className='border-t-2 border-primaryColor my-4 w-8/12 mt-10 mb-10'></div>
      </div>
      <div className='flex justify-center'>
      <div className={`grid w-10/12 gap-10 justify-center ${windowSize ? (windowSize < 769 && windowSize > 426 ? 'grid-cols-2' : (windowSize < 426 ? 'grid-cols-1 text-center' : 'grid-cols-4')) : 'grid-cols-4'}`}>

          <About/>
          <LinksUtiles
            title='Enlaces Útiles'
            links={useful}
          />
          <LinksUtiles
            title='Help?'
            links={help}
          />
          <div>
          <h3 className='mb-3 text-xl'><b>Post Recientes</b></h3>
            {post.map((item,index)=>
            <div key={index}>
              <PostRecientes
                label={item.label}
                fecha={item.fecha}
                imagen={item.imagen}
              />
            </div>
            )}
          </div>
        </div>
      </div>
      <div className=' bg-primaryColor p-5'>
        <CopyrightComponents/>
      </div>
      
    </div>
  )
}

export default Footer
