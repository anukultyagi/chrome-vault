import React from 'react'

const Header = () => {
    return (
        <header className='container max-w-6xl mx-auto py-10 '>
            <div className='flex flex-col gap-5 m-10 items-center text-center'>
                <p className='text-md w-2/3'>Browse through a curated selection of Chrome extensions handpicked for productivity, creativity, and convenience. Get ready to supercharge your browsing experience! </p>
                <p className='text-6xl mb-5'>Transform Your productivity with Chrome Vault. </p>
                <button className='w-fit mb-2 bg-black font-light text-sm text-white px-6 py-3 rounded-full tracking-widest'>Instructions</button>
            </div>
        </header>
    )
}

export default Header