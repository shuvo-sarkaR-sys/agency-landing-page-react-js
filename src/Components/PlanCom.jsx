import React, { useEffect, useState } from 'react'
import brand from '../assets/brand-01 (1).svg'
import p1 from '../assets/01.jpg'
import p2 from '../assets/02.jpg'
import p3 from '../assets/02.png'
const PlanCom = () => {
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
    <div className='text-center dark:text-white'>
      <p className='text-lg h-12 mt-20 mb-10 font-semibold pt-2 border-2 w-48 mx-auto text-center rounded-lg'>Compare plans</p>
      <p className='font-medium'>Prices exclude any applicable taxes.</p>
      <div className='bg-[#f6efe9] dark:bg-zinc-900 py-5 mt-10 rounded-2xl md:mx-[50px] m-auto'>
       <br />
       <br />
            <img className='m-auto ' src={brand} alt="" />
             
         <p className='mt-10 text-lg  font-medium'>“We’re looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.”</p>

         <p className='mt-10'>Anna Yon</p>
         <p className='text-gray-500'>Senior UI/UX Designer</p>
      </div>
      <div className='my-16 text-green-700 font-semibold'>
      <p>See all feedbacks </p>
      <img src="" alt="" />
      </div>
      <p>FAQ</p>
      <h1 className='text-4xl my-5 font-bold'>Frequenlty asked questions:</h1>
      <p>Everything you need to know about the product and billing.</p>
      <div className='md:w-[700px] mt-8 xl:mt-20 mx-auto'>
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
      <div className='md:w-[800px] rounded-xl my-16 py-8 md:py-16 mx-auto dark:bg-zinc-900  bg-[#f6efe9]'>
        <div className='w-[65px] flex mx-auto'>
          <img className='rounded-full ml-[-46px]' src={p1} alt="" />
          <img className='rounded-full ml-[-13px]' src={p2} alt="" />
          <img className='rounded-full ml-[-13px]' src={p3} alt="" />
        </div>
        <h1 className='text-2xl font-medium my-5'>Still have questions?</h1>
        <p className='mx-2'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        <button className='p-3 bg-green-600 text-white rounded-xl mt-7'>Get in touch</button>
      </div>
    </div>
  )
}

export default PlanCom
