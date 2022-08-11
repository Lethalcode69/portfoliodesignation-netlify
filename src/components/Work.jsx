import React from 'react'
import News from '../assets/news2.png'
import Web3 from '../assets/web3.png'
import portfolio from '../assets/portfolio.png'
import panther from '../assets/panther.png'
import gym from '../assets/gym.png'
import API from '../assets/APIgecko.png'
import Crypto from '../assets/cryptoanalysis.png'
import Code from '../assets/GeneralAnalysis.png'
import Adobe from '../assets/Adobe.png'

const Work = () => {
  return (
    <div className='bg-[#000000] w-full md: text-gray-300 p-4' name='work'>
        
        <div className='max-w-[4000px] mx-auto my-6 p-6 flex flex-col justify-center w-full h-full'>
            <div className='pb-10'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 m-7'>Work</p>
                <p className='py-8'> check out some of my recent work. </p>
            </div>
                {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {/* grid item */}
                <div 
                style={{backgroundImage:`url(${Web3})` }} 
                className='shadow-lg shadow-[#ffffff] 
                group container rounded-md flex justify-center 
                items-center mx-auto content-div'>
                    
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-4xl font-bold text-Red tracking-wide'>Web3 Project</span>
                        <div className='pt-8 text-center'>
                            {/* <a href="/"><button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a> */}
                            <a href="https://github.com/Lethalcode69/Ethereum_wallet"><button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Gitcode</button></a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage:`url(${News})` }} 
                className='shadow-lg shadow-[#ffffff] 
                group container rounded-md flex justify-center 
                items-center mx-auto content-div'>
                    
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-2xl font-bold text-black tracking-wide'>Crypto News</span>
                        <div className='pt-8 text-center'>
                            {/* <a href="/"><button className='text-center rounded-lg px-4 py-2 m-2 bg-black text-white-700 font-bold text-lg'>Demo</button></a> */}
                            <a href="https://github.com/Lethalcode69/News-based-search"><button className='text-center rounded-lg px-4 py-2 m-2 bg-black text-white-700 font-bold text-lg'>Gitcode</button></a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage:`url(${portfolio})` }} 
                className='shadow-lg shadow-[#ffffff] 
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
                className='shadow-lg shadow-[#ffffff] 
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
                className='shadow-lg shadow-[#ffffff] 
                group container rounded-md flex justify-center 
                items-center mx-auto content-div'>
                    
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-2xl font-bold text-black tracking-wide'>Coin Gecko API</span>
                        <div className='pt-8 text-center'>
                            {/* <a href="/"><button className='text-center rounded-lg px-4 py-2 m-2 bg-black text-white-700 font-bold text-lg'>Demo</button></a> */}
                            <a href="https://github.com/Lethalcode69/Coingecko"><button className='text-center rounded-lg px-4 py-2 m-2 bg-black text-white-700 font-bold text-lg'>Gitcode</button></a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage:`url(${gym})` }} 
                className='shadow-lg shadow-[#ffffff] 
                group container rounded-md flex justify-center 
                items-center mx-auto content-div'>
                    
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-2xl font-bold text-black tracking-wide'>Gym Rapid API</span>
                        <div className='pt-8 text-center'>
                            {/* <a href="/"><button className='text-center rounded-lg px-4 py-2 m-2 bg-black text-white-700 font-bold text-lg'>Demo</button></a> */}
                            <a href="https://github.com/Lethalcode69/gymhealthcare.github.io"><button className='text-center rounded-lg px-4 py-2 m-2 bg-black text-white-700 font-bold text-lg'>Github</button></a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage:`url(${Crypto})` }} 
                className='shadow-lg shadow-[#ffffff] 
                group container rounded-md flex justify-center 
                items-center mx-auto content-div'>
                    
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-2xl font-bold text-black tracking-wide'>Power BI Real-time Update</span>
                        <div className='pt-8 text-center'>
                            <a href="https://app.powerbi.com/groups/me/reports/271150ea-bd92-40e8-acf9-b337921ac565/ReportSection"><button className='text-center rounded-lg px-4 py-2 m-2 bg-black text-white-700 font-bold text-lg'>Sample</button></a>
                            {/* <a href="https://github.com/Lethalcode69/gymhealthcare.github.io"><button className='text-center rounded-lg px-4 py-2 m-2 bg-black text-white-700 font-bold text-lg'>Github</button></a> */}
                        </div>
                    </div>
                </div>


                <div 
                style={{backgroundImage:`url(${Code})` }} 
                className='shadow-lg shadow-[#ffffff] 
                group container rounded-md flex justify-center 
                items-center mx-auto content-div'>
                    
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-2xl font-bold text-black tracking-wide'>Dashboard Analysis</span>
                        <div className='pt-8 text-center'>
                            <a href="https://app.powerbi.com/groups/me/reports/5e9ae67f-a0d1-4b89-b58b-2b28fb99e594/ReportSection"><button className='text-center rounded-lg px-4 py-2 m-2 bg-black text-white-700 font-bold text-lg'>Analyze</button></a>
                            {/* <a href="https://github.com/Lethalcode69/gymhealthcare.github.io"><button className='text-center rounded-lg px-4 py-2 m-2 bg-black text-white-700 font-bold text-lg'>Github</button></a> */}
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage:`url(${Adobe})` }} 
                className='shadow-lg shadow-[#ffffff] 
                group container rounded-md flex justify-center 
                items-center mx-auto content-div'>
                    
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-2xl font-bold text-black tracking-wide'>Adobe Wireframing</span>
                        <div className='pt-8 text-center'>
                            <a href="https://xd.adobe.com/view/75e9039a-c053-4cf7-5e5a-a21d006eb819-03d8/?fullscreen"><button className='text-center rounded-lg px-4 py-2 m-2 bg-black text-white-700 font-bold text-lg'>Demo</button></a>
                            {/* <a href="https://github.com/Lethalcode69/gymhealthcare.github.io"><button className='text-center rounded-lg px-4 py-2 m-2 bg-black text-white-700 font-bold text-lg'>Github</button></a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work