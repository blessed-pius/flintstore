import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const Placeorder = () => {

  const [method, setMethod] = useState('cod')
  const { navigate } = useContext(ShopContext)


  return (
    <div className='flex flex-col justify-between sm:flex-row gap-4 pt-5 sm:pt-14 min-h-[80vh]'>
      {/* ------left side----------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl my-3 sm:text-2xl'>
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input type="text" placeholder='First name' className='border py-1.5 px-3.5 w-full border-gray-300 rounded' />
          <input type="text" placeholder='Last name' className='border py-1.5 px-3.5 w-full border-gray-300 rounded' />
        </div>
        <input type="email" placeholder='Email address' className='border py-1.5 px-3.5 w-full border-gray-300 rounded' />
        <input type="text" placeholder='Street' className='border py-1.5 px-3.5 w-full border-gray-300 rounded' />
        <div className="flex gap-3">
          <input type="text" placeholder='City' className='border py-1.5 px-3.5 w-full border-gray-300 rounded' />
          <input type="text" placeholder='State' className='border py-1.5 px-3.5 w-full border-gray-300 rounded' />
        </div>
        <div className="flex gap-3">
          <input type="number" placeholder='zip code' className='border py-1.5 px-3.5 w-full border-gray-300 rounded' />
          <input type="text" placeholder='Country' className='border py-1.5 px-3.5 w-full border-gray-300 rounded' />
        </div>
        <input type="number" placeholder='phone' className='border py-1.5 px-3.5 w-full border-gray-300 rounded' />
      </div>


      {/* -----------right side ---------------------*/}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* ======== Payment Methd Sellection============== */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.stripe_logo} className='h-5 mx-4' alt="" />
            </div>
            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.razorpay_logo} className='h-5 mx-4' alt="" />
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={()=> navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Placeorder;
