"use client"

import { setIsFarenheit } from '@/lib/redux/slice/weatherData/currentWeatherSlice';
import { RootState } from '@/lib/redux/store';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const TemperatureSwitcher = () => {
    const dipatch = useDispatch();
    const isCelsius = useSelector((state: RootState) => state.weather.isCelcius);

    const handleToggle = () => {
        dipatch(setIsFarenheit())
    }

    return (
        <div className="flex items-center justify-center space-x-4">
            <div
                onClick={handleToggle}
                className={`relative flex items-center cursor-pointer w-20 h-10 rounded-full p-1 transition-all duration-300 ease-in-out ${isCelsius ? 'bg-green-500' : 'bg-blue-500'}`}
            >

                <span
                    className={`font-medium text-white text-sm transition-all duration-300 ease-in-out ${isCelsius ? 'ml-10' : 'ml-2'}`}
                >
                    {isCelsius ? '°C' : '°F'}
                </span>
                <div
                    className={`absolute top-1/2 transform -translate-y-1/2 bg-white w-6 h-6 rounded-full transition-all duration-300 ease-in-out ${isCelsius ? 'left-1' : 'left-10'}`}
                />
            </div>
        </div>
    )
}

export default TemperatureSwitcher
