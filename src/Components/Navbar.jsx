import React, { useState } from 'react'
import messege from '../assets/message.png'
import call from '../assets/call-outgoing.png'
import logo from '../assets/logo-light.svg'
import earth from '../assets/earth.png'
import p1 from '../assets/index1.jpg'
import p2 from '../assets/index-2.jpg'
import p3 from '../assets/index-3.jpg'
import p4 from '../assets/index-4.jpg'
import image from '../assets/image.jpg'
import { Link } from 'react-router-dom'
import logo2 from '../assets/logo-dark.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const handleClose = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='dark:text-white'>
      <div className='  text-white h-8 px-12 font-medium text-center text-xs hidden xl:flex justify-between bg-[#0b4336]'>
        <div className='flex gap-8 items-center'>

          <p>Customer stories</p>
          <p>Terms and condition</p>
          <p >Hire and expert</p>

        </div>
        <div className='flex gap-8 items-center'>
          <div className='flex gap-2'>
            <img className='w-5' src={call} alt="" />
            <p>  Tel: +1639234</p>
          </div>
          <div className='flex gap-2'><img className='w-5' src={messege} alt="" /><p>Live chat</p></div>

        </div>
      </div>
      <div className='flex    justify-between px-14 h-16 items-center'>
        <div className='flex gap-20'>
          <Link to="/"><img src={logo} alt="" /></Link>
          <ul className='  xl:flex   hidden gap-10 font-medium items-center'>
            <div className='relative group'>
              <div className='flex gap-2 hover:text-slate-500 p-4 cursor-pointer'>
                <li className='block'>Product </li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              <div className='absolute  top-14 left-[-100px] rounded-xl dark:bg-zinc-900 dark:text-white bg-[#fbf9f8] hidden hover:block h-[680px] w-[1200px] group-hover:block'>
                <div className='flex mx-[60px] justify-between mt-[50px]'>
                  <h1 className='text-xl font-bold'>Discover our Product & Solutions</h1>
                  <div className='flex'>
                    <h1>See what's new</h1>
                    <span className='bg-green-200 rounded-full p-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                      <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                    </svg>
                    </span>
                  </div>
                </div>
                <div className='grid grid-cols-3 mx-[100px] mt-[50px]'>
                  <div className='flex gap-3 hover:bg-gray-100 dark:hover:bg-zinc-800 p-3 rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <Link to='/pageFeatures'>
                      <div>
                        <h1 className='font-bold'>Email Template Builder</h1>
                        <p className='text-sm text-gray-500'>Design personalized emails that convert</p>
                      </div></Link>
                  </div>

                  <div className='flex gap-3 dark:hover:bg-zinc-800 hover:bg-gray-100 p-3 rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <Link to='/pageFeatures'>
                      <div>
                        <h1 className='font-bold'>Landing Page Builder</h1>
                        <p className='text-sm text-gray-500'>Delivery the right message to the right user</p>
                      </div></Link>
                  </div>
                  <div className='flex gap-3 hover:bg-gray-100 dark:hover:bg-zinc-800 p-3 rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                    <div>
                      <h1 className='  font-bold'>Reporting & analytics</h1>
                      <p className='text-sm text-gray-500'>Track sales & campaign performance</p>
                    </div>
                  </div>
                  <div className='flex gap-3 mt-10 hover:bg-gray-100 dark:hover:bg-zinc-800 p-3 rounded-lg'>
                    <svg id="Layer_1" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m18 9.064a3.049 3.049 0 0 0 -.9-2.164 3.139 3.139 0 0 0 -4.334 0l-11.866 11.869a3.064 3.064 0 0 0 4.33 4.331l11.87-11.869a3.047 3.047 0 0 0 .9-2.167zm-14.184 12.624a1.087 1.087 0 0 1 -1.5 0 1.062 1.062 0 0 1 0-1.5l7.769-7.77 1.505 1.505zm11.872-11.872-2.688 2.689-1.5-1.505 2.689-2.688a1.063 1.063 0 1 1 1.5 1.5zm-10.825-6.961 1.55-.442.442-1.55a1.191 1.191 0 0 1 2.29 0l.442 1.55 1.55.442a1.191 1.191 0 0 1 0 2.29l-1.55.442-.442 1.55a1.191 1.191 0 0 1 -2.29 0l-.442-1.55-1.55-.442a1.191 1.191 0 0 1 0-2.29zm18.274 14.29-1.55.442-.442 1.55a1.191 1.191 0 0 1 -2.29 0l-.442-1.55-1.55-.442a1.191 1.191 0 0 1 0-2.29l1.55-.442.442-1.55a1.191 1.191 0 0 1 2.29 0l.442 1.55 1.55.442a1.191 1.191 0 0 1 0 2.29zm-5.382-14.645 1.356-.387.389-1.358a1.042 1.042 0 0 1 2 0l.387 1.356 1.356.387a1.042 1.042 0 0 1 0 2l-1.356.387-.387 1.359a1.042 1.042 0 0 1 -2 0l-.387-1.355-1.358-.389a1.042 1.042 0 0 1 0-2z" /></svg>
                    <div  >
                      <h1 className='  font-bold'>Al-Powered Tools</h1>
                      <p className='text-sm text-gray-500'>Say hello to your AI growth assistant</p>
                    </div>
                  </div>
                  <div className='flex gap-3 mt-10 hover:bg-gray-100 dark:hover:bg-zinc-800 p-3 rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                      <path d="M2.879 7.121A3 3 0 0 0 7.5 6.66a2.997 2.997 0 0 0 2.5 1.34 2.997 2.997 0 0 0 2.5-1.34 3 3 0 1 0 4.622-3.78l-.293-.293A2 2 0 0 0 15.415 2H4.585a2 2 0 0 0-1.414.586l-.292.292a3 3 0 0 0 0 4.243ZM3 9.032a4.507 4.507 0 0 0 4.5-.29A4.48 4.48 0 0 0 10 9.5a4.48 4.48 0 0 0 2.5-.758 4.507 4.507 0 0 0 4.5.29V16.5h.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5H3V9.032Z" />
                    </svg>
                    <div>
                      <h1 className='font-bold'>E-commerce and retail</h1>
                      <p className='text-sm text-gray-500'>Ampify the converstion across multiple channels</p>
                    </div>
                  </div>
                  <div className='flex gap-3 mt-10 hover:bg-gray-100 dark:hover:bg-zinc-800 p-3 rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                      <path fillRule="evenodd" d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h1 className='font-bold'>See all products</h1>
                      <p className='text-sm text-gray-500'>See all our product and services offerings</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between mx-[60px]'>
                    <h1>Templates and Integrations</h1>
                    <p>See +80 integrations</p>
                  </div>
                  <div className='  flex mx-[60px] mt-10 gap-4'>
                    <div className='w-64 mt-3 '>
                      <img className='h-56' src={p1} alt="" />
                      <p>SaaS</p>
                    </div>
                    <div className='w-64 mt-3'>
                      <img className='h-56' src={p2} alt="" />
                      <p>Startup</p>
                    </div>
                    <div className='w-64 mt-3'>
                      <img className='h-56' src={p3} alt="" />
                      <p>Software</p>
                    </div>
                    <div className='w-64 mt-3'>
                      <img className='h-56' src={p4} alt="" />
                      <p>Mobile Apps</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='group relative'>
              <div className='flex gap-2 hover:text-slate-500 p-4 cursor-pointer'>
                <li>Resources</li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              <div className="absolute gap-10 w-[750px] bg-white dark:bg-zinc-900    hidden group-hover:block">
                <div className='flex gap-3'>
                  <div className='w-1/2 mt-10 ml-10'>
                    <Link to='pageFeatures'><div className='flex gap-5 mt-6 dark:hover:bg-zinc-800 p-1 rounded-md hover:bg-gray-400 '>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6 text-green-800">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                      </svg>
                      
                      <div className='  '>
                        <h1  >To-Do List</h1>
                        <p className='text-sm text-gray-500'>Managing multiple software and tools for deffarent task </p>
                      </div>
                    </div></Link>
                    <Link to="blogs"><div className='hover:bg-gray-400 dark:hover:bg-zinc-800 p-1 rounded-md flex gap-5 mt-8 items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6 text-green-800">
                        <path d="M12 9a1 1 0 0 1-1-1V3c0-.552.45-1.007.997-.93a7.004 7.004 0 0 1 5.933 5.933c.078.547-.378.997-.93.997h-5Z" />
                        <path d="M8.003 4.07C8.55 3.994 9 4.449 9 5v5a1 1 0 0 0 1 1h5c.552 0 1.008.45.93.997A7.001 7.001 0 0 1 2 11a7.002 7.002 0 0 1 6.003-6.93Z" />
                      </svg>
                      
                      <div>
                        <h1>Reports</h1>
                        <p className='text-sm text-gray-500'>The latest industry reports and industry info</p>
                      </div>
                    </div></Link>
                    <Link to="blogs"> 
                    <div className='hover:bg-gray-400 dark:hover:bg-zinc-800 p-1 rounded-md flex gap-5 mt-8 items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6 text-green-800">
                        <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 0 0 2 4.25v11.5A2.25 2.25 0 0 0 4.25 18h11.5A2.25 2.25 0 0 0 18 15.75V4.25A2.25 2.25 0 0 0 15.75 2H4.25ZM15 5.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0v-8.5Zm-8.5 6a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5ZM8.584 9a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75Zm3.58-1.25a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h1>Spreadsheets</h1>
                        <p className='text-sm text-gray-500'>Suite of tools that cover all aspects of your business.</p>
                      </div>
                    </div></Link>
                    <Link to='pagefeatures'>
                    <div className='hover:bg-gray-400 dark:hover:bg-zinc-800 p-1 rounded-md flex gap-5 mt-8 mb-8 items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h1 >Collaboration</h1>
                        <p className='text-sm text-gray-500'>Assign task, share your file and talk your team</p>
                      </div>
                    </div></Link>
                  </div>
                 
                  <div className='w-1/2 p-10 dark:bg-zinc-800 bg-[#fbf9f8]'>
                    <img className='rounded-xl' src={image} alt="" />
                    <h1 className='font-semibold'>Everything you need is right at your fingertips</h1>
                    <p className='text-sm text-gray-500 mt-2'>Say goodbye to the hassle of managing multiple software and tools for different tasks.</p>
                    <a href="#price"><button className='bg-[#12715b] p-3 w-[100%] rounded-lg mt-5 text-white'>Start free tial</button></a>
                  </div> 
                </div>
              </div>
            </div>
            <li>Learn</li>
            <a href="#price"><li>pricing</li></a>
            <a href="#price"><li>Buy now</li></a>
          </ul>
        </div>
        <div className=' xl:flex  hidden gap-3 items-center'>
          <label for="lang"> <img className='w-6' src={earth} alt="" /></label>

          <select id="lang" className='border-0 dark:bg-slate-800 dark:text-white'>
            <option value="eng">Eng</option>
            <option value="arb">Arb</option>
            <option value="ch">Ch</option>

          </select>
          <button className='bg-[#12715b] font-bold text-white p-2 rounded-md'>Send Inquiry</button>
        </div>
        <div className='block relative xl:hidden' onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

        </div>
        <div
          className={`fixed z-20 top-0 right-0 h-full w-64 dark:bg-gray-800 bg-white dark:text-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out`}
        >
          <div className="p-4">
            <div className='flex justify-between mr-8'><h2 className="text-lg font-bold">Menu</h2>
              <button onClick={handleClose}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              </button>
            </div>
            <ul className="mt-4 space-y-2">
               <Link to='/'><li>Home</li> </Link>
              <li><a href="pageFeatures" className="hover:text-gray-300">Product</a></li>
             <Link to='blogs'> <li className="hover:text-gray-300">Resouces</li></Link>
              <Link to='pageFeatures'><li className="hover:text-gray-300">Learn</li></Link>
              <li><a href="#price" className="hover:text-gray-300">pricing</a></li>
              <li> <a href="#footer"> Contact</a></li>
               
            </ul>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Navbar
