import Image from 'next/image'
import React from 'react'

const CardWeather = () => {
    return (
        <div className="text-center flex flex-col">
            <p className='text-xs'>Senin, 4 Januari 2023</p>
            <p className='text-xs'>09:00 WIB</p>
            <Image src={'https://openweathermap.org/img/wn/10d@2x.png'} alt="icon-weather" height={150} width={150} />
            <p>31°C</p>
            <p className="font-bold text-xl">Cloudy</p>
            <p className="text-sm text-gray-400">overcast clouds</p>
        </div>
    )
}

export default CardWeather