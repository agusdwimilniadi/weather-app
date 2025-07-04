import React from 'react'


const Searchbar = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input {...props} className='bg-secondary ps-5 w-full py-3 px-5 focus:outline-none rounded-xl' type='text' />
    )
}

export default Searchbar