import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between '>
      <h2>Tacer</h2>
      <ul className='flex w-[200px] justify-between'>
        <li>
          <Link href='/users'>
              Users
          </Link>
        </li> 
        <li>
          <Link href='/products'>
              Products
          </Link>
        </li> 
         <li>
          <Link href='/products'>
              Products
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar