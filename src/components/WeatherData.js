import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import Weather from './Weather'

function WeatherData() {
    const { weatherData,setWeatherData } = useContext(ThemeContext);
    return (
        <div>
             {weatherData.map(item=>(<Weather key={item.date} date={item.date} mintemp={item.day.mintemp_c} maxtemp={item.day.maxtemp_c} condition={item.day.condition.text} icon={item.day.condition.icon} />))} 
        </div>
    )
}

export default WeatherData
