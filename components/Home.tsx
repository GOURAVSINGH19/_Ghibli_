import { ArrowRight } from 'lucide-react'
import React from 'react'
import Button from './microInteraction/Button'

const Home = () => {
    return (
        <div className='w-full h-full flex items-center justify-center flex-col'>
            <h1 className='text-[8vw] line-clamp-2 leading-[80%] capitalize'>Build beautiful, consistent UIs — fast.</h1>
            <div className=' mt-10 backdrop-blur-2xl  w-[30%] p-1 rounded-2xl flex items-center justify-center gap-3 mb-5'>
                <div className='w-2 h-2 rounded-full bg-purple-800'></div>
                <p className='text-[11px]'>A modern UI library designed for speed, flexibility, and simplicity.</p>
                <ArrowRight className='w-3 font-light' />
            </div>
            <div className='button relative'>
                <Button text="Get Started"  />
            </div>
        </div>
    )
}

export default Home