import { useEffect, useState } from "react"
import { fetchWeather } from "../../../api/weather"

interface WeatherData {
    current: {
        temp: number;
        weather: [
            {
                main: string;
            }
        ]
    }
}

export const Weather = () => {

    const [weather, setWeather] = useState<WeatherData>();

    useEffect(() => {
        const getWeather = async () => {
        try {
          const weatherData = await fetchWeather()
          console.log(weatherData)
          setWeather(weatherData)
        
        } catch (error) {
            console.error(error)
        }
        }
        getWeather()

    }, [])


    const getIcon = (weather:string) => {
        switch (weather) {
            case 'Clouds':
                return '⛅️'
            case 'Rain':
                return '🌧'
            case 'Clear':
                return '☀️'
            default:
                return '🤷‍♀️'
    }
}

  // Convert kelvin to celsius
  const kelvinToCelsius = (kelvin: number): number => {
    return kelvin - 273.15;
  };

  const celsiusWeatherNumber = kelvinToCelsius(weather ? weather.current.temp : 0);
  const descriptionOfWeather = weather ? weather.current.weather[0].main : '';
console.log('description', descriptionOfWeather)

const weatherIcon = getIcon(descriptionOfWeather ? descriptionOfWeather : '')

    return (
        <section className="shadow-xl w-1/2 p-4 rounded-xl m-2"><div>
            <h2 className="">Weather</h2>
            <h4 className="text-2xl">Cobourg: {celsiusWeatherNumber.toFixed(0)}°C - {descriptionOfWeather} {getIcon(descriptionOfWeather)}
            </h4>
        </div>


        </section>
    )
}