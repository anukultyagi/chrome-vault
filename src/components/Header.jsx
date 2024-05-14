import React from 'react'

const Header = () => {
    return (
        <header className='container max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col gap-5 m-4 sm:m-8 lg:m-16 items-center text-center'>
                <p className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium'>
                    Transform Your Productivity with Chrome Vault.
                </p>
                <p className='text-sm sm:text-md md:text-lg mb-8 w-full sm:w-3/4 lg:w-2/3'>
                    Browse through a curated selection of Chrome extensions handpicked for productivity, creativity, and convenience. Get ready to supercharge your browsing experience!
                </p>
                <button className='w-fit mb-2 bg-black font-light text-xs sm:text-sm md:text-base text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full tracking-widest hover:bg-gray-800 transition-colors'>
                    Instructions
                </button>
            </div>
        </header>
    )
}

export default Header
