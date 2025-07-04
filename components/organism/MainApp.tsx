/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Button from '../atoms/Button'
import { IoRefresh } from 'react-icons/io5'
import LanguageToggle from '../atoms/ToogleSwitcher'
import axiosInstance from '@/lib/api/axiosInstance'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import { setError, setLoading, setWeatherData } from '@/lib/redux/slice/weatherData/currentWeatherSlice'
import SkeletonBox from '../atoms/SkeletonBox'
import { celsiusToFahrenheit } from '@/utils/celsiusToFarenheit'
import Searchbar from '../molecules/Searchbar'
import { addSearch, setCityRoot } from '@/lib/redux/slice/searchData/recentSearchSlice'

const LoadingApp = () => {
    return (
        <>
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
                    <div className='flex gap-3'>Longitude: <SkeletonBox className='w-20 h-5' />, Latitude: <SkeletonBox className='w-20 h-5' /></div>
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
    const dispatch = useDispatch();
    const { isLoading, lastFetch, currentWeatherData, isCelcius } = useSelector((state: RootState) => state.weather);
    const { city } = useSelector((state: RootState) => state.recentSearch);

    const getCurrentData = async () => {
        try {
            dispatch(setLoading(true))
            const data = await axiosInstance.get(`weather?q=${city},id&APPID=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`);
            // const dataForecast = await axiosInstance.get(`forecast?q=nganjuk,id&APPID=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`);
            // console.log({ dataForecast })
            dispatch(setWeatherData(data.data))
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(setLoading(false))
        }
    }

    useEffect(() => {
        getCurrentData()
    }, [])

    if (isLoading) {
        return <LoadingApp />
    }


    const getByCity = async () => {
        try {
            dispatch(setCityRoot(cityForm.city))
            dispatch(setLoading(true))
            const data = await axiosInstance.get(`weather?q=${cityForm.city},id&APPID=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`);
            dispatch(setWeatherData(data.data))
            dispatch(addSearch({ city: data.data.name, cityCode: data.data.id }))
            dispatch(setError(null))
        } catch (error: any) {
            console.log(error.response.data.message)
            dispatch(setError(error.response.data.message || 'Something went wrong'))
            dispatch(setCityRoot('jakarta'))
        } finally {
            dispatch(setLoading(false))
        }
    }


    return (
        <>
            <form onSubmit={(e) => { e.preventDefault(); getByCity() }}>
                <Searchbar onChange={(e) => setCityForm({ ...cityForm, city: e.target.value })} name='city' placeholder="Search city" />
            </form>
            <div className="flex items-center justify-between mt-5 border border-white/30 rounded-xl p-5">
                <div className="text-start font-bold">Terakhir Diperbarui: <br /> {isLoading ? <SkeletonBox /> : lastFetch}</div>
                <div className='flex items-center gap-3'>
                    <Button onClick={getCurrentData} isLoading={isLoading} icon={IoRefresh}>
                        Refresh
                    </Button>
                    <LanguageToggle />
                </div>
            </div>
            <div className="flex  items-center justify-between p-5">
                <div className="flex flex-col gap-5">
                    <p className="text-3xl font-semibold">{currentWeatherData?.name}, {currentWeatherData?.sys.country}</p>
                    <p>Longitude: {currentWeatherData?.coord.lon}, Latitude: {currentWeatherData?.coord.lat}</p>
                    <p className="text-6xl font-bold">{isCelcius ? currentWeatherData?.main.temp.toFixed(1) : celsiusToFahrenheit(currentWeatherData?.main.temp as number).toFixed(1)}°{isCelcius ? "C" : "F"}</p>
                </div>
                <div className="text-center">
                    <Image src={`https://openweathermap.org/img/wn/${currentWeatherData?.weather[0].icon}@2x.png`} alt="icon-weather" height={150} width={150} />
                    <p className="font-bold text-xl">{currentWeatherData?.weather[0].main}</p>
                    <p className="text-sm text-gray-400">{currentWeatherData?.weather[0].description}</p>
                </div>
            </div>
        </>
    )
}

export default MainApp