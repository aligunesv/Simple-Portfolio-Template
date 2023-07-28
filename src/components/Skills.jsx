import React from 'react'
import {FaHtml5, FaGithub, FaCss3, FaReact, FaDatabase, FaJs, FaWordpress, FaPython, FaLinux} from 'react-icons/fa'

const Skills = () => {
  return (
    <div name='skills' className='h-screen w-full text-[#0F1729]' >
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#0f1729]'>Skills</p>
                <p className='py-4 '>// These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className=' hover:scale-110 duration-200'>
                    <FaHtml5 className='text-[#0F1729] mx-auto' size={60}/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className=' hover:scale-110 duration-200'>
                    <FaCss3 className='text-[#0F1729] mx-auto' size={60}/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className=' hover:scale-110 duration-200'>
                    <FaGithub className='text-[#0F1729] mx-auto' size={60}/>
                    <p className='my-4'>Github</p>
                </div>
                <div className=' hover:scale-110 duration-200'>
                    <FaReact className='text-[#0F1729] mx-auto' size={60}/>
                    <p className='my-4'>React</p>
                </div>
                <div className=' hover:scale-110 duration-200'>
                    <FaDatabase className='text-[#0F1729] mx-auto' size={60}/>
                    <p className='my-4'>SQL</p>
                </div>
                <div className=' hover:scale-110 duration-200'>
                    <FaJs className='text-[#0F1729] mx-auto' size={60}/>
                    <p className='my-4'>Javascript</p>
                </div>
                <div className=' hover:scale-110 duration-200'>
                    <FaWordpress className='text-[#0F1729] mx-auto' size={60}/>
                    <p className='my-4'>Wordpress</p>
                </div>
                <div className=' hover:scale-110 duration-200'>
                    <FaPython className='text-[#0F1729] mx-auto' size={60}/>
                    <p className='my-4'>Python</p>
                </div>
                <div className=' hover:scale-110 duration-200'>
                    <FaLinux className='text-[#0F1729] mx-auto' size={60}/>
                    <p className='my-4'>Linux</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills