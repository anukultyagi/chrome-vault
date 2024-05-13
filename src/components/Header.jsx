import React from 'react'

const Header = () => {
    return (
        <header className='container max-w-6xl mx-auto py-10 '>
            <div className='flex flex-col gap-10 m-10 items-center text-center'>
                <p className='text-md '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p className='text-6xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <button className='w-fit mb-2 bg-black font-light text-sm text-white px-6 py-3 rounded-full tracking-widest'>Instructions</button>
            </div>
        </header>
    )
}

export default Header