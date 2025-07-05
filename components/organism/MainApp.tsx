
/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Button from '../atoms/Button'
import { IoRefresh, IoSearch } from 'react-icons/io5'
import LanguageToggle from '../atoms/ToogleSwitcher'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import SkeletonBox from '../atoms/SkeletonBox'
import { celsiusToFahrenheit } from '@/utils/celsiusToFarenheit'
import Searchbar from '../molecules/Searchbar'
import { MdOutlineWrongLocation } from 'react-icons/md'
import { getByCity, getCurrentData } from '@/lib/redux/slice/weatherData/action'

const LoadingApp = () => {
    const { city } = useSelector((state: RootState) => state.recentSearch);
    return (
        <>
            <form className='flex items-center gap-3'>
                <Searchbar readOnly value={city === 'jakarta' ? '' : city} autoComplete='off' name='city' placeholder="Search city name in Indonesia" />
                <Button className='h-full' type='submit' icon={IoSearch}>Search</Button>
            </form>
            <div className="flex items-center justify-between mt-5 border border-white/30 rounded-xl p-5">
                <div className="text-start font-bold">Terakhir Diperbarui: <SkeletonBox className='w-40 h-5' /></div>
                <div className='flex items-center gap-3'>
                    <Button isLoading icon={IoRefresh}>
                        Refresh
                    </Button>
                    <LanguageToggle />
                </div>
            </div>
            <div className="flex  items-center justify-between p-5">
                <div className="flex flex-col gap-5">
                    <div className="text-3xl font-semibold">
                        <SkeletonBox className='w-60 h-12' />
                    </div>
                    <div className='flex gap-3'>Longitude: <SkeletonBox className='lg:w-20 w-10 h-5' />, Latitude: <SkeletonBox className='lg:w-20 w-10 h-5' /></div>
                    <div className="text-6xl font-bold">
                        <SkeletonBox className='w-40 h-20' /></div>
                </div>
                <div className="text-center">
                    <SkeletonBox className='w-[150px] h-[150px]' />
                </div>
            </div>
        </>
    )
}
const MainApp = () => {
    const [cityForm, setCityForm] = useState({
        city: '',
    });
    const { isLoading, lastFetch, currentWeatherData, isCelcius, error } = useSelector((state: RootState) => state.weather);
    const { city } = useSelector((state: RootState) => state.recentSearch);

    useEffect(() => {
        getCurrentData(city)
    }, [])

    if (isLoading) {
        return <LoadingApp />
    }

    return (
        <>
            <form onSubmit={(e) => { e.preventDefault(); getByCity(cityForm.city) }} className='flex items-center gap-3'>
                <Searchbar required autoComplete='off' value={cityForm.city} onChange={(e) => setCityForm({ ...cityForm, city: e.target.value })} name='city' placeholder="Search city name in Indonesia" />
                <Button className='h-full' type='submit' icon={IoSearch}>Search</Button>
            </form>
            {
                error ?
                    <div className='text-center text-white text-xl flex items-center justify-center gap-5 h-full'>
                        <MdOutlineWrongLocation size={50} />
                        City Not Found
                        <br />
                    </div>
                    :
                    <>
                        <div className="flex items-center justify-between mt-5 border border-white/30 rounded-xl p-5">
                            <div className="text-start font-bold text-sm lg:text-base">Terakhir Diperbarui: <br /> {isLoading ? <SkeletonBox /> : lastFetch}</div>
                            <div className='flex flex-col lg:flex-row items-center gap-3'>
                                <Button onClick={() => getCurrentData(city)} isLoading={isLoading} icon={IoRefresh}>
                                    Refresh
                                </Button>
                                <LanguageToggle />
                            </div>
                        </div>
                        <div className="flex  items-center justify-between p-5">
                            <div className="flex flex-col gap-5">
                                <p className="lg:text-3xl text-xl font-semibold">{currentWeatherData?.name}, {currentWeatherData?.sys.country} 🇮🇩</p>
                                <p className='text-xs lg:text-base'>Longitude: {currentWeatherData?.coord.lon}, Latitude: {currentWeatherData?.coord.lat}</p>
                                <p className="lg:text-6xl text-2xl font-bold">{isCelcius ? currentWeatherData?.main.temp.toFixed(1) : celsiusToFahrenheit(currentWeatherData?.main.temp as number).toFixed(1)}°{isCelcius ? "C" : "F"}</p>
                            </div>
                            <div className="text-center">
                                <Image src={`https://openweathermap.org/img/wn/${currentWeatherData?.weather[0].icon}@2x.png`} alt="icon-weather" height={150} width={150} />
                                <p className="font-bold text-xl">{currentWeatherData?.weather[0].main}</p>
                                <p className="text-sm text-gray-400">{currentWeatherData?.weather[0].description}</p>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}

export default MainApp