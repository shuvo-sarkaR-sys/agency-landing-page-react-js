import React from 'react'
import { Carousel } from "flowbite-react";
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import p5 from '../assets/p5.jpg'
import p6 from '../assets/p6.jpg'
const Post = () => {
  return (
    <div className=' md:px-[150px] px-10 py-[75px] dark:bg-zinc-900 dark:text-white bg-[#f6efe9]'>
      <p className='text-green-600'>Latest posts</p>
      <h1 className='md:text-4xl text-xl my-5 text-start font-bold'>Latest from insights</h1>
      <div className='flex justify-between'>
      <p>Interviews, tips, guides, industry best practices, and news.</p>
      <button className='p-3 rounded-xl md:p-1 md:text-lg text-xs font-medium bg-green-600 text-white'>View all posts</button>
      </div>
      <div className="h-56 mt-14   sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
         <div className='flex gap-5 mx-0 md:mx-[100px]'>
          <div className='w-[350px] '>
          <img className='w-[350px]    rounded-xl' src={p1} alt="" />
          <h1 className='md:text-xl text-sm md:font-semibold'>UX review presentations</h1>
          <p className='xl:block hidden'>How do you create compelling presentations
            that wow your colleagues and impress your managers?
          </p>
          <p className='text-green-600'>Read post</p>
          </div>
          <div className='w-[350px] xl:block hidden'>
          <img className='w-[350px]  h-[230px] rounded-lg' src={p2} alt="" />
          <h1 className='text-xl font-semibold'>Migrating to Linear 101</h1>
          <p>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.</p>
          <p className='text-green-600'>Read post</p>
          </div>
          <div className='md:w-[350px] xl:block hidden'>
             <img className='rounded-lg  w-[350px]' src={p3} alt="" />
             <h1 className='text-xl font-semibold'>Building your API stack</h1>
             <p className='xl:block hidden'>the rise of RESTFUL APIs has been met by a rise in tools for creating, testing, and managing them.</p>
             <p className='text-green-600'>Read post</p>
          </div>
         
          </div>
 
          
          <div className='flex gap-5 mx-0 md:mx-[100px]'>
          <div className='w-[350px]'>
             <img className='rounded-lg  md:h-fit w-[350px]' src={p4} alt="" />
             <h1 className='text-xl font-semibold'>UX review presentations</h1>
             <p className='md:block hidden'>join the thousands of satisfied users and take your business to the next level today and the power.</p>
             <p className='text-green-600'>Read post</p>
          </div>
          <div className='w-[350px] xl:block hidden'>
             <img className='rounded-lg  w-[350px]' src={p5} alt="" />
             <h1 className='text-xl font-semibold'>Migrating to Linear 101</h1>
             <p>Help you keep track of leads, contacts, and deals, making it easier to nuruture and convert.</p>
             <p className='text-green-600'>Read post</p>
          </div>
          <div className='w-[350px] xl:block hidden'>
             <img className='rounded-lg  w-[350px]' src={p6} alt="" />
             <h1 className='md:text-xl font-semibold'>Building your API stack</h1>
             <p className='xl:block hidden'>the rise of RESTFUL APIs has been met by a rise in tools for creating, testing, and managing them.</p>
             <p className='text-green-600'>Read post</p>
          </div>
        </div>
      </Carousel>
    </div>
    </div>
  )
}

export default Post
