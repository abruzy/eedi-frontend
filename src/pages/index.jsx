import React, { useEffect, useState } from 'react'

const Home = () => {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  const handleUserClick = user => {
    setSelectedUser(user)
  }

  console.log({ users })

  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 p-6 flex justify-center items-center'>
      <div className='max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-bold mb-4 text-gray-800'>User List</h2>
          <ul className='space-y-3'>
            {users.map(user => (
              <li
                key={user.id}
                className='p-4 border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition duration-200 ease-in-out'
                onClick={() => handleUserClick(user)}
              >
                <p className='font-medium text-lg text-gray-700'>{user.name}</p>
                <p className='text-sm text-gray-500'>{user.email}</p>
              </li>
            ))}
          </ul>
        </div>
        {selectedUser && (
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>
              User Details
            </h2>
            <div className='space-y-2'>
              <p className='text-lg'>
                <span className='font-medium'>Name:</span> {selectedUser.name}
              </p>
              <p className='text-lg'>
                <span className='font-medium'>Email:</span> {selectedUser.email}
              </p>
              <p className='text-lg'>
                <span className='font-medium'>Phone:</span> {selectedUser.phone}
              </p>
              <p className='text-lg'>
                <span className='font-medium'>Website:</span>{' '}
                <a
                  href={`http://${selectedUser.website}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:underline'
                >
                  {selectedUser.website}
                </a>
              </p>
              <div className='mt-4'>
                <h3 className='font-semibold text-lg text-gray-700'>
                  Address:
                </h3>
                <p>{`${selectedUser.address.street}, ${selectedUser.address.city}, ${selectedUser.address.zipcode}`}</p>
              </div>
              <div className='mt-4'>
                <h3 className='font-semibold text-lg text-gray-700'>
                  Company:
                </h3>
                <p>{selectedUser.company.name}</p>
                <p className='text-gray-500 text-sm'>
                  {selectedUser.company.catchPhrase}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
