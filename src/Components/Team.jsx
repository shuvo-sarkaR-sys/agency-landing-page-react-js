import React from 'react'
import im1 from '../assets/im1.jpg'
import im2 from '../assets/im2.jpg'
import im3 from '../assets/im3.jpg'
import im4 from '../assets/im4.jpg'
import im5 from '../assets/im5.jpg'
import im6 from '../assets/im6.jpg'
import im7 from '../assets/im7.jpg'
import im8 from '../assets/im8.jpg'
import { Carousel } from "flowbite-react";

const Team = () => {
  return (
    <div className='text-center pb-10'>
      <h1 className='text-green-600 font-semibold mb-7'>Our team</h1>
      <p className='md:text-4xl text-xl font-bold mb-8'>People you'll be working with</p>
      <p>We're a 100% remote team spread all across the world.</p>
      <div className='flex mt-10 xl:mx-[200px]  mx-24 md:mx-20 flex-wrap gap-7 '>
        <div className='md:w-[250px] '>
            <img className='rounded-xl' src={im1} alt="" />
            <h1 className='font-bold text-lg ml-3 text-start'>Jason Chedjou</h1>
            <p className='text-gray-600 text-start ml-3'>Front-end Developer</p>
        </div>
        <div className='w-[250px]'>
            <img src={im8} alt="" />
            <h1 className='font-bold text-lg ml-3 text-start'>Marco Kelly</h1>
            <p className='text-gray-600 text-start ml-3'>Customer Success</p>
        </div>
        <div className='w-[250px]'>
            <img src={im2} alt="" />
            <h1 className='font-bold text-lg ml-3 text-start'>José Gibbons</h1>
            <p className='text-gray-600 text-start ml-3'>Engineering Manager</p>
        </div>
        <div className='w-[250px]'>
            <img src={im3} alt="" />
            <h1 className='font-bold text-lg ml-3 text-start'>Nilson Laurent</h1>
            <p className='text-gray-600 text-start ml-3'>Founder & CEO</p>
        </div>
        <div className='w-[250px]'>
            <img src={im4} alt="" />
            <h1 className='font-bold text-lg ml-3 text-start'>John Hewitt</h1>
            <p className='text-gray-600 text-start ml-3'>Product Manager</p>
        </div>
        <div className='w-[250px]'>
            <img src={im5} alt="" />
            <h1 className='font-bold text-lg ml-3 text-start'>Zouhir Christensen</h1>
            <p className='text-gray-600 text-start ml-3'>Backend Developer</p>
        </div>
        <div className='w-[250px]'>
            <img src={im6} alt="" />
            <h1 className='font-bold text-lg ml-3 text-start'>Zaid Schwartz</h1>
            <p className='text-gray-600 text-start ml-3'>Product Designer</p>
        </div>
        <div className='w-[250px]'>
            <img src={im7} alt="" />
            <h1 className='font-bold text-lg ml-3 text-start'>Sarah Mandella</h1>
            <p className='text-gray-600 text-start ml-3'>UX Researcher</p>
        </div>
        
      </div>

      <div className='my-20'>
        <h1 className='md:text-4xl text-2xl font-bold mb-8'>We’re hiring</h1>
        <p>We are looking for people that share our vision. Are <br /> you adaptable, driven, and friendly?</p>
        <button className='text-lg mt-5 border-2 rounded-xl font-semibold p-2'>Submit application</button>
      </div>
    </div>
  )
}

export default Team
