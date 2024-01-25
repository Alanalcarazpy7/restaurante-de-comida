import React from 'react'

interface TypesProps{
  title:string,
  links:string[]
}

const LinksUtiles:React.FC<TypesProps> = ({title,links}) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <h3>{title}</h3>
      {links.map(item=>
        <li className='mt-5 list-none' >
          <a href="#" onClick={handleClick}>{item}</a>
        </li>
      )}
    </div>
  )
}

export default LinksUtiles
