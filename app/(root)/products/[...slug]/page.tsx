import React from 'react'

interface Props {
    params:{slug:string[]}
}
const ProductPage = ({params:{slug}}:Props) => {
  return (
    <div>
        {slug}
    </div>
  )
}

export default ProductPage