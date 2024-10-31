import React from 'react'
import c2 from '../assets/c2.jpg'
import p1 from '../assets/01.jpg'
import p2 from '../assets/p1.jpg'
import p3 from '../assets/p2.jpg'
import p4 from '../assets/p3.jpg'
import p5 from '../assets/p4.jpg'
import p6 from '../assets/p5.jpg'
import p7 from '../assets/p6.jpg'
import i1 from '../assets/02.jpg'
import i2 from '../assets/02 (1).png'
import i3 from '../assets/01.jpg'
import i4 from '../assets/05.png'
import i5 from '../assets/01.jpg'
import Footer from '../Components/Footer'
const Blog = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center'>Insights-</h1>
      <div className='flex xl:gap-20 md:gap-10 gap-5 p-6 xl:my-20 my-10 md:mx-10 xl:mx-[150px] rounded-2xl bg-[#f6efe9]'>
        <img className='cursor-pointer hover:scale-105 w-1/2 rounded-2xl' src={c2} alt="" />
        <div>
            <h1 className='font-semibold w-20 text-center mx-auto rounded-md bg-green-600 text-white'>Strategy</h1>
            <h2 className='xl:text-5xl md:text-3xl text-xl font-semibold'>Top 5 reasons to invest in marketing</h2>
            <div className='flex gap-2 my-10'>
                <img  className='w-10 rounded-full ' src={p1} alt="" />
                <p>David</p>
                <p>Apr 26, 2024</p>
            </div>
            <p className='text-green-700 xl:mt-20 border-b-2'>Continue reading</p>
        </div>
      </div>
      <div className='flex mb-20 flex-wrap md:gap-5 xl:gap-8 md:mx-12 xl:mx-[150px]'>
        <div className='md:w-[350px] z-10 relative xl:w-[380px]  p-5 rounded-3xl bg-[#f6efe9]'>
            <img className='rounded-3xl' src={p2} alt="" />
            <h1 className='text-center mt-5 md:text-xl xl:text-2xl font-semibold'>How can marketing help your business?</h1>
            <p className='bg-green-700 p-1 rounded-md absolute top-8 left-10 text-white'>Business</p>
            <div className='flex gap-2 mt-5 mx-auto w-[200px]'>
                <img className='w-7 rounded-full' src={i1} alt="" />
                <p>Smith Apr 11, 2023</p>
            </div>
            
        </div>

        <div className='md:w-[350px] z-10 relative xl:w-[380px]  p-5 rounded-3xl bg-[#f6efe9]'>
            <img className='rounded-3xl' src={p3} alt="" />
            <h1 className='text-center mt-5 md:text-xl xl:text-2xl font-semibold'>How can marketing help your business?</h1>
            <p className='bg-green-700 p-1 rounded-md absolute top-8 left-10 text-white'>Business</p>
            <div className='flex gap-2 mt-5 mx-auto w-[200px]'>
                <img className='w-7 rounded-full' src={p1} alt="" />
                <p>Malan Mar 11, 2022</p>
            </div>
            
        </div>

        <div className='md:w-[350px] z-10 relative xl:w-[380px]  p-5 rounded-3xl bg-[#f6efe9]'>
            <img className='rounded-3xl' src={p4} alt="" />
            <h1 className='text-center mt-5 md:text-xl xl:text-2xl font-semibold'>How can marketing help your business?</h1>
            <p className='bg-green-700 p-1 rounded-md absolute top-8 left-10 text-white'>Business</p>
            <div className='flex gap-2 mt-5 mx-auto w-[200px]'>
                <img className='w-7 rounded-full' src={i2} alt="" />
                <p>Kelvin Apr 11, 2023</p>
            </div>
            
        </div>

        <div className='md:w-[350px] z-10 relative xl:w-[380px] p-5 rounded-3xl bg-[#f6efe9]'>
            <img className='rounded-3xl' src={p5} alt="" />
            <h1 className='text-center mt-5 md:text-xl xl:text-2xl font-semibold'>How can marketing help your business?</h1>
            <p className='bg-green-700 p-1 rounded-md absolute top-8 left-10 text-white'>Business</p>
            <div className='flex gap-2 mt-5 mx-auto w-[200px]'>
                <img className='w-7 rounded-full' src={i3} alt="" />
                <p>Head Apr 11, 2023</p>
            </div>
            
        </div>

        <div className='md:w-[350px] z-10 relative xl:w-[380px] p-5 rounded-3xl bg-[#f6efe9]'>
            <img className='rounded-3xl' src={p6} alt="" />
            <h1 className='text-center mt-5 md:text-xl xl:text-2xl font-semibold'>How can marketing help your business?</h1>
            <p className='bg-green-700 p-1 rounded-md absolute top-8 left-10 text-white'>Business</p>
            <div className='flex gap-2 mt-5 mx-auto w-[200px]'>
                <img className='w-7 rounded-full' src={i4} alt="" />
                <p>Butlar Apr 11, 2020</p>
            </div>
            
        </div>

        <div className='md:w-[350px] z-10 relative xl:w-[380px] p-5 rounded-3xl bg-[#f6efe9]'>
            <img className='rounded-3xl' src={p7} alt="" />
            <h1 className='text-center mt-5 md:text-xl xl:text-2xl font-semibold'>How can marketing help your business?</h1>
            <p className='bg-green-700 p-1 rounded-md absolute top-8 left-10 text-white'>Business</p>
            <div className='flex gap-2 mt-5 mx-auto w-[200px]'>
                <img className='w-7 rounded-full' src={i5} alt="" />
                <p>Smith Apr 11, 2023</p>
            </div>
            
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Blog
