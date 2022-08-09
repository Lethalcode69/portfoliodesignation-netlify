import React from 'react'
import {SiHtml5, SiCss3, SiJavascript, SiReact, SiGithub,SiMicrosoftexcel, SiAmazonaws, SiAdobexd, SiTailwindcss, SiPowerbi, SiBootstrap, SiBlockchaindotcom} from 'react-icons/si'
import {FaNodeJs, FaConnectdevelop} from 'react-icons/fa'
const Skills = () => {
  return (
    <div name='skills' className= 'w-full text-gray-300 bg-[#0a192f] '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <p className='text-4xl  py-4 font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'>// These are the technologies i have worked with.</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a className='my-8' href=""><SiHtml5 className=' w-60 mx-auto'/>HTML</a>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a className='my-8' href=""><SiJavascript className=' w-60 mx-auto'/>Javascript</a>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a className='my-8' href=""><SiCss3 className=' w-60 mx-auto'/>CSS</a>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a className='my-8' href=""><SiGithub className=' w-60 mx-auto'/>Github</a>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a className='my-8' href=""><SiTailwindcss className=' w-60 mx-auto'/>TailwindCSS</a>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a className='my-8' href=""><SiReact className=' w-60 mx-auto'/>React JS</a>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a className='my-8' href=""><SiBlockchaindotcom className=' w-60 mx-auto'/>Blockchain</a>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a className='my-8' href=""><FaNodeJs className=' w-60 mx-auto'/>Node JS</a>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a className='my-8' href=""><SiAdobexd className=' w-60 mx-auto'/>Adobe XD</a>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a className='my-8' href=""><SiBootstrap className=' w-60 mx-auto'/>Bootstrap</a>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a className='my-8' href=""><SiPowerbi className=' w-60 mx-auto'/>PowerBI</a>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a className='my-8' href=""><SiMicrosoftexcel className=' w-60 mx-auto'/>MS Excel</a>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a className='my-8' href=""><SiAmazonaws className=' w-60 mx-auto'/>AWS</a>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a className='my-8' href=""><FaConnectdevelop className=' w-60 mx-auto'/>Developer Relation</a>
            </div>
        </div>
    </div>
  )
}

export default Skills