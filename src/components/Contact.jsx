import React from 'react'

const index = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#f9fafc] text-[#0F1729] flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#0f1729]'>Contact</p>
            <p className='py-4'>// Submit the form below or shoot me an email - aligunesv2@gmail.com</p>
          </div>
          <input className='p-2' type="text" placeholder='Name' name='name'/>
          <input className='my-4 p-2' type="email" placeholder='Email' name='email'/>
          <textarea className='p-2' name="message" id="" rows="10" placeholder='Message'></textarea>
          <button className='bg-[#0f1729] text-[#f9fafc] px-4 py-3 my-8 mx-auto flex items-center'>Submit!</button>
        </form>
    </div>
  )
}

export default index