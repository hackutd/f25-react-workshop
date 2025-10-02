import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between p-4 bg-gray-800 text-white'>
      <div className='font-bold'>Movie App</div>
      <div>
        <a href="/" className='mr-4'>Home</a>
        <a href="/favorites">Favorites</a>
      </div>
    </div>
  )
}
