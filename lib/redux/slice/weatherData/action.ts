import axiosInstance from "@/lib/api/axiosInstance";
import { store } from "../../store";
import { addSearch, setCityRoot } from "../searchData/recentSearchSlice";
import { setError, setForecastData, setLoading, setWeatherData } from "./currentWeatherSlice";

export const getByCity = async (cityParams: string) => {
    try {
        store.dispatch(setCityRoot(cityParams));
        store.dispatch(setLoading(true));

        const weatherParams = {
            q: `${cityParams},id`,
            APPID: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
            units: 'metric'
        };

        const forecastParams = {
            q: `${cityParams},id`,
            APPID: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
            units: 'metric'
        };

        const [weatherResponse, forecastResponse] = await Promise.all([
            axiosInstance.get('weather', { params: weatherParams }),
            axiosInstance.get('forecast', { params: forecastParams })
        ]);

        store.dispatch(setWeatherData(weatherResponse.data));
        store.dispatch(setForecastData(forecastResponse.data.list));

        store.dispatch(addSearch({ city: weatherResponse.data.name, cityCode: weatherResponse.data.id }));

        store.dispatch(setError(null));

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || 'Something went wrong';
        console.log(errorMessage);
        store.dispatch(setError(errorMessage));
        store.dispatch(setCityRoot('jakarta'));
    } finally {
        store.dispatch(setLoading(false));
    }
};

export const getCurrentData = async (city:string) => {
    try {
        store.dispatch(setLoading(true))

        const weatherParams = {
            q: `${city},id`,
            APPID: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
            units: 'metric'
        };

        const forecastParams = {
            q: `${city},id`,
            APPID: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
            units: 'metric'
        };

        const [weatherResponse, forecastResponse] = await Promise.all([
            axiosInstance.get('weather', { params: weatherParams }),
            axiosInstance.get('forecast', { params: forecastParams })
        ]);

        store.dispatch(setWeatherData(weatherResponse.data))
        store.dispatch(setForecastData(forecastResponse.data.list))
    } catch (error) {
        console.log(error)
    } finally {
        store.dispatch(setLoading(false))
    }
}