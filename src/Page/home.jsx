import React from 'react'

const home = () => {
  return (
    <>
    <div className='text-center text-2xl'>
      I am home
    </div>
    <div className='justify-center text-white flex gap-4 text-2xl'>
    <button className='border bg-teal-500 px-4 py-1 rounded-xl'>Login</button>
    <button className='border bg-red-500 px-4 py-1 rounded-xl'>Logout</button>
    </div>
    <div className='justify-center text-center flex sm:flex-col'>
        <p>Hi I am name</p>
        <p>My email is: xyz@email.com</p>
    </div>
    </>
  )
}

export default home
