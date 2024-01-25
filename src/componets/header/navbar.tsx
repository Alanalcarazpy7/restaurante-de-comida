import React from 'react'

interface TypesProps{
  menuItems:{
    id:number;
    label:string;
  }[];
  onClic:(sectionId: string) => void
}

const Navbar:React.FC<TypesProps> = ({onClic,menuItems}) => {
  const handleClick=((e:React.MouseEvent,itemId:number)=>{
    e.preventDefault()
    onClic(itemId.toString());
  })

  return (
    <div className=''>
      <ul className='flex justify-center flex-wrap'>
        {
          menuItems.map((item) =>
          <a 
            href="" 
            className='hover:text-primaryColor' 
            onClick={(e)=>handleClick(e,item.id)} 
            key={item.id} 
            data-name={item.label}
          >
            <li className='m-3' >{item.label}</li>
          </a>
          )
        }
        
      </ul>
    </div>
  )
}

export default Navbar
