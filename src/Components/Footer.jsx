import React from 'react'
import logo from '../assets/logo-dark.svg'
const Footer = () => {
  return (
    <div className='bg-[#0e0e0e] px-[40px]  xl:px-[150px] text-white pt-7 xl:pt-20'>
        <div className='flex flex-wrap justify-between'>
            <div>
                <h1 className='text-4xl font-medium mb-5'>Sign up now or never!</h1>
                <p>Stay up to date with the latest news, announcements, and articles.</p>
            </div>
            <div>
               <input className='h-[48px] w-[350px] mr-3 rounded-md' type="email" />
               <button className='bg-green-600 p-3 mb-16 rounded-md'>Subcribe</button>
            </div>

        </div>
        <hr />
        <div className='mt-20  flex gap-20 flex-wrap'>
            <div >
                <img src={logo} alt="" />
                <p>Design amazing digital experiences that create more happy in the world.</p>
                </div>
                <div className='flex flex-wrap gap-20'>
                    <div>
                        <ul className='leading-9'>
                            <li className='text-gray-400'>Product</li>
                            <li>Overview</li>
                            <li>Features</li>
                            <li>Solutions</li>
                            <li>Tutorials</li>
                            <li>Pricing</li>
                            <li>Realeases</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='leading-9'>
                            <li className='text-gray-400'>Company</li>
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>News</li>
                            <li>Media kit</li>
                            <li>Contact</li>
                            
                        </ul>
                    </div>
                    <div>
                        <ul className='leading-9'>
                            <li className='text-gray-400'>Resources</li>
                            <li>Blog</li>
                            <li>Newsletter</li>
                            <li>Events</li>
                            <li>Help center</li>
                            <li>Tutorials</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='leading-9'>
                            <li className='text-gray-400'>Social</li>
                            <li>Twitter</li>
                            <li>Linkedin</li>
                            <li>Facebook</li>
                            <li>GitHub</li>
                            <li>AngelList</li>
                            <li>Dribble</li>
                        </ul>
                    </div>
                </div>
                
        </div>
        <br />
        <br />
        <hr />
     <div className='mt-12 text-center'>
        <p >Dexend © 2024, All rights reserved.</p>
         
     </div>
    </div>
  )
}

export default Footer
