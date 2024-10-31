import React, { useState } from 'react'
import feature1 from '../assets/feature-01.svg'
import feature2 from '../assets/feature-02.svg'
import feature3 from '../assets/feature-03.svg'
import feature4 from '../assets/feature-04.svg'
import Client from '../Components/Client'
import Footer from '../Components/Footer'
const PageFeatures = () => {
  
  const [showtext, setShowtext] = useState(false)
  const [showtext1, setShowtext1] = useState(false)
  const [showtext2, setShowtext2] = useState(false)
  const [showtext3, setShowtext3] = useState(false)
  const [showtext4, setShowtext4] = useState(false)
  const handleClick = ()=>{
     setShowtext(!showtext)
  }
  const handleClick1 = ()=>{
    setShowtext1(!showtext1)
    setShowtext(false)
 }
 const handleClick2 = ()=>{
  setShowtext2(!showtext2)
  setShowtext1(false)
}
const handleClick3 = ()=>{
  setShowtext3(!showtext3)
  setShowtext2(false)
}
const handleClick4 = ()=>{
  setShowtext4(!showtext4)
  setShowtext3(false)
}
  return (
    <div id="feature"> 
    <div className='text-center dark:text-white text-black mx-8 md:mx-[100px] xl:mx-[200px]'>
      <h1 className='md:text-6xl xl:text-6xl text-2xl font-bold my-10 xl:mx-[230px]'>What separates you from others.</h1>
      <p className='mb-10 xl:mx-[230px]'>We focus on helping you to make useful content more accessible with an utlimate goal for a good sharing profit as a content creator.</p>
      <div className='flex flex-wrap-reverse md:flex-nowrap  p-10 rounded-2xl gap-10 dark:bg-zinc-900 bg-[#f6efe9]'>
       
        <div className='xl:w-1/2 md:w-1/2 md:text-start xl:mr-20 md:pt-5 xl:pt-14'>
          <p className='text-green-600'>01.</p>
          <h1 className='xl:text-5xl md:mt-7 xl:mt-14 md:mb-2 xl:mb-5 font-bold'>Share tools quickly and confidently in minutes</h1>
          <p className='text-gray-600'>This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables. You can also customize your own dynamic versions.</p>
        </div> 
        <img className='xl:w-1/2 md:w-1/2 rounded-2xl' src={feature1} alt="" />
      </div>
      <div className='flex mt-14 flex-wrap-reverse md:flex-nowrap  p-10 rounded-2xl gap-10 dark:bg-zinc-900 bg-[#f6efe9]'>
       
       <div className='xl:w-1/2 md:w-1/2 md:text-start xl:mr-20 md:pt-5 xl:pt-14'>
         <p className='text-green-600'>02.</p>
         <h1 className='xl:text-5xl md:mt-7 xl:mt-14 md:mb-2 xl:mb-5 font-bold'>Connect every part of your entire business</h1>
         <p className='text-gray-600'>Keep data consistent, with native CRM integrations that streamline your entire Tool workflow.</p>
       </div> 
       <img className='xl:w-1/2 md:w-1/2 rounded-2xl' src={feature2} alt="" />
     </div>
     <div className='flex mt-10 flex-wrap-reverse md:flex-nowrap  p-10 rounded-2xl gap-10 dark:bg-zinc-900 bg-[#f6efe9]'>
       
       <div className='xl:w-1/2 md:w-1/2 md:text-start xl:mr-20 md:pt-5 xl:pt-14'>
         <p className='text-green-600'>03.</p>
         <h1 className='xl:text-5xl md:mt-7 xl:mt-14 md:mb-2 xl:mb-5 font-bold'>Maintain compliance and control your apps</h1>
         <p className='text-gray-600'>Improve security and trust with built-in legally binding e-Signatures. Create pre-approved templates, content blocks, and lock all legal information to prevent costly mistakes.</p>
       </div> 
       <img className='xl:w-1/2 md:w-1/2 rounded-2xl' src={feature3} alt="" />
     </div>
     <div className='flex mt-10 flex-wrap-reverse md:flex-nowrap  p-10 rounded-2xl gap-10 dark:bg-zinc-900 bg-[#f6efe9]'>
       
       <div className='xl:w-1/2 md:w-1/2 md:text-start xl:mr-20 md:pt-5 xl:pt-14'>
         <p className='text-green-600'>04.</p>
         <h1 className='xl:text-5xl md:mt-7 xl:mt-14 md:mb-2 xl:mb-5 font-bold'>Review quickly and confidently</h1>
         <p className='text-gray-600'>Get real-time access to approvals, comments, and version tracking. Smart features like variables and conditional logic help you eliminate Tool errors.</p>
       </div> 
       <img className='xl:w-1/2 md:w-1/2 rounded-2xl' src={feature4} alt="" />
     </div>
     </div>




     <div className='bg-[#1c1c1e] py-20 mt-20 text-white'> 
        <h1 className='xl:text-5xl text-center md:text-4xl mb-16'>Review quickly and confidently usingLexend.</h1>
      <div className='flex flex-wrap xl:gap-10 md:mx-[100px] md:gap-2 xl:mx-[250px]'>
        <div className='md:w-[300px] rounded-lg border-2 p-10'>
          <div  className='flex justify-between '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>

          </div>
          
          <div className='mt-24'>
            <h1 className='text-2xl font-bold'>Proposals</h1>
            <p className='text-gray-300 text-md mt-2'>Share Tools in minutes with pre-built, customizable templates.</p>
          </div>
        </div>
        <div className='md:w-[300px] rounded-lg border-2 p-10'>
          <div  className='flex justify-between '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>

          </div>
          <div className='mt-24'>
            <h1 className='text-2xl font-bold'>Proposals</h1>
            <p className='text-gray-300 text-md mt-2'>Share Tools in minutes with pre-built, customizable templates.</p>
          </div>
        </div>
        <div className='md:w-[300px] rounded-lg border-2 p-10'>
          <div  className='flex justify-between '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>

          </div>
          <div className='mt-24'>
            <h1 className='text-2xl font-bold'>Proposals</h1>
            <p className='text-gray-300 text-md mt-2'>Share Tools in minutes with pre-built, customizable templates.</p>
          </div>
        </div>
        <div className='md:w-[300px] rounded-lg border-2 p-10'>
          <div  className='flex justify-between '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>

          </div>
          <div className='mt-24'>
            <h1 className='text-2xl font-bold'>Proposals</h1>
            <p className='text-gray-300 text-md mt-2'>Share Tools in minutes with pre-built, customizable templates.</p>
          </div>
        </div>
        <div className='md:w-[300px] rounded-lg border-2 p-10'>
          <div  className='flex justify-between '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>

          </div>
          <div className='mt-24'>
            <h1 className='text-2xl font-bold'>Proposals</h1>
            <p className='text-gray-300 text-md mt-2'>Share Tools in minutes with pre-built, customizable templates.</p>
          </div>
        </div>
        <div className='md:w-[300px] rounded-lg border-2 p-10'>
          <div  className='flex justify-between '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>

          </div>
          <div className='mt-24'>
            <h1 className='text-2xl font-bold'>Proposals</h1>
            <p className='text-gray-300 text-md mt-2'>Share Tools in minutes with pre-built, customizable templates.</p>
          </div>
        </div>
      </div>
      </div>

     <div className='md:w-[700px] dark:text-white mt-8 xl:mt-20 mx-auto'>
        <div className='md:my-5 m-2'>
         
          <div className='flex justify-between cursor-pointer' onClick={handleClick}>
            <p className='md:text-2xl text-lg font-semibold'>Do I need to know about how to code?</p>
           <span>  {!showtext ? "➕" :"❌" } </span>

          </div>
          {showtext && <p className='md:text-lg text-sm mt-5 text-gray-700 text-start'>Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend.

</p>}
        </div>
         <hr />
        <div className='md:my-5 m-2'>
         
         <div className='flex justify-between cursor-pointer' onClick={handleClick1}>
           <p className='md:text-2xl text-lg font-semibold'>Can I use it for commercial projects?</p>
          <span>  {!showtext1 ? "➕" :"❌" } </span>

         </div>
         {showtext1 && <p className='md:text-lg text-sm mt-5 text-gray-700 text-start'>Feel free to do so. Lexend does exist to evolve every commercial project. You can also use it to build stunning websites for your own clients (we won’t breathe a word).

</p>}
       </div>
       <hr />
       <div className='md:my-5 m-2'>
         
         <div className='flex justify-between cursor-pointer' onClick={handleClick2}>
           <p className='md:text-2xl text-lg font-semibold'>Can I use it for multiple projects?</p>
          <span>  {!showtext2 ? "➕" :"❌" } </span>

         </div>
         {showtext2 && <p className='text-sm mt-5 text-gray-700 text-start'>Definitely! Please use it however you like; we don’t limit it.

</p>}
       </div>
       <hr />
       <div className='md:my-5 m-3'>
         
         <div className='flex justify-between cursor-pointer' onClick={handleClick3}>
           <p className='md:text-2xl text-lg font-semibold'>Can I use this to create and sell a product?</p>
          <span>  {!showtext3 ? "➕" :"❌" } </span>

         </div>
         {showtext3 && <p className='md:text-lg text-sm mt-5 text-gray-700 text-start'>Do not ever consider doing it.

</p>}
       </div>
       <hr />
       <div className='md:my-5 m-2'>
         
         <div className='flex justify-between cursor-pointer' onClick={handleClick4}>
           <p className='md:text-2xl text-lg font-semibold'>What is your refund policy?</p>
          <span>  {!showtext4 ? "➕" :"❌" } </span>

         </div>
         {showtext4 && <p className='md:text-lg text-sm mt-5 text-gray-700 text-start'>We understand the importance of customer satisfaction and we strive to provide the best products and services. However, please note that due to the nature of our products and services, we do not offer refunds after a purchase has been made.

</p>}
       </div>
      </div>
      <Client/>
      <div className='xl:my-28 md:my-20 my-10 flex flex-wrap-reverse  xl:gap-28 md:p-12 p-6 xl:p-20 xl:mx-[100px] md:mx-10 mx-5 dark:bg-zinc-900 dark:text-white rounded-3xl bg-[#f6efe9]'>
        <div> 
        <h1 className='xl:text-5xl md:text-3xl text-center font-bold'>Create stunning websites   that fits your needs.</h1>
        <p className='p-4 w-[220px]  rounded-lg mx-auto mt-10 xl:mt-20 text-xl text-white bg-green-600'>Try Lexend today</p>
        <p className='text-center mt-5 text-gray-500'>14-day trial, no credit card required.</p>
        </div>
        <div><svg width="349" height="251" viewBox="0 0 249 201" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_56_61690)"><path d="M140.403 3h-35.424a1 1 0 00-.805 1.593l5.255 7.132a1 1 0 01-.182 1.375L78.735 37.415a1 1 0 01-1.365-.111l-8.066-8.915a1 1 0 00-1.534.062L45.683 57.205c-.689.897.407 2.068 1.348 1.441L63.915 47.39a1 1 0 011.15.029l12.324 9.129a1 1 0 001.21-.015l32.87-25.619a1 1 0 011.114-.078l11.487 6.627a1 1 0 001.399-.429l15.833-32.597A1 1 0 00140.403 3z" fill="#FFD469 "/><path d="M104 73h22a3 3 0 012.997 2.868l3.865 88a3 3 0 01-2.997 3.132H104a3 3 0 01-3-3V76a3 3 0 013-3z" fill="#91CDA1"/><path fill-rule="evenodd" clip-rule="evenodd" d="M248.4 159.7l-.5.5c.2.3.2.6.1 1.1-.6 1.9-11.5 10.4-13.5 10.7-.3 0-.6 0-.8-.1-.2.067-.4.1-.6.1-.6 0-1.1-.2-1.6-.8-.5-.9-.8-4.9-1.1-8.9-.067-.066-.1-.133-.1-.2-37.2 2.9-161.6 9.7-202.8 11.4.5 9.7.7 16.8.7 19.8 0 6.2-.4 7.2-.9 7.2-.6 0-1.1-1-1.9-6.9-.4-3-1-10.2-1.7-20-3.3.1-5.8.2-7.4.2-8.3.1-9.1-.3-9.1-.8-.1-.6.9-1.1 8.8-2 1.6-.2 4.2-.4 7.5-.7-1.1-16-2.5-37.9-3.8-59.9-1.1-18.8-2.1-37.6-2.9-52.7-.6-15.1-1.4-26.4-1.7-30.4-.067-1.066-.1-2-.1-2.8-3 .4-5.7.7-6.5.4-.7-.2-.9-.6-1-1.1a2.044 2.044 0 010-.9c-.1-.1-.2-.2-.2-.4-.3-1 .8-4.8 2.5-8.4 1.7-3.5 3.8-6.8 4.7-7.3.6-.4 1-.2 1.5 0 .2.134.367.267.5.4h.2c1 .1 3.5 2.5 5.4 5.5 1.7 2.6 2.8 5.5 2.9 6.7.2.067.367.134.5.2.7.3.8.7.9 1.2.1.6 0 1.1-.6 1.6-.7.6-4.6 1.3-8.4 1.8.133.734.3 1.6.5 2.6.4 2 1 5.9 1.5 11.1.5 5.3.9 11.9 1.4 19.5 1.1 15.1 2.2 33.8 3.3 52.6 1.3 22 2.5 44 3.2 60.1 2.8-.2 5.967-.433 9.5-.7a9.56 9.56 0 01-.2-.7c-1.3-4.8-2.3-45.3-1.5-50.1.2-.7.3-1.2.4-1.5-.4-.2-.7-.6-.8-1.2-.1-1 1.6-4.6 3.6-7.9 1.6-2.6 3.4-5 4.5-6.2.1-.4.2-.7.3-1.2.4-.9 1.2-1.7 1.9-2.2 1.6-1 3-1 4-1.2l3.3-.5c2.2-.266 4.433-.466 6.7-.6 2.2-.133 4.433-.2 6.7-.2H69l1.7.1c.4 0 1.7 0 2.6.6.9.4 1.6 1.3 1.8 2.4.3 1.2.2 1.6.3 2.2 0 1.067.033 2.134.1 3.2.067 2.134.133 4.234.2 6.3.3 8.3.6 16.2.8 23.3.4 14.1.7 24.7.6 28.5-.1 2-.1 3.4-.2 4.4 4-.266 8.133-.5 12.4-.7a667.55 667.55 0 01-.2-.8c-1.3-6.8-2.7-63.6-2-70.5.2-1.6.4-2.3.7-2.6-.3-.3-.4-.7-.4-1.3.1-1.2 2.7-5.7 5.8-9.8 2.2-3 4.7-5.9 6.2-7.4.2-.666.467-1.333.8-2 .9-1.6 2.4-3.1 4.1-3.8 1.6-.8 3.3-1.1 4.9-1.3 3.2-.2 5.9-.1 8.8-.2 2.933 0 5.833-.033 8.7-.1h4.5c.9.1 1.9.2 3 .9 1.1.6 1.9 1.8 2.2 2.8.4 1.1.4 1.9.4 2.7l.1 2.2v4.2c.067 2.867.133 5.667.2 8.4.1 11 .2 21.4.3 30.7.2 18.6.2 32.7.1 37.6-.2 4.2-.3 6.4-.6 7.6 5.733-.333 11.367-.633 16.9-.9-.2-.7-.5-1.9-.7-3.9-1.4-11-3.2-102.8-2.4-113.9 0-1.2.1-2.1.2-2.7v-.6c0-1.4 2.3-6.8 4.8-12.1 1.9-4.1 4.3-8.1 5.8-10.1 0-.2 0-.4.1-.6.4-1.3 1.2-2.7 2.3-3.7 1.1-1 2.3-1.6 3.5-2 2.4-.9 4.8-1.1 6.9-1.2 2.2-.2 4.4-.3 6.6-.3 4.3-.1 8.7.1 13.1.5 1 .1 2.1.1 3.5.5.7.2 1.5.5 2.2 1 .7.6 1.3 1.4 1.6 2.2.7 1.5.7 2.8.7 3.9l.1 3.2c.1 8.5.3 16.9.5 25 .3 16.4.6 31.8.8 45.7.5 27.6.7 48.4.7 55.8-.1 5.6-.2 8.9-.4 10.7 10.8-.5 19.9-.9 26.4-1.2-.3-2.6-.5-4.9-.2-5.5.2-.8.6-.9 1.1-1a.896.896 0 01.4-.1 1.583 1.583 0 00-.4-.3c-.5-.5-.5-.9-.4-1.4 0-.6.1-1.1 1-1.4.6-.1 2.1.1 3.8.8 1.7.8 3.5 1.8 5.3 2.9 3.6 2.1 7.1 4.5 7.6 5.4.4.6.3 1.1.1 1.5zM15.5 18.6v-.3c-.267.667-.5 1.267-.7 1.8v.1c.067 0 .167-.033.3-.1v-.4c.2-.5.3-.8.4-1.1zm1.2-6.1l-.8-1.2c-.133.4-.267.767-.4 1.1.133.067.3.167.5.3.2-.133.433-.2.7-.2zm56.5 135c-1.9 1.1-6.7 3.1-11.4 4.8-5.3 1.8-10.5 3.4-12.4 3.6.1 3.8.2 6.6.1 8.2v.9c.2-.2.4-.3.7-.6.6-.5 1.6-1.1 2.6-1.7 2.2-1.3 4.9-2.5 7.7-3.5 2.7-1 5.4-1.9 7.5-2.7 2.2-.8 3.7-1.5 4.4-1.6.6-.1 1 0 1.3.2-.2-2.2-.367-4.733-.5-7.6zM47.1 103c0 .8.1 2 .1 3 .067.667.1 1.3.1 1.9 1.4-1.1 6.1-3.3 11.1-5 3.2-1.2 6.5-2.1 8.9-2.6h-1.5a102.832 102.832 0 00-12.8.8l-3.2.4c-1.1.1-2 .3-2.4.5-.1.2-.1.2-.2.2 0 .1-.1.4-.1.8zm.4 65.7c0-.066-.033-.133-.1-.2-.067 0-.1-.033-.1-.1v-.1c.1-.2 0-.3-.1-.7-.133-.8-.3-1.9-.5-3.3-.5-3.7-1.2-14.3-2.1-28.4-.4-7-.9-14.9-1.4-23.2-.067-1.266-.133-2.566-.2-3.9l-.8 1.4c-1.9 3.1-3.9 6.1-4.8 6.9.2.267.4.734.6 1.4 1.2 4.8 2.2 45.1 1.4 50.1-.067.2-.1.4-.1.6 2.5-.1 5.3-.3 8.2-.5zm.3-50.3c4.5-2.4 20.6-7.9 23-7.8.2 0 .4.034.6.1-.133-2.6-.233-5.266-.3-8-1.5.9-6.3 2.6-11.2 4.3-5.2 1.8-10.5 3.7-11.7 3.8-.333 0-.567-.033-.7-.1v1.6c.133 2.067.233 4.1.3 6.1zm.6 11.8c2.3-1 6.5-2.4 10.7-3.8 5.7-1.8 11.4-3.6 12.8-3.6h.1c-.2-3.1-.3-6.2-.5-9.4-2.7 2-20.4 8.1-23.5 8.3.133 2.934.267 5.767.4 8.5zm.4 11c2.4-.8 6.3-2 10.3-3.1 5.6-1.6 11.2-3.2 12.5-3.1.5 0 .7.1 1 .2a4.627 4.627 0 01-.1-.9c-.1-2.7-.2-5.5-.4-8.4-1.9 1.2-6.7 3.1-11.6 4.7-4.8 1.6-9.7 2.8-12 3.1.067.667.1 1.3.1 1.9.067 1.934.133 3.8.2 5.6zm.2 3.6c.067 2.8.167 5.367.3 7.7 2.2-1.1 6.5-2.8 11-4.3 5.6-2 11.2-3.9 12.6-3.9.1 0 .1.1.1.1-.067-2.2-.167-4.5-.3-6.9l-.2.2c-1 .9-6.5 3-12.1 4.6-4.5 1.3-9.1 2.3-11.4 2.5zM74.9 167c-.2-1-.4-2.3-.6-4.3-.2-1.2-.3-3-.5-5.4-.4.6-1.9 1.7-4.1 2.8-2.1 1.1-4.9 2.2-7.6 3.2-2.7 1-5.4 2-7.4 2.9-1 .5-1.9.9-2.7 1.2-.8.4-1.6.6-2 .6-.267 0-.467-.033-.6-.1a9.56 9.56 0 01-.2.7c7.8-.5 16.5-1 25.7-1.6zm28.7-1.7c-.4-.8-.9-2.8-1.6-7.4-.8-4.9-2.3-19-3.1-37.6-.4-9.3-.6-19.8-.5-30.8 0-2.666.033-5.366.1-8.1-.6.734-1.167 1.534-1.7 2.4-3 4-6 8-7 8.7a1.569 1.569 0 01-.4.3c.2.4.4 1 .6 2 1.3 6.7 2.7 63.6 2 70.5-.067.267-.1.5-.1.7 3.867-.2 7.767-.433 11.7-.7zm32-1.7c-.3-1.2-.6-3.4-.9-7.5-.4-4.9-.8-19-1.3-37.6-.2-9.2-.4-19.7-.6-30.7-.067-2.733-.133-5.5-.2-8.3 0-1.4-.033-2.8-.1-4.2 0-1.5 0-3-.2-3.7-.1-.4-.2-.5-.3-.5-.1-.1-.5-.2-1-.3h-4.1c-2.867.067-5.733.1-8.6.1-5.7.3-12.4-.7-14.2 2.9-1 1.8-1.2 4.5-1.2 7.3-.067 2.8-.133 5.567-.2 8.3-.2 10.9-.1 21.3.2 30.6.5 18.5 1.7 32.5 1.9 37.5.2 4.9.1 6.9-.1 7.8 10.2-.6 20.6-1.2 30.9-1.7zm64.8-35.3c-2.4.5-9.1 1-15.9 1.1-7.5.1-15.1-.1-16.7-.6-.2 0-.4-.1-.5-.2 0 1-.033 1.967-.1 2.9-.1 9.6 0 16.6 0 20.3v1.1c.133-.133.367-.233.7-.3 3.1-1.2 28.9-1.6 33.5-.8l-.2-2.2c-.1-1.9-.2-4.7-.3-8.2-1.6.7-8.8 1.7-16.1 1.8-7.3.1-14.6-.6-16.2-1.2-1.1-.4-1.2-.9-1.2-1.4 0-.6.2-1 1.4-1.4 1.6-.4 8.7-.3 15.9-.4 7.1-.1 14.3-.5 15.9-.2h.2c-.133-3-.267-6.433-.4-10.3zM200 114c-2.6.6-9.1 1-15.7 1-7.4 0-14.9-.7-16.5-1.3-.267-.066-.467-.166-.6-.3.1 4.6.1 8.9.1 12.9.133-.133.333-.233.6-.3 1.6-.6 9-.9 16.4-1 6.8-.1 13.6-.2 16 .2-.133-3.466-.233-7.2-.3-11.2zm-1.5-57.7c-1.2.1-3 .2-5.3.4-3.1.1-6.9.5-10.8.8-3.9.3-7.9.5-11.2.5-3.2-.1-5.6-.4-6.5-.7.067 3.867.2 7.667.4 11.4.2-.1.3-.2.5-.3 3.1-1.2 27.8-2.1 33.1-1.5-.067-3.466-.133-7-.2-10.6zm-33.3-30.2c.1-.1.2-.1.4-.2 1.6-.5 8.9-.7 16.2-1 6.9-.2 13.8-.5 15.9-.3v-1.5l-.1-3.1c0-1.1-.1-2-.2-2.5-.2-.4-.2-.5-.9-.7-.6-.2-1.6-.3-2.7-.4-4.2-.4-8.4-.566-12.6-.5-2.133 0-4.233.1-6.3.3-2.2.1-4.1.3-5.8.8-1.7.6-2.8 1.5-3.2 2.8-.5 1.3-.5 3.7-.7 5.8v.5zm-.6 13.4c.1-.1.1-.1.2-.1 1.6-.5 9.2-.7 16.7-.8 7.3-.2 14.5-.4 16.5-.1l-.2-10.8c-2.3.7-9 1.4-15.8 1.6-7.4.3-14.8-.1-16.4-.6l-.6-.2c-.2 3.667-.333 7.334-.4 11zm0 10.9v4.1c.1 0 .2 0 .3-.1.8-.2 3.1-.3 6.2-.5 3.1-.1 6.9-.5 10.9-.8 3.9-.3 7.9-.5 11.1-.5 2.2.1 4.1.3 5.3.5-.067-1.666-.1-3.3-.1-4.9-.1-2.2-.1-4.5-.2-6.7-2.2.7-9.3 1.3-16.4 1.5-7.6.1-15.3-.3-16.9-.8-.1 0-.1 0-.2-.1-.067 2.8-.067 5.567 0 8.3zm.6 111.6c-.3-1.8-.5-4.7-.8-9.9-.3-3.7-.6-10.8-.7-20.4 0-9.6-.4-21.6-1.2-35.3-.8-13.8-2-29.3-2.2-45.7-.1-7-.1-14.1.3-21.4-.267.667-.567 1.3-.9 1.9-2.5 5.3-5.2 10.6-6.3 11.5 0 .1-.1.1-.2.2a51.6 51.6 0 00.3 1.8c1.4 11 3.2 102.8 2.4 113.9-.1 2-.3 3.2-.5 3.9 3.333-.2 6.6-.366 9.8-.5zm.6-78.4c.2-.3.5-.6 1.1-.8 3.1-1.3 28.9-2.3 32.1-1.4h.1a597.443 597.443 0 01-.3-11.3c-5.5 1.1-30 2-33.1 1.2a3.875 3.875 0 01-.5-.2c.2 4.267.4 8.434.6 12.5zm.8 14.5c.1-.5.3-.9 1.3-1.2 1.5-.5 8.6-.5 15.8-.5 7.1-.1 14.2-.3 15.8.1 0-.9-.1-1.8-.1-2.7-.067-3.133-.133-6.333-.2-9.6h-.1c-3 1.3-28.9 2.2-32 1.4-.7-.2-1-.4-1.2-.6.2 3.734.4 7.367.6 10.9 0 .7 0 1.4.1 2.2zm0 .8c.2 4.3.4 8.5.5 12.4.2-.133.467-.266.8-.4 1.7-.5 9-.4 16.4-.3 6.5 0 13.1 0 15.6.2-.133-3.6-.233-7.4-.3-11.4-1.8.6-8.8 1.3-15.8 1.4-7.3.1-14.5-.5-16-1-.8-.3-1.1-.6-1.2-.9zm35.6 61.2c-.2-1.2-.4-2.9-.6-5.4-4.1 1.2-30.4 1.6-33.6.7-.4-.1-.7-.2-.9-.4 0 3.4-.2 5.5-.3 6.9 12.8-.7 24.9-1.3 35.4-1.8zm31.5-6.5c-.067 0-.1-.033-.1-.1a6.34 6.34 0 01-.7-.4c.133.2.267.5.4.9 0-.066.033-.1.1-.1a.66.66 0 01.3-.3zm3 8c-.067 0-.167.034-.3.1v.2l.3-.3zm5-3.2l-.8-.4c.133.2.233.367.3.5.2-.066.367-.1.5-.1z" fill="#1E1C21"/><path d="M39.4 168.6c.8-5-.2-45.3-1.4-50.1-.2-.667-.4-1.134-.6-1.4.9-.8 2.9-3.8 4.8-6.9l.8-1.4c.067 1.333.133 2.633.2 3.9.5 8.3 1 16.2 1.4 23.2.9 14.1 1.6 24.7 2.1 28.4.2 1.4.367 2.5.5 3.3.1.4.2.5.1.7v.1h-.1c-.1-.1-.2-.1-.3 0 0 .1.1.3.3.2l.1-.2c0 .066.033.1.1.1.067.066.1.133.1.2-2.9.2-5.7.4-8.2.5 0-.2.033-.4.1-.6zm116.5-10c.8-11.1-1-102.9-2.4-113.9a51.521 51.521 0 01-.3-1.8c.1-.1.2-.1.2-.2 1.1-.9 3.8-6.2 6.3-11.5.333-.6.633-1.233.9-1.9-.4 7.3-.4 14.4-.3 21.4.2 16.4 1.4 31.9 2.2 45.7.8 13.7 1.2 25.7 1.2 35.3.1 9.6.4 16.7.7 20.4.3 5.2.5 8.1.8 9.9-3.2.133-6.467.3-9.8.5.2-.7.4-1.9.5-3.9zM92 165.3c.7-6.9-.7-63.8-2-70.5-.2-1-.4-1.6-.6-2 .133-.066.267-.166.4-.3 1-.7 4-4.7 7-8.7.533-.866 1.1-1.666 1.7-2.4-.067 2.734-.1 5.434-.1 8.1-.1 11 .1 21.5.5 30.8.8 18.6 2.3 32.7 3.1 37.6.7 4.6 1.2 6.6 1.6 7.4-3.933.267-7.833.5-11.7.7 0-.2.033-.433.1-.7z" fill="#1E1C21"/><path d="M47.3 168.4l-.1.2c-.2.1-.3-.1-.3-.2.1-.1.2-.1.3 0h.1z" fill="#1E1C21"/><path fill-rule="evenodd" clip-rule="evenodd" d="M38.7 65c1.1-2.7 5.9-11.2 13.1-20.9 3.7-4.9 7.9-10.1 12.6-15.2.6-.6 1.1-1.2 1.8-1.9s1.7-1.6 3.4-1.9c1.7-.2 3.1.6 4 1.3.9.7 1.5 1.4 2 2 1.2 1.267 2.367 2.5 3.5 3.7.533.6 1.1 1.2 1.7 1.8l.2.2.1.1c5.5-4.7 10.6-9 14.6-12.5 4.5-3.7 7.8-6.4 9.3-7.5 1-.7 1.7-1.2 2.3-1.5-1.7-.6-6.3-7.1-6.2-8.5.1-.3.3-.5.5-.8-.2-.2-.2-.4-.2-.6 0-.6.2-1.1 1.7-1.5 2-.5 11.6-.5 21.1-.3 4.8.1 9.6.3 13.4.5 1.9.1 3.6.2 4.9.3.667.067 1.267.133 1.8.2.2.067.4.1.6.1.3.1.6.1.8.2.5.3.9.6 1.1 1 .067 0 .1.033.1.1.3-.2.6-.2.8-.1.6.3.9.8.5 2.7-.4 1.7-2.9 7.5-6.3 14.3-1.7 3.4-3.7 7-5.7 10.6-1 1.8-2 3.533-3 5.2-1.4 2.4-2.7 4.7-4 6.8a574.54 574.54 0 00-3.5-2.7 21.06 21.06 0 01-1.8-1.4 189.908 189.908 0 01-2.9-2.4c-1.7-1.4-2.9-2.5-3.4-3.1-.4-.4-.667-.733-.8-1-.4.5-.9 1.2-1.7 2.2-1.9 2-8.6 8-17.2 15.5a871.044 871.044 0 01-6.7 5.8 557.03 557.03 0 00-7.5 6.4c-1.2 1-3 1-4.4.2-1.5-.9-1.7-1.5-2.3-2.1l-3.4-3.5a156.583 156.583 0 00-3.3-3.4l-1.6-1.8-.5-.5c-.1 0 0 0-.2.1l-1.2.7-2.4 1.4c-1.6 1-3.133 1.967-4.6 2.9-2.9 1.9-5.7 3.7-8.1 5.3-4.8 3.1-8.3 5.5-9.8 6.4-2.9 1.7-3.4 1.6-3.8 1.3-.5-.3-.7-1 .6-4.2zm4.9-2.2c1.5-1.2 3.6-2.7 5.9-4.4 2.4-1.7 5.1-3.6 8-5.6 1.467-1 3-2 4.6-3 .8-.533 1.633-1.067 2.5-1.6l1.3-.8c.6-.4 1.7-.8 2.6-.7.8 0 1.5.3 2.1.8.7.5 1 .9 1.2 1.1l1.7 1.7a3747.1 3747.1 0 003.3 3.5l3.3 3.5c.5.5 1.3 1.2 1.2 1.2 4.9-4.1 9.6-8.1 13.9-11.7 8.7-7.2 15.7-12.9 18-14.5 2.7-1.8 3.4-1.9 3.8-1.6.4-.2 1-.2 2.2.3.7.4 2.1 1.2 3.9 2.5.933.6 1.967 1.3 3.1 2.1.533.4 1.1.8 1.7 1.2l.1-.1s0-.1.1-.2c.4-.8.867-1.633 1.4-2.5.933-1.667 1.9-3.4 2.9-5.2 1.9-3.5 3.9-7.1 5.7-10.4 3.6-6.7 6.4-12.2 7.5-13.6.067-.133.133-.233.2-.3-.133.067-.267.2-.4.4-.1.1-.3.1-.4.2h-.1V5v.1h-.1v.1h-.6c-.467.067-1.033.133-1.7.2-1.3 0-3 .1-4.9.1-3.9 0-8.6 0-13.4-.1-7.2-.2-14.5-.5-18.4-.9 1.9 2.2 4 5.5 3.9 6.5-.1.5-.4.9-.7 1.2-.067 0-.133.033-.2.1.067.067.133.1.2.1.4.5.2 1.3-2.1 3.9-1.2 1.3-4.3 4.3-8.7 8.3-2.1 1.9-4.6 4.1-7.3 6.6-3.1 2.8-6.5 5.8-10.1 9-2.7-2.9-5.5-5.8-8.3-8.8-.6-.6-1.2-1.2-1.6-1.5-.5-.4-.8-.4-.8-.4s-.3.1-.8.6l-1.7 1.8c-4.5 4.9-8.7 10-12.4 14.7-5.1 6.6-9.1 12.5-11.6 16.2z" fill="#1E1C21"/><path d="M53 180.1c-.5-.3-1-.3-1.5-.2-.5.1-1 .2-1.3.7-.3.6-.3 2.9-.2 5.2.1 2.3.2 4.6.8 5.1.4.4.9.5 1.5.5.5.1.9 0 1.3-.4.5-.5.9-3 .8-5.5-.1-2.6-.7-5-1.4-5.4zm32.8-1.1c-.5 0-.9.1-1.3.4-1 .9-1 8.6.2 9.4.4.3.9.3 1.5.2.5 0 .9-.1 1.3-.5.9-1 1-8.2-.2-9.1-.4-.3-.9-.4-1.5-.4zm34.7-.9c-.5.1-.9.1-1.3.5-.9 1-.7 8.2.5 9 .5.2 1 .3 1.6.2.5 0 .9-.1 1.2-.5 1-.9.7-8.2-.5-8.9-.4-.3-.9-.3-1.5-.3zm37.7-.9c-.4-.3-.9-.3-1.5-.3-.5 0-1 .1-1.3.4-1 .8-.8 7.3.4 8 .4.2.9.2 1.5.1.5 0 .9-.1 1.3-.5.9-.9.8-7-.4-7.7zm33.3-1.9c-.5-.3-1-.2-1.6-.2-.5 0-.9.1-1.3.4-.9.9-.7 7.5.5 8.1.4.3.9.3 1.5.3.5-.1 1-.2 1.3-.5.9-.9.7-7.4-.4-8.1zM14.9 150.7c.2-.5.2-1 .1-1.6 0-.4-.2-.9-.5-1.2-.9-.8-7.4.1-7.9 1.3-.2.5-.1 1 0 1.6.1.4.2.9.6 1.2 1 .8 7.2-.1 7.7-1.3zm-5.8-22c1.8-.1 3.6-.7 3.9-1.4.1-.4.1-.9-.1-1.5-.1-.5-.3-.9-.6-1.2-.5-.4-2.1-.4-3.7-.3-1.6.2-3.2.4-3.5.9-.3.4-.3.9-.4 1.5 0 .5 0 1 .3 1.3.4.5 2.3.9 4.1.7zm2.2-23.5c.2-.5.2-1 .1-1.6-.1-.5-.2-.9-.6-1.2-.4-.5-2.4-.4-4.4 0-1.9.3-3.7 1.1-3.9 1.7-.2.5-.1 1 .1 1.6.1.5.3.9.7 1.1.5.4 2.4.2 4.2-.2 1.8-.3 3.5-.8 3.8-1.4zM5.8 83.3c2.2-.4 4.2-1.2 4.5-1.9.2-.5.1-1-.1-1.6-.2-.4-.4-.8-.8-1.1-.6-.3-2.5-.1-4.5.3-1.9.3-3.8.7-4.2 1.3-.3.5-.3 1-.2 1.6 0 .5.1.9.5 1.2.5.5 2.7.6 4.8.2zm2.4-26.8c.2-.4.2-.9.2-1.5-.1-.5-.1-.9-.4-1.3-.7-1-6.4-1-7 .1-.2.5-.2 1-.2 1.6 0 .5.1.9.4 1.3.7.9 6.3 1 7-.2z" fill="#1E1C21"/></g><defs><clipPath id="clip0_56_61690"><path fill="#fff" d="M0 0h249v201H0z"/></clipPath></defs></svg>
        </div>
      </div>
      <Footer/>
    </div>
    
  )
}

export default PageFeatures