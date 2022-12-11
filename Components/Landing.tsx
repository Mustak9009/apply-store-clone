import React from 'react'
import Image from 'next/image';
import Button from './Button';
export default function Landing() {
  return (
    <section className='sticky top-0 h-screen flex justify-between  items-center px-8 mx-auto max-w-[1450px] '>
        <div className='space-y-8'>
            <h1 className='font-semibold space-y-3 text-5xl lg:text-6xl xl:text-7xl'>
                <span className='block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'>Powered</span> {/*bg-clip-text text-transparent => Help to provide text -> color effect*/}
                <span className='block'>By Intellect</span>
                <span>Driven By Values</span>
            </h1>
            <div className='space-x-9'>
              <Button title={'Buy me'}/>
              <a className='link'>Learn more</a>
            </div>
            
        </div>
        <div className='relative hidden w-[450px] h-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[650px]'>
              <Image src='/apple.png' alt={'apple 13'} width={500} height={500}/>
            </div>
    </section>
  )
}
