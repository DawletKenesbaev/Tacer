'use client'
import React from 'react'
const Layout = ({children}:{children:React.ReactNode}) => {
  return (
        
           <section >
               <div>
                {children}
               </div  >
           </section>
  )
}

export default Layout