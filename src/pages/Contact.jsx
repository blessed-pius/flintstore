import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBos from '../components/NewsLetterBos';

const Contact = () => {
  return (
    <div className=''>
      <div className='text-center text-2xl pt-10 border-t'>
      <Title text1={'CONTACT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
      <img src= {assets.contact_img} className='w-full md:max-w-[400px]' alt="" />
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-xl text-gray-500'>Our Store</p>
        <p className='text-gray-600'>sapele road benin <br /> suite 223 no 4 Edo State</p>
        <p className='text-gray-500'>Tel: +234 91 56563912 <br />daniledauau65@gmail.com</p>
        <p className='font-semibold text-xl text-gray-600'> Careers at Forever</p>
        <p className='text-gray-600'>Learn more about out term and job openings.</p>
        <button className='border border-black px-8 py-4 text-sm hover:text-white  hover:bg-black transition-all duration-500'>Explore Jobs</button>
      </div>
      </div>
      <NewsLetterBos />
    </div>
  );
}

export default Contact;
