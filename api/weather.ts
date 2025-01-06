type Weather = {
    degrees: number;
    city: string;
}

// export const fetchWeather = async () => {

//     const url = 'https://open-weather13.p.rapidapi.com/city/cobourg/EN';
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '8780038684mshf933dce4ebe00dfp171953jsn97e90579acca',
//             'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
//         }
//     };
    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }

//     try {
//         const response = await fetch(url, options);
//         const data = await response.json();
//         console.log(data, 'component data');
//         return data;
//     } catch (error) {
//         console.error(error);
//     }
// }