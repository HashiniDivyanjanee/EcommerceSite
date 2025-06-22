import React from 'react'
import image1 from '../assets/Category/image1.png'

const Offers = () => {
  return (
    <div className='bg-white px-10 py-10'>
        <div className='flex gap-3'>
            <img src={image1} alt="" />
            <div >
                <img src={image1} alt="" />
                <img src={image1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Offers