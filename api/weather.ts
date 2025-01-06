type Weather = {
    degrees: number;
    city: string;
}

export const fetchWeather = async () => {

    const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=e99002bd1f715b636bb6dcdbd3faeef8'
 
    
    try {
        const response = await fetch(url);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data, 'component data');
        return data;
    } catch (error) {
        console.error(error);
    }
}