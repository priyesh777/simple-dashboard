import { useEffect, useState } from "react";
import {
    Title,
    Card,
} from "@tremor/react";
import styles from './DashWeather.module.scss';

interface WeatherInfo {
    name?: string;
    main?: {
        temp: number;
    };
    weather?: {
        description: string;
        icon: string;
        id: number;
        main: string;
    }[];
    wind: {
        speed: number;
        deg: number;
    }

}

function DashWeather() {
    const [weather, setWeather] = useState<WeatherInfo | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const apiKey = "dd6e2d43d6883cdc5451370a909cd69a";
            const city = "Toronto";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                console.error("Failed to fetch weather data", error);
            }
        };

        fetchWeather();
    }, []);
    console.log("The weather data::>>", weather, !!weather);


    return (
        <Card maxWidth="max-w-3xl" decoration="top" decorationColor="blue">
            <Title>Weather Data API</Title>
            {weather ? (
                <div className={styles.widgetContainer}>
                    <h2 className={styles.header}>Location: {weather?.name}</h2>
                    <p className={styles.paragraph}>Temperature: {(!!weather.main && weather?.main.temp - 273.15)}°C</p>
                    <p className={styles.paragraph}>Condition: {!!weather.weather && weather.weather.length > 0 ? weather?.weather[0]?.description.toLocaleUpperCase() : "--"}</p>
                </div>
            ) : (<div className={styles.paragraph}>Loading weather...</div>)}
        </Card>
    );
}

export default DashWeather;
