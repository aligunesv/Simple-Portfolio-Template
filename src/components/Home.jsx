import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-blue-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#0F1729]'>Ali Gunes</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'>I'm Front-end Web Developer</h2>
            <p className='text-gray-500 py-4 max-w-[700px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quia iure officiis inventore ratione veniam dolorum quidem distinctio molestias amet!</p>
            <div>
                <button className='text-[#fff] group bg-[#0F1729] px-6 py-3 my-2 flex items-center hover:bg-[#fff] duration-200 hover:text-[#0F1729]'>View Work 
                <span>
                <HiArrowNarrowRight className='group-hover:translate-x-2 duration-200 ml-4'/>
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home