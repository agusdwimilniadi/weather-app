import { RootState } from '@/lib/redux/store'
import { celsiusToFahrenheit } from '@/utils/celsiusToFarenheit'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

interface CardWeatherProps {
    dateTime: string
    temp: number
    weather: string
    icon: string
    description: string

}
const CardWeather = (props: CardWeatherProps) => {
    const isCelsius = useSelector((state: RootState) => state.weather.isCelcius)
    const date = new Date(props.dateTime)
    const hour = date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    return (
        <div className="text-center flex flex-col min-w-[150px]">
            <p className='text-xs'>{date.toDateString()}</p>
            <p className='text-xs'>{hour}</p>
            <Image src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="icon-weather" height={150} width={150} />
            <p>{isCelsius ? `${props.temp.toFixed(1)}°C` : `${celsiusToFahrenheit(props.temp).toFixed(1)}°F`}</p>
            <p className="font-bold text-xl">{props.weather}</p>
            <p className="text-sm text-gray-400">{props.description}</p>
        </div>
    )
}

export default CardWeather