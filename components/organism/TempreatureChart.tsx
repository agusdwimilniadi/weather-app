"use client"

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { celsiusToFahrenheit } from '@/utils/celsiusToFarenheit'

const TemperatureChart = () => {
    const forecastData = useSelector((state: RootState) => state.weather.forecastData)
    const isCelcius = useSelector((state: RootState) => state.weather.isCelcius)
    const [data, setData] = useState<{ date: string, temp: number, time: string }[]>([])

    useEffect(() => {
        const transformedData = forecastData.map(item => ({
            date: item.dt_txt,
            time: item.dt_txt.split(' ')[1].substring(0, 5),
            temp: isCelcius ? item.main.temp : celsiusToFahrenheit(item.main.temp),
        }))

        setData(transformedData)
    }, [forecastData, isCelcius])

    const formatDate = (date: string) => {
        console.log({ date })
        const options: Intl.DateTimeFormatOptions = {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        };
        return new Intl.DateTimeFormat('id-ID', options).format(new Date(date));
    };



    return (
        <div className="p-5 bg-secondary rounded-xl">
            <p className="font-bold uppercase mb-5">Forecast Temperature (09:00 & 21:00)</p>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="date"
                        tickFormatter={formatDate}
                    />
                    <YAxis domain={['auto', 'auto']} />
                    <Tooltip
                        formatter={(value: number, name) => {
                            if (name === 'temp') {
                                return `${value.toFixed(1)}°${isCelcius ? 'C' : 'F'}`;
                            }
                            return value;
                        }}
                        labelFormatter={(label) => formatDate(label)}
                        labelStyle={{ color: 'black' }}
                        itemStyle={{ color: 'black' }}
                        labelClassName='text-sm'

                    />
                    <Legend wrapperStyle={{ color: 'black' }} formatter={(value) => value === "temp" ? "Temperature" : value}
                    />
                    <Line type="monotone" dataKey="temp" stroke="white" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TemperatureChart
