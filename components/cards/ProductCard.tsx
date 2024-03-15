import React from 'react'
import AddToCart from './AddToCart'


const ProductCard = () => {
  return (
    <div className='my-5 bg-sky-400 p-5 text-xl text-white hover:bg-sky-500'>
      <AddToCart />
    </div>
  )
}

export default ProductCard