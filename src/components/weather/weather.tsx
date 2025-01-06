import { useEffect, useState } from "react"
// import { fetchWeather } from "../../../api/weather"

export const Weather = () => {

    // const [weather, setWeather] = useState();

    useEffect(() => {
        // const getWeather = async () => {
        // try {
        //   const weatherData = await fetchWeather()
        //   setWeather(weatherData.main.temp)
        
        // } catch (error) {
        //     console.error(error)
        // }
        // }
        // getWeather()

    }, [])


    return (
        <section className="shadow-xl w-1/2 p-4 rounded-xl"><div>
            <h2 className="">Weather</h2>
            <h4 className="text-2xl">Cobourg: 2°C - Cloudy ⛅️</h4>
        </div>


        </section>
    )
}