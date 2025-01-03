import { useEffect, useState } from "react"
import { fetchWeather } from "../../../api/weather"

export const Weather = () => {

    const [weather, setWeather] = useState();

    useEffect(() => {
        const getWeather = async () => {
        try {
          const weatherData = await fetchWeather()
          console.log(weatherData, 'weatherData')
          setWeather(weatherData.list[0].main[0].temperature)
        
        } catch (error) {
            console.error(error)
        }
        }
        getWeather()
    }, [])

    console.log('weather', weather)

    return (
        <><div>This is the weather component. The city is Cobourg and the weather is {weather}</div>


        </>
    )
}