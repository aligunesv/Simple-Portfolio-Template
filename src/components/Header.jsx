import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll'

const Header = () => {

    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#fff] text-[#0F1729]'>
        <div>
            <h1 className=''>Ali Gunes</h1>
        </div>

        {/*menu*/}
        <div className='hidden md:flex'>
            <ul className='hidden md:flex'>
                <li>
                <Link activeClass="active" to="home" smooth={true} duration={500}>
                Home
                </Link>
                </li>
                <li>
                <Link activeClass="active" to="about" smooth={true} duration={500}>
                About
                </Link>     
                </li>
                <li>
                <Link activeClass="active" to="skills" smooth={true} duration={500}>
                Skills
                </Link>  
                </li>
                <li>
                <Link activeClass="active" to="work" smooth={true} duration={500}>
                Work
                </Link> 
                </li>
                <li>
                <Link activeClass="active" to="contact" smooth={true} duration={500}>
                Contact
                </Link>    
                </li>
            </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleClick} className='md:hidden z-10 text-[#0F1729] hover:text-2xl duration-200'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#fff] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  activeClass="active" to="home" smooth={true} duration={500}>
                Home
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} activeClass="active" to="about" smooth={true} duration={500}>
                About
            </Link> 
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  activeClass="active" to="skills" smooth={true} duration={500}>
                Skills
            </Link>  
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  activeClass="active" to="work" smooth={true} duration={500}>
                Work
            </Link> 
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  activeClass="active" to="contact" smooth={true} duration={500}>
                Contact
            </Link> 
            </li>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] bg-[#0F1729] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200'>
                    <a className='flex justify-between items-center w-full text-[#fff]' href="https://www.linkedin.com/in/aligunesv1/">Linkedin <FaLinkedin size={30}/> </a>
                </li>
                <li className='w-[160px] h-[60px] bg-[#0F1729] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200'>
                    <a className='flex justify-between items-center w-full text-[#fff]' href="https://github.com/aligunesv">Github <FaGithub size={30}/> </a>
                </li>
                <li className='w-[160px] h-[60px] bg-[#0F1729] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200'>
                    <a className='flex justify-between items-center w-full text-[#fff]' href="mailto:aligunesv2@gmail.com">Email <HiOutlineMail size={30}/> </a>
                </li>
                <li className='w-[160px] h-[60px] bg-[#0F1729] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200'>
                    <a className='flex justify-between items-center w-full text-[#fff]' href="">Resume <BsFillPersonLinesFill size={30}/> </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header