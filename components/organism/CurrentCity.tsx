import React from 'react'
import HistoryList from '../molecules/HistoryList'

const CurrentCity = () => {
    return (
        <div className='h-full p-5 flex flex-col gap-5'>
            <p className='font-bold uppercase'>Recently Searched Locations</p>
            <hr className='' />
            <HistoryList />
        </div>
    )
}

export default CurrentCity