import React from 'react'
import {FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div name='footer' className='w-full h-[100px] bg-[#0F1729] text-[#f9fafc] flex justify-center items-center p-4'>
        <div className='flex max-w-[1250px] w-full justify-between items-center'>
            <p>Designed by <a className='text-red-700' href="https://imvora.dev">imvora.dev</a></p>
            <div className='flex gap-9'>
                <a target='_blank' href="https://www.instagram.com/imvora.dev/"><FaInstagram size={20}/></a>  
                <a target='_blank' href="https://github.com/aligunesv"><FaGithub size={20}/></a> 
                <a target='_blank' href="https://www.linkedin.com/in/aligunesv1/"></a> <FaLinkedin size={20}/>
            </div>
        </div>
    </div>
  )
}

export default Footer