import React from 'react'
import UserTable from './UserTable';

interface Props {
    searchParams:{
      sortOrder:string
    }
}
const UserPage =async ({searchParams:{sortOrder}}:Props) => {
  return (
    <div>
      <h1>User Lists</h1>
      <UserTable  sortOrder={sortOrder} />
    </div>
  )
}

export default UserPage