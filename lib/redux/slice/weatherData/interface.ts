export interface WeatherData {
    coord: Coord
    weather: Weather[]
    base: string
    main: Main
    visibility: number
    wind: Wind
    clouds: Clouds
    dt: number
    sys: Sys
    timezone: number
    id: number
    name: string
    cod: number
}

interface Coord {
    lon: number
    lat: number
}

interface Weather {
    id: number
    main: string
    description: string
    icon: string
}

interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
}

interface Wind {
    speed: number
    deg: number
    gust: number
}

interface Clouds {
    all: number
}

interface Sys {
    country: string
    sunrise: number
    sunset: number
}

export interface ForecastItem {
    dt: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        temp_kf: number;
    };
    weather: Array<{
        id: number;
        main: string;
        description: string;
        icon: string;
    }>;
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    visibility: number;
    pop: number;
    rain?: {
        "3h": number;
    };
    sys: {
        pod: string;
    };
    dt_txt: string;
}