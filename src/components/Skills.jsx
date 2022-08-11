import React from 'react'
import {SiHtml5, SiCss3, SiJavascript, SiReact, SiGithub,SiMicrosoftexcel, SiAmazonaws, SiAdobexd, SiTailwindcss, SiPowerbi, SiBootstrap, SiBlockchaindotcom} from 'react-icons/si'
import {FaNodeJs, FaConnectdevelop} from 'react-icons/fa'
const Skills = () => {
  return (
    <div name='skills' className= 'w-full text-gray-300 bg-[#000000] '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <p className='text-4xl  py-4 font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'>These are the technologies i have worked with.</p>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8'>
            <div className='shadow-md shadow-[#999898] hover:scale-110 duration-500'>
                <a className='my-10' href="/"><SiHtml5 className=' w-60 mx-auto'/>HTML</a>
            </div>
            <div className='shadow-md shadow-[#949393] hover:scale-110 duration-500'>
                <a className='my-10' href="/"><SiJavascript className=' w-60 mx-auto'/>Javascript</a>
            </div>
            <div className='shadow-md shadow-[#868383] hover:scale-110 duration-500'>
                <a className='my-10' href="/"><SiCss3 className=' w-60 mx-auto'/>CSS</a>
            </div>
            <div className='shadow-md shadow-[#898787] hover:scale-110 duration-500'>
                <a className='my-10' href="/"><SiGithub className=' w-60 mx-auto'/>Github</a>
            </div>
            <div className='shadow-md shadow-[#868585] hover:scale-110 duration-500'>
                <a className='my-10' href="/"><SiTailwindcss className=' w-60 mx-auto'/>TailwindCSS</a>
            </div>
            <div className='shadow-md shadow-[#888787] hover:scale-110 duration-500'>
                <a className='my-10' href="/"><SiReact className=' w-60 mx-auto'/>React JS</a>
            </div>
            <div className='shadow-md shadow-[#838181] hover:scale-110 duration-500'>
                <a className='my-10' href="/"><SiBlockchaindotcom className=' w-60 mx-auto'/>Blockchain</a>
            </div>
            <div className='shadow-md shadow-[#959698] hover:scale-110 duration-500'>
                <a className='my-10' href="/"><FaNodeJs className=' w-60 mx-auto'/>Node JS</a>
            </div>
            <div className='shadow-md shadow-[#8a8a8c] hover:scale-110 duration-500'>
                <a className='my-10' href="/"><SiAdobexd className=' w-60 mx-auto'/>Adobe XD</a>
            </div>
            <div className='shadow-md shadow-[#9fa1a1] hover:scale-110 duration-500'>
                <a className='my-10' href="/"><SiBootstrap className=' w-60 mx-auto'/>Bootstrap</a>
            </div>
            <div className='shadow-md shadow-[#98999a] hover:scale-110 duration-500'>
                <a className='my-10' href="/"><SiPowerbi className=' w-60 mx-auto'/>PowerBI</a>
            </div>
            <div className='shadow-md shadow-[#959698] hover:scale-110 duration-500'>
                <a className='my-10' href="/"><SiMicrosoftexcel className=' w-60 mx-auto'/>MS Excel</a>
            </div>
            <div className='shadow-md shadow-[#98989a] hover:scale-110 duration-500'>
                <a className='my-10' href="/"><SiAmazonaws className=' w-60 mx-auto'/>AWS</a>
            </div>
            <div className='shadow-md shadow-[#989899] hover:scale-110 duration-500'>
                <a className='my-10' href="/"><FaConnectdevelop className=' w-60 mx-auto'/>Developer Relation</a>
            </div>
        </div>
    </div>
  )
}

export default Skills