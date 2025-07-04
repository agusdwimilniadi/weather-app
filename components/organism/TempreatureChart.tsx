"use client"

import React, { useEffect, useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const TemperatureChart = () => {
    const [data, setData] = useState<{ date: string, temp: number }[]>([])

    useEffect(() => {
        const rawData = [
            { dt_txt: "2025-07-04 09:00:00", main: { temp: 28.21 } },
            { dt_txt: "2025-07-05 09:00:00", main: { temp: 27.33 } },
            { dt_txt: "2025-07-06 09:00:00", main: { temp: 28.85 } },
            { dt_txt: "2025-07-07 09:00:00", main: { temp: 30.03 } },
            { dt_txt: "2025-07-08 09:00:00", main: { temp: 29.73 } },
            { dt_txt: "2025-07-09 09:00:00", main: { temp: 28.4 } },
            { dt_txt: "2025-07-04 12:00:00", main: { temp: 29.1 } },
            { dt_txt: "2025-07-05 12:00:00", main: { temp: 28.0 } },
            { dt_txt: "2025-07-06 12:00:00", main: { temp: 29.0 } },
            { dt_txt: "2025-07-07 12:00:00", main: { temp: 30.5 } },
            { dt_txt: "2025-07-08 12:00:00", main: { temp: 29.6 } },
            { dt_txt: "2025-07-09 12:00:00", main: { temp: 28.7 } }
        ]

        const filteredData = rawData.map(item => ({
            date: item.dt_txt.split(' ')[0],
            temp: item.main.temp,
        }))

        setData(filteredData)
    }, [])

    return (
        <div className="p-5 bg-secondary rounded-xl">
            <p className="font-bold uppercase mb-5 text-xl">Temperature (All Times)</p>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value} °C`} />
                    <Legend />
                    <Line type="monotone" dataKey="temp" stroke="#8884d8" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TemperatureChart
