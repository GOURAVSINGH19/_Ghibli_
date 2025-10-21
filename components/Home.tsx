import { ArrowRight } from 'lucide-react'
import React from 'react'

const Home = () => {
    return (
        <section className='w-full h-1/2 flex items-center mt-[4vw] flex-col mb-10'>
            <div className='mt-10 w-fit backdrop-blur-2xl bg-white/10 border border-white/10 lg:w-[30%] px-4 py-1/2 rounded-2xl flex items-center justify-center gap-3 mb-5 shadow-[var(--shadow-sm)]'>
                <div className='w-2 h-2 rounded-full bg-purple-800'></div>
                <p className='text-[10px]'>A modern UI library designed for speed, flexibility, and simplicity.</p>
                <ArrowRight className='w-3 font-light' />
            </div>
            <h1 className='text-[8vw] line-clamp-2 leading-[110%] capitalize'>Build beautiful, consistent UIs — fast.</h1>
        </section>
    )
}

export default Home