import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ForecastItem, WeatherData } from "./interface"

interface WeatherState {
    currentWeatherData: WeatherData | null
    isLoading: boolean
    error: string | null
    lastFetch: string
    isCelcius: boolean
    forecastData: ForecastItem[]

}

const initialState: WeatherState = {
    currentWeatherData: null,
    error: null,
    isLoading: false,
    lastFetch: '',
    isCelcius: true,
    forecastData: []
}

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setWeatherData: (state, action: PayloadAction<WeatherData>) => {
            state.currentWeatherData = action.payload
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            state.error = null,
                state.lastFetch = new Date().toLocaleString('id-ID', {
                    hour: '2-digit',
                    minute: '2-digit',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                });
        },
        setForecastData: (state, action: PayloadAction<ForecastItem[]>) => {
            const filteredData = action.payload.filter(
                (forecast) => {
                    const hour = new Date(forecast.dt_txt).getHours();
                    return hour === 9 || hour === 21;
                }
            );
            state.forecastData = filteredData;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload
        },
        clearWeatherData: (state) => {
            state.currentWeatherData = null
            state.error = null
        },
        setIsFarenheit: (state) => {
            state.isCelcius = !state.isCelcius
        }
    }
})

export const { setWeatherData, setLoading, setError, clearWeatherData, setIsFarenheit, setForecastData } = weatherSlice.actions;
export default weatherSlice.reducer;