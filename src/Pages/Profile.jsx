import React from 'react'
import { useSelector } from 'react-redux'
export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className="text-3xl text-center font-semibold my-7">Profile</h1>
      <form className='flex flex-col gap-4'>
        <img src={currentUser.avatar} alt="profile" className='rounded-full w-24 h-24 object-cover cursor-pointer self-center mt-2'/>
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="name"
          value={currentUser.name}
          disabled 
        />
         <input
          type="text"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          value={currentUser.name}
          disabled 
        />
         <input
          type="text"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          value={currentUser.name}
          disabled 
        />
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>update</button>
        {/* <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>update</button> */}
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700  cursor-pointer'>Delete account</span>
        <span className='text-red-700  cursor-pointer'>Sign out</span>
      </div> 
    </div>
  )
}
