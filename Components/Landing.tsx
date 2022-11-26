import React from 'react'

export default function Landing() {
  return (
    <section className='sticky top-0 h-screen flex justify-between  items-center px-8 mx-auto max-w-[1350px]'>
        <div className='space-y-8'>
            <h1 className='font-semibold space-y-3 text-5xl lg:text-6xl xl:text-7xl'>
                <span className='block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'>Powered</span> {/*bg-clip-text text-transparent => Help to provide text -> color effect*/}
                <span className='block'>By Intellect</span>
                <span className='block'>Driven By Values</span>
            </h1>
        </div>
    </section>
  )
}
