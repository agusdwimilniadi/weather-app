import React from 'react'
import CardWeather from '../molecules/CardWeather'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'

const Forecast = () => {
    const forecastData = useSelector((state: RootState) => state.weather.forecastData)
    return (
        <div className="p-5 bg-secondary rounded-xl w-full">
            <p className="font-bold uppercase mb-5">Forecast weather next days</p>
            <div className="flex overflow-x-auto w-full gap-3 custom-scroll pb-10">
                {forecastData.map((forecast, index) => (
                    <CardWeather
                        key={index}
                        dateTime={forecast.dt_txt}
                        temp={forecast.main.temp}
                        weather={forecast.weather[0].main}
                        icon={forecast.weather[0].icon}
                        description={forecast.weather[0].description}
                    />
                ))}
            </div>
        </div>

    )
}

export default Forecast