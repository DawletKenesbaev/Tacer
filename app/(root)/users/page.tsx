import React from 'react'

interface User {
  id:number;
  name:string;
}
const UserPage =async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const user= await res.json()
  return (
    <div>
      <h1>User Lists</h1>
      {
        user.map((user:User ) =>
        <li key={user.id}>
           {user.name}
        </li>)
      }
    </div>
  )
}

export default UserPage