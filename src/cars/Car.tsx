import React from 'react'
import Background from '../assets/images/Car1.jpg'


function Car() {
  return (
    <div 
    style={{backgroundImage: 'url(${ BackGround })'}} 
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
    >
      <div className ='flex place-items-center h-screen'>
        <h3 className='p-5 bg-white bg-opacity-50 text-black rounded '>Welcome to Kiy's Car Garage</h3>

       </div>
      </div>
  )
}

export default Car