import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBos from '../components/NewsLetterBos';

const About = () => {

  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/3 text-gray-600'>
          <p>Our journey began with a simple idea: to create a platform where quality meets style, offering unique products that resonate with the modern individual. From the start, we've been driven by our passion for excellence, ensuring that every item in our collection meets the highest standards of craftsmanship.</p>
          <p>At the heart of our brand is a commitment to our customers. We believe in building lasting relationships by providing exceptional service and continuously evolving to meet your needs. Thank you for being a part of our story, and we look forward to growing together.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to inspire and empower individuals through products that blend quality, innovation, and style. We strive to create a shopping experience that is not only satisfying but also meaningful, ensuring that every interaction with our brand leaves a lasting impression. Our commitment is to sustainability, integrity, and excellence in all that we do, aiming to make a positive impact on our customers, our community, and the world."</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>We take pride in the quality of our products, ensuring that each item meets the highest standards of craftsmanship. Our commitment to excellence means that we meticulously select materials and partner with trusted manufacturers to deliver products that are durable, stylish, and built to last. With us, you can be confident that you’re investing in quality that stands the test of time.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Conveniece</b>
          <p className='text-gray-600'>Your convenience is our priority. We’ve designed our platform to offer a seamless and hassle-free shopping experience, from browsing to checkout. With easy navigation, secure payment options, and fast delivery, we make sure that getting what you need is as effortless as possible. We’re here to save you time and provide the comfort of shopping from anywhere, at any time.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Cuntomer Service</b>
          <p className='text-gray-600'>Our customers are at the heart of everything we do. We’re dedicated to providing exceptional service that goes beyond expectations. Whether you have a question, need assistance, or are looking for a recommendation, our friendly and knowledgeable team is always ready to help. We’re committed to making your experience with us enjoyable and ensuring that you feel valued and supported every step of the way</p>
        </div>
      </div>
      <NewsLetterBos />
    </div>
  );
}

export default About;
