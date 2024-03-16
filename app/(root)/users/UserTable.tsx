import Link from 'next/link';
import React from 'react'
import { sort } from 'fast-sort';
interface User {
  id:number;
  name:string;
  email:string;
}
interface Props {
  sortOrder:string;
}
const UserTable = async ({sortOrder}:Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json()
  const sortedUsers =sort(users).asc(sortOrder === 'email' ? (user) => user?.email : (user) =>user?.name)
  return (
   <div>
     <table className='table bordered'>
         <thead>
          <tr>
            <th>
              <Link href='/users?sortOrder=name'>
                Name
              </Link>
            </th>
            <th>
            <Link href='/users?sortOrder=email'>
                Email
              </Link>
            </th>
          </tr>
         </thead>
         <tbody>
            {(sortedUsers as User[]).map((user: User) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
      </table>
   </div>
  )
}

export default UserTable