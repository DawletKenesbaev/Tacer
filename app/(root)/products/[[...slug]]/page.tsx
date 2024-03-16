import React from 'react'

interface Props {
    params:{slug:string[]};
    searchParams:{sortOrder:string}
}
const ProductPage = ({params:{slug},searchParams:{sortOrder}}:Props) => {
  return (
    <div>
        {slug}
        <h2>{sortOrder}</h2>
    </div>
  )
}

export default ProductPage