import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0F1729] text-[#f9fafc]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid-cols-2 gap-8'>
                <div className='sm:text-center pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#f9fafc]'>About</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold '>
                    <p>Hi. I'm Ali, nice to meet you. Please take a look around</p>
                </div>
                <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa quo cupiditate officia, reprehenderit placeat temporibus rem tenetur animi illo quidem voluptatibus officiis repellat esse vel laudantium ullam! Sapiente eius nisi nulla recusandae ratione facilis qui esse vitae id dolorum.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About