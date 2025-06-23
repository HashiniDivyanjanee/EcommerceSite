import React from 'react'
import image1 from '../assets/Category/image1.png'

const Offers = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-4'>
      {/* Left: Sale Banner */}
      <div className='lg:col-span-2 bg-cover bg-center h96 flex flex-col justify-center items-start p-8 text-white' style={{ backgroundImage: `url(${image1})` }}>
        <h2 className='text-4xl font-bold mb-2'>Items on SALE</h2>
        <p className='text-lg mb-4'>Discounts up to 30%</p>
        <button className='border-b-2 border-white uppercase font-semibold'>Shop Now</button>
      </div>
      {/* Right: Combo & Discount */}
      <div className='flex flex-col gap-4'>
        {/* Combo Offer */}
        <div className='bg-cover bg-center h-44 flex flex-col justify-center items-start p-6 text-white' style={{ backgroundImage: `url(${image1})` }}>
          <h3 className='text-2xl font-bold'>Combo Offers</h3>
          <p>Discounts up to 50%</p>
          <button className='mt-2 border-b-2 border-white uppercase font-semibold'>Shop Now</button>
        </div>

        {/* Discount Coupon */}
        <div className='bg-cover bg-center h-44 flex flex-col justify-center items-start p-6 text-white' style={{ backgroundImage: `url(${image1})` }}>
          <h3 className='text-2xl font-bold'>Discount Coupons</h3>
          <p>Discounts up to 40%</p>
          <button className='mt-2 border-b-2 border-white uppercase font-semibold'>Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default Offers