import React from 'react'
import featureImage from '../assets/feature-image-03.jpg'
import zap from '../assets/zap.svg'
import setting from '../assets/settings.svg'
import target from '../assets/target.svg'
import data from '../assets/database.svg'
import graph from '../assets/line-chart.svg'
import featureImage2 from '../assets/feature-image-01.jpg'
const DataValue = () => {
    return (
        <div>
            <div className='text-center my-8 xl:my-20 dark:text-white'>
                <h1 className='xl:text-3xl md:text-2xl text-2xl font-bold mb-4'>Unlock the value of your Data</h1>
                <p className='text-gray-500 dark:text-gray-400 mx-4 mb-4'>Lexend is a proven leader in trust intelligence, recognized by top analyst firms.</p>
                <div className='flex w-[250px] gap-2 mx-auto'>
                    <div className='border-2 p-2 rounded-md'>
                        <img src="#" alt="" />
                        <p>Get a demo</p>
                    </div>
                    <p className='bg-green-700 rounded-md p-2 text-lg text-white'>Start a free trial</p>
                </div>
            </div>
            <div className='flex  flex-wrap rounded-2xl dark:text-white dark:bg-zinc-900 bg-[#f6efe9]'>
                <div className=' md:w-[750px] w-full  h-[100%]'>
                    <img className='rounded-t-xl rounded-bl-xl ' src={featureImage} alt="" />
                </div>
                <div className='xl:py-32 py-16 px-8 w-full xl:w-[600px]  xl:px-20  '>
                    <h1 className='xl:text-4xl md:text-3xl text-2xl font-bold mb-5'>End-to-End Data Shared <br />Management</h1>
                    <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                    <div className='mt-10 mb-5'>
                        <div>
                            <div className='mb-5 flex gap-3 items-center font-semibold'>
                                <div className='bg-green-700 rounded-full p-2 w-10'><img src={zap} alt="" /></div>
                                <h1 className='text-xl'>Manage tasks</h1>
                            </div>
                            <p>Offers a unified platform that fosters innovation while providing end-to-end .</p>
                        </div>
                    </div>
                    <hr />
                    <div className='flex gap-3 my-5 items-center'>
                        <div className='bg-green-700 rounded-full p-2 w-10' ><img src={target} alt="" /></div>
                        <p className='text-xl'>Set priorities</p>

                    </div>
                    <hr />
                    <div className='flex gap-3 my-5 items-center'>
                        <div className='bg-green-700 rounded-full p-2 w-11 '  ><img src={setting} alt="" /></div>
                        <p className='text-xl'>Collaborate with your team</p>
                    </div>
                </div>
                <div className='flex flex-wrap-reverse  '>
                    <div className='xl:py-32 py-16  px-5 d  xl:w-[748px]  xl:px-20' >
                        <h1 className='xl:text-4xl md:text-3xl text-2xl   font-bold mb-5' >Unlock your Productivity Potential Now or Never</h1>
                        <p>Unlock your productivity potential with our intuitive and powerful to-do app. Manage tasks, set priorities, collaborate with your team, and track progress effortlessly.</p>
                        <div className='bg-green-700 mt-7 mb-5 rounded-full p-2 w-10'><img src={data} alt="" /></div>
                        <h1 className='text-xl font-semibold'>Use Data & AI responsibly</h1>
                        <p>Offers a unified platform that fosters innovation.</p>
                        <div className=' mt-7 mb-5 bg-green-700 rounded-full p-2 w-10'><img src={graph} alt="" /></div>
                        <h1 className='text-xl font-semibold'>Track progress effortlessly</h1>
                        <p>Providing end-to-end data management today's challenges.</p>
                    </div>
                    <div className='w-auto mx-auto xl:w-[770px] '><img className='rounded-tr-xl  rounded-b-xl'  src={featureImage2} alt="" /></div>
                </div>
            </div>
             
        </div>
    )
}

export default DataValue
