type Weather = {
    degrees: number;
    city: string;
}

export const fetchWeather = async (city: string) => {

    const url = 'https://weather-api167.p.rapidapi.com/api/weather/forecast?place=London&cnt=3&units=standard&type=three_hour&mode=json&lang=en';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8780038684mshf933dce4ebe00dfp171953jsn97e90579acca',
            'x-rapidapi-host': 'weather-api167.p.rapidapi.com',
            Accept: 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}