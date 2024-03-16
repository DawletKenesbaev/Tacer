import React from 'react'

const NewUserPage = () => {
  return (
    <div>
      <h1>Users</h1>
      <table className='table bordered'>
         <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
         </thead>
         <tbody>
            <td>Name</td>
            <td>Email</td>
         </tbody>
      </table>
    </div>
  )
}

export default NewUserPage