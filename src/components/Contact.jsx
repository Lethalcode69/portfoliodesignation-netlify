import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen bg-[#000000] justify-center items-center p-4 flex' name='contact'>
        <form action="https://getform.io/f/2e0d3a28-30f8-4f55-b68d-59a3f67001ca" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> submit the form below or shoot me an email at - lethalcode2000@yahoo.com</p>
            </div>
            <input type="text" placeholder='Name' name='name' className='bg-[#ccd6f6] p-2' />
            <input className='my-5 p-2 bg-[#ccd6f6]' type="email" placeholder='E-mail' name='email' />
            <textarea name="message" rows="10" className='bg-[#ccd6f6] p-2' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 flex mx-auto items-center'>Let's Work togeather</button>
        </form>
    </div>
  )
}

export default Contact