import React, { ReactNode } from 'react'

interface Props {
    children:ReactNode
}
const AdminLayout = ({children}:Props) => {
  return (
    <div className='flex '>
      <aside className='mr-5 bg-slate-500 p-5'>Admin Sidebar</aside>
      <div>{children}</div>
    </div>
  )
}

export default AdminLayout