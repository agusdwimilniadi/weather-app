import React from 'react'
import CardWeather from '../molecules/CardWeather'

const Forecast = () => {
    return (
        <div className='p-5 bg-secondary rounded-xl'>
            <p className='font-bold uppercase mb-5'>Forecast next days</p>
            <div className='grid grid-cols-6 gap-3'>
                <CardWeather />
                <CardWeather />
                <CardWeather />
                <CardWeather />
                <CardWeather />
                <CardWeather />
            </div>
        </div>
    )
}

export default Forecast