import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className='bg-[#000000] w-full h-screen ' name='home'>
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className='text-pink-600 text-2xl'>Hey, my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Aman Singh </h1>
            <h2 className='text-4xl sm:text-5xl font-semibold text-[#8892b0]'>I'm a Frontend UI/UX Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full stack developer specializing in building and designing
                exceptional digital experience. Currently i'm focused on building 
                responsive web3 full-stack web application.
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    View Work <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home