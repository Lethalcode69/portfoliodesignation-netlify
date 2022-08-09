import React from 'react'
import News from '../assets/news2.png'
import Web3 from '../assets/web3.png'
import portfolio from '../assets/portfolio.png'
import panther from '../assets/panther.png'
import gym from '../assets/gym.png'
import API from '../assets/APIgecko.png'

const Work = () => {
  return (
    <div className='bg-[#0a192f] w-full md:h-screen text-gray-300' name='work'>
        
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'> check out some of my recent work. </p>
            </div>
                {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {/* grid item */}
                <div 
                style={{backgroundImage:`url(${Web3})` }} 
                className='shadow-lg shadow-[#1d2938] 
                group container rounded-md flex justify-center 
                items-center mx-auto content-div'>
                    
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-4xl font-bold text-Red tracking-wide'>Web3 Project</span>
                        <div className='pt-8 text-center'>
                            <a href="/"><button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                            <a href="https://github.com/Lethalcode69/Ethereum_wallet"><button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Gitcode</button></a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage:`url(${News})` }} 
                className='shadow-lg shadow-[#1d2938] 
                group container rounded-md flex justify-center 
                items-center mx-auto content-div'>
                    
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-2xl font-bold text-black tracking-wide'>Crypto News</span>
                        <div className='pt-8 text-center'>
                            <a href="/"><button className='text-center rounded-lg px-4 py-2 m-2 bg-black text-white-700 font-bold text-lg'>Demo</button></a>
                            <a href="https://github.com/Lethalcode69/News-based-search"><button className='text-center rounded-lg px-4 py-2 m-2 bg-black text-white-700 font-bold text-lg'>Gitcode</button></a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage:`url(${portfolio})` }} 
                className='shadow-lg shadow-[#1d2938] 
                group container rounded-md flex justify-center 
                items-center mx-auto content-div'>
                    
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-2xl font-bold text-gray tracking-wide'>Portfolio</span>
                        <div className='pt-8 text-center'>
                            {/* <a href="/"><button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a> */}
                            <a href="https://lethalcode69.github.io/amansinghdesignation.github.io/"><button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage:`url(${panther})` }} 
                className='shadow-lg shadow-[#1d2938] 
                group container rounded-md flex justify-center 
                items-center mx-auto content-div'>
                    
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-2xl font-bold text-black tracking-wide'>Panther Protocol</span>
                        <div className='pt-8 text-center'>
                            {/* <a href="/"><button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a> */}
                            <a href="https://github.com/Lethalcode69/panther"><button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage:`url(${API})` }} 
                className='shadow-lg shadow-[#1d2938] 
                group container rounded-md flex justify-center 
                items-center mx-auto content-div'>
                    
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-2xl font-bold text-black tracking-wide'>Coin Gecko API</span>
                        <div className='pt-8 text-center'>
                            <a href="/"><button className='text-center rounded-lg px-4 py-2 m-2 bg-black text-white-700 font-bold text-lg'>Demo</button></a>
                            <a href="https://github.com/Lethalcode69/Coingecko"><button className='text-center rounded-lg px-4 py-2 m-2 bg-black text-white-700 font-bold text-lg'>Gitcode</button></a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage:`url(${gym})` }} 
                className='shadow-lg shadow-[#1d2938] 
                group container rounded-md flex justify-center 
                items-center mx-auto content-div'>
                    
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-2xl font-bold text-black tracking-wide'>Gym Rapid API</span>
                        <div className='pt-8 text-center'>
                            <a href="/"><button className='text-center rounded-lg px-4 py-2 m-2 bg-black text-white-700 font-bold text-lg'>Demo</button></a>
                            <a href="https://github.com/Lethalcode69/gymhealthcare.github.io"><button className='text-center rounded-lg px-4 py-2 m-2 bg-black text-white-700 font-bold text-lg'>Github</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work